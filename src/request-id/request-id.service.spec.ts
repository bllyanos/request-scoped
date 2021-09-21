import { Test, TestingModule } from "@nestjs/testing";
import { RequestIdService } from "./request-id.service";

describe("RequestIdService", () => {
  let service: RequestIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestIdService],
    }).compile();

    service = module.get<RequestIdService>(RequestIdService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
