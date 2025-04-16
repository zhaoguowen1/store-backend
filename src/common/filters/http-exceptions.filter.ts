import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

/**
 * error异常捕获
 */
@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    let validMessage = '';
    const exceptionResponse: any = exception.getResponse();
    // 考虑异常返回object类型的请求
    if (typeof exceptionResponse === 'object') {
      validMessage =
        typeof exceptionResponse.message === 'string'
          ? exceptionResponse.message
          : exceptionResponse.message.join(',');
    }
    const errorResponse = {
      data: null,
      message: validMessage || exception.message,
      code: status,
      success: false,
    };
    response.status(status).json(errorResponse);
  }
}
