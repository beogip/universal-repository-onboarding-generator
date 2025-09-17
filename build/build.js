#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class PromptBuilder {
  constructor(options = {}) {
    this.isDev = options.dev || false;
    this.isWatch = options.watch || false;
    this.srcDir = path.join(process.cwd(), 'src');
    this.partsDir = path.join(this.srcDir, 'parts');
    this.distDir = path.join(process.cwd(), 'dist');
    this.outputFile = path.join(this.distDir, 'repository-onboarding-generator.prompt.md');
    this.configFile = path.join(this.partsDir, 'config.json');
  }

  log(message) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${message}`);
  }

  error(message) {
    const timestamp = new Date().toLocaleTimeString();
    console.error(`[${timestamp}] ERROR: ${message}`);
  }

  success(message) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ✅ ${message}`);
  }

  readConfig() {
    try {
      const configContent = fs.readFileSync(this.configFile, 'utf8');
      return JSON.parse(configContent);
    } catch (error) {
      this.error(`Failed to read config file: ${error.message}`);
      process.exit(1);
    }
  }

  readPartFile(filename) {
    const filePath = path.join(this.partsDir, filename);
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      this.error(`Failed to read part file ${filename}: ${error.message}`);
      process.exit(1);
    }
  }

  processTemplate(template, variables) {
    let processed = template;
    
    // Add automatic variables
    const autoVariables = {
      DATE: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long'
      }),
      BUILD_DATE: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
      TIMESTAMP: new Date().toISOString()
    };
    
    // Merge user variables with automatic variables (user variables take precedence)
    const allVariables = { ...autoVariables, ...variables };
    
    for (const [key, value] of Object.entries(allVariables)) {
      const placeholder = `{{${key}}}`;
      processed = processed.replace(new RegExp(placeholder, 'g'), value);
    }
    return processed;
  }

  validateParts(parts) {
    for (const part of parts) {
      const filePath = path.join(this.partsDir, part.file);
      if (!fs.existsSync(filePath)) {
        this.error(`Part file does not exist: ${part.file}`);
        return false;
      }
    }
    return true;
  }

  build() {
    this.log('Starting build process...');

    const config = this.readConfig();
    
    if (!this.validateParts(config.parts)) {
      process.exit(1);
    }

    let output = '';
    
    // Add header
    if (config.header) {
      output += this.readPartFile(config.header.file);
      if (config.header.variables) {
        output = this.processTemplate(output, config.header.variables);
      }
      output += '\n\n';
    }

    // Add main content wrapper start
    if (config.wrapper && config.wrapper.start) {
      output += config.wrapper.start + '\n';
    }

    // Add parts in order
    for (const part of config.parts) {
      this.log(`Processing part: ${part.name}`);
      if (this.isDev && part.description) {
        this.log(`  → ${part.description}`);
      }
      
      let partContent = this.readPartFile(part.file);
      
      // Process variables if any
      if (part.variables) {
        partContent = this.processTemplate(partContent, part.variables);
      }
      
      output += partContent;
      
      // Add separator if not the last part
      if (config.parts.indexOf(part) < config.parts.length - 1) {
        output += '\n\n';
      }
    }

    // Add main content wrapper end
    if (config.wrapper && config.wrapper.end) {
      output += '\n' + config.wrapper.end;
    }

    // Add footer
    if (config.footer) {
      output += '\n\n';
      output += this.readPartFile(config.footer.file);
      if (config.footer.variables) {
        output = this.processTemplate(output, config.footer.variables);
      }
    }

    // Write output file
    try {
      // Ensure dist directory exists
      if (!fs.existsSync(this.distDir)) {
        fs.mkdirSync(this.distDir, { recursive: true });
        this.log(`Created dist directory: ${this.distDir}`);
      }
      
      fs.writeFileSync(this.outputFile, output, 'utf8');
      this.success(`Built prompt file: ${this.outputFile}`);
      
      // Show statistics
      const lines = output.split('\n').length;
      const chars = output.length;
      const words = output.split(/\s+/).length;
      
      console.log(`📊 Statistics:`);
      console.log(`   Lines: ${lines.toLocaleString()}`);
      console.log(`   Characters: ${chars.toLocaleString()}`);
      console.log(`   Words: ${words.toLocaleString()}`);
      
    } catch (error) {
      this.error(`Failed to write output file: ${error.message}`);
      process.exit(1);
    }
  }

  watch() {
    this.log('Starting watch mode...');
    
    // Initial build
    this.build();
    
    // Watch for changes
    const watcher = chokidar.watch([
      this.partsDir + '/**/*.md',
      this.partsDir + '/**/*.json'
    ], {
      ignored: /(^|[\/\\])\../,
      persistent: true
    });

    watcher.on('change', (filePath) => {
      this.log(`File changed: ${path.relative(process.cwd(), filePath)}`);
      setTimeout(() => this.build(), 100); // Small delay to handle rapid changes
    });

    watcher.on('add', (filePath) => {
      this.log(`File added: ${path.relative(process.cwd(), filePath)}`);
      setTimeout(() => this.build(), 100);
    });

    watcher.on('unlink', (filePath) => {
      this.log(`File removed: ${path.relative(process.cwd(), filePath)}`);
      setTimeout(() => this.build(), 100);
    });

    this.log('👀 Watching for file changes... Press Ctrl+C to stop.');
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  dev: args.includes('--dev'),
  watch: args.includes('--watch')
};

// Create and run builder
const builder = new PromptBuilder(options);

if (options.watch) {
  builder.watch();
} else {
  builder.build();
}
