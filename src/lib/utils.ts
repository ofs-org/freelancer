import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getErrorCode, isAppError } from './errors';
import logger from './logger';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function handleError(error: unknown): {
  code: string;
  message: string;
  statusCode: number;
  details?: unknown;
} {
  if (isAppError(error)) {
    logger.warn({ error: error.toJSON() }, error.message);
    return {
      code: error.code,
      message: error.message,
      statusCode: error.statusCode,
      details: error.details,
    };
  }

  logger.error({ err: error }, 'Unhandled error');

  if (error instanceof Error) {
    return {
      code: getErrorCode(error),
      message: error.message,
      statusCode: 500,
    };
  }

  return {
    code: 'INTERNAL_ERROR',
    message: 'An unexpected error occurred',
    statusCode: 500,
  };
}

export function errorResponse(error: unknown): Response {
  const handled = handleError(error);
  return Response.json(handled, { status: handled.statusCode });
}

export function asyncHandler<T>(
  fn: (...args: unknown[]) => Promise<T>
): (...args: unknown[]) => Promise<T> {
  return async (...args: unknown[]) => {
    try {
      return await fn(...args);
    } catch (error) {
      if (isAppError(error)) {
        throw error;
      }
      logger.error({ err: error, fn: fn.name }, 'Async handler caught error');
      throw error;
    }
  };
}
