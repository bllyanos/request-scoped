import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RequestIdService } from "./request-id/request-id.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RequestIdService],
})
export class AppModule {}
