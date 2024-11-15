'use strict'

const pino = require('pino');

// Configuração do Pino
const logger = pino({
	level: process.env.LOG_LEVEL || 'info',
	timestamp: pino.stdTimeFunctions.isoTime,
	formatters: {
		level: (label) => {
			return { level: label.toUpperCase() };
		},
	},
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
			translateTime: process.env.LOG_TRANSLATE_TIME || 'UTC:yyyy-mm-dd HH:MM:ss.l o', // Shows explicit timezone offset
			ignore: 'pid,hostname', // This removes PID and hostname
			messageFormat: '{msg}' // This ensures only the message is formatted
		}
	}
});

// Sobrescrevendo com tratamento de objetos e erros
const originalConsole = { ...console };

console.log = (...args) => {
	if (args[0] instanceof Error) {
		logger.info({ err: args[0] }, ...args.slice(1));
	} else if (typeof args[0] === 'object') {
		logger.info(args[0], ...args.slice(1));
	} else {
		logger.info(...args);
	}
};

console.error = (...args) => {
	if (args[0] instanceof Error) {
		logger.error({ err: args[0] }, ...args.slice(1));
	} else {
		logger.error(...args);
	}
};

console.warn = (...args) => logger.warn(...args);
console.info = (...args) => logger.info(...args);
console.debug = (...args) => logger.debug(...args);

// Mantém referência original se necessário
console.original = originalConsole;

module.exports = logger;