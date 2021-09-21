import { Injectable, Scope } from "@nestjs/common";
import { v4 } from "uuid";

@Injectable({ scope: Scope.REQUEST })
export class RequestIdService {
  private readonly requestId: string;
  constructor() {
    this.requestId = v4();
  }

  getRequestId() {
    return this.requestId;
  }
}
