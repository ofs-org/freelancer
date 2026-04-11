import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport:
    process.env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty', options: { colorize: true } }
      : undefined,
  formatters: {
    level: (label: string) => {
      return { level: label };
    },
  },
  timestamp: () => `,"timestamp":"${new Date().toISOString()}"`,
});

export default logger;

export function createChildLogger(name: string) {
  return logger.child({ module: name });
}

export function logRequest(method: string, path: string, statusCode?: number) {
  logger.info({ method, path, statusCode }, 'HTTP Request');
}

export function logError(error: Error, context?: Record<string, unknown>) {
  logger.error(
    {
      err: error,
      message: error.message,
      stack: error.stack,
      ...context,
    },
    'Application Error'
  );
}

export function logInfo(message: string, data?: Record<string, unknown>) {
  logger.info(data, message);
}

export function logWarn(message: string, data?: Record<string, unknown>) {
  logger.warn(data, message);
}

export function logDebug(message: string, data?: Record<string, unknown>) {
  logger.debug(data, message);
}
