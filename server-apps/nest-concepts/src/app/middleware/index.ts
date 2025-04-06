import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Feature1Service } from '../feature1/feature1.module';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly feature1: Feature1Service) {
    console.log('LoggerMiddleware feature1', feature1);
  }

  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request url', req.url);
    next();
  }
}
