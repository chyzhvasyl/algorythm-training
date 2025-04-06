import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Feature1Service } from './feature1/feature1.module';
import { Feature2Service } from './feature2/feature2.module';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly feature1: Feature1Service,
    private readonly feature2: Feature2Service,
  ) {
    console.log('AppController feature1', feature1)
    console.log('AppController feature2', feature2)
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
