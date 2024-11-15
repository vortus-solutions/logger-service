# @vortus-solutions/logger-service

A robust logging service for Node.js applications built on top of [Pino](https://getpino.io/), providing enhanced console logging capabilities with pretty formatting.

## Features

- Built on top of the high-performance Pino logger
- Console method overriding (`log`, `error`, `warn`, `info`, `debug`)
- Pretty printing with colorization
- ISO timestamp formatting
- Automatic error object handling
- Configurable log levels
- Maintains original console references

## Installation

```bash
npm install @vortus-solutions/logger-service
```

## Requirements

- Node.js >= 14.0.0

## Usage

### Basic Usage

```javascript
const logger = require('@vortus-solutions/logger-service');

// Regular logging
console.log('Hello World'); // Will use enhanced logging

// Object logging
console.log({ user: 'john', action: 'login' });

// Error logging
console.error(new Error('Something went wrong'));

// Other log levels
console.warn('Warning message');
console.info('Info message');
console.debug('Debug message');
```

### Accessing Original Console

If you need to access the original console methods:

```javascript
console.original.log('Using original console.log');
```

## Configuration

The logger can be configured through environment variables:

| Variable     | Default | Description           |
|-------------|---------|------------------------|
| LOG_LEVEL  | 'info'  | Minimum logging level |
| LOG_TRANSLATE_TIME   |  'pattern' | Date pattern  |

### Log Levels

Available log levels in order of priority:

1. error
2. warn
3. info
4. debug

## Features in Detail

### Automatic Error Handling

When logging Error objects, the logger automatically formats them properly:

```javascript
const error = new Error('Database connection failed');
console.error(error);
// Will output formatted error with stack trace
```

### Object Logging

Objects are automatically stringified and formatted:

```javascript
console.log({
  event: 'user_action',
  details: {
    userId: 123,
    action: 'login'
  }
});
```

### ISO Timestamp

All logs include ISO formatted timestamps for precise timing information.

## Development

```bash
# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format

# Build
npm run build
```

## License

MIT

## Author

Danilo Recchia <danilo.recchia@vortus.solutions>

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -am 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a new Pull Request

## Support

For support, issues, or feature requests, please file an issue in the [GitHub repository](https://github.com/vortus-solutions/logger-service).