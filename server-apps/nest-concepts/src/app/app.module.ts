import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    Feature1Module,
    Feature2Module,
  ],
  controllers: [ AppController ],
  providers: [ AppService,
    {
      provide: APP_GUARD,
      useClass: class {},
      inject: []
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
