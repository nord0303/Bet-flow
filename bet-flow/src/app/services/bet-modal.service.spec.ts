import { TestBed } from "@angular/core/testing";

import { BetModalService } from "./bet-modal.service";

describe("BetModalService", () => {
  let service: BetModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetModalService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
