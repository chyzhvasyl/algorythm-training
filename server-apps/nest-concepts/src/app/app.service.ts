import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor() {}

  getData(): { message: string } {
    return { message: 'Hello API!' };
  }
}
