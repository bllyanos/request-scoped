import { Injectable } from "@nestjs/common";
import { RequestIdService } from "./request-id/request-id.service";

@Injectable()
export class AppService {
  constructor(private readonly idService: RequestIdService) {}

  getId(): string {
    return this.idService.getRequestId();
  }
}
