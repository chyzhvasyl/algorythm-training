import { ArgumentsHost, Inject, Injectable, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class Feature2Service {
  constructor(@Inject(REQUEST) private readonly request: any) {
    console.log('Feature2Service created');
  }

  getHello(): string {
    return 'Hello from Feature2!';
  }
}

@Module({
  providers: [Feature2Service],
  exports: [Feature2Service],
})
export class Feature2Module {}
