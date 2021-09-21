import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { RequestIdService } from "./request-id/request-id.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly idService: RequestIdService,
  ) {}

  @Get()
  getHello() {
    const inController = this.idService.getRequestId();
    const fromAppService = this.appService.getId();
    return {
      fromController: inController,
      fromAppService,
    };
  }
}
