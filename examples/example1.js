// Import the logger
const logger = require('../lib/index');

// Basic usage examples
logger.info('This is a simple info message');
logger.warn('Warning: Something needs attention');
logger.error('An error occurred in the application');
logger.debug('Debug information for developers');

// Logging with objects
const user = {
    id: 123,
    name: 'John Doe',
    email: 'john@example.com'
};
logger.info({ user }, 'User details logged');

// Logging errors
try {
    throw new Error('Something went wrong!');
} catch (error) {
    logger.error({ err: error }, 'Error occurred while processing');
}

// Using console overrides (they now use the pino logger)
console.log('This uses pino logger via console.log');
console.error('This uses pino logger via console.error');
console.warn('This uses pino logger via console.warn');
console.info('This uses pino logger via console.info');
console.debug('This uses pino logger via console.debug');

// Logging with additional context
logger.info({
    requestId: '123abc',
    endpoint: '/api/users',
    method: 'GET'
}, 'API request received');

// Logging with multiple parameters
const duration = 1234;
logger.info({ duration }, 'Operation completed successfully');

// Using original console if needed
console.original.log('This uses the original console.log');