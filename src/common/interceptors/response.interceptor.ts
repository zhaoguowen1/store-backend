import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

interface Data<T> {
  data: T;
  code: number;
  message: string;
  success: boolean;
}

/**
 * http 拦截器 设置response成功返回格式
 */
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Data<T>> {
    // 因为nestjs使用REST API风格，对于post请求默认返回201，所以需要手动处理成200
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const request = httpContext.getRequest();
    if (
      request.method === 'POST' &&
      response.statusCode === HttpStatus.CREATED
    ) {
      response.statusCode = HttpStatus.OK;
    }
    return next.handle().pipe(
      map((data) => ({
        data,
        code: 200,
        message: '请求成功',
        success: true,
      })),
    );
  }
}
