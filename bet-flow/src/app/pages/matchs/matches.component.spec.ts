import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MatchesComponent } from "./matches.component";

describe("MatchsComponent", () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
