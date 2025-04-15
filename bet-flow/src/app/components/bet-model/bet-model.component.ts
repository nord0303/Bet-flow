import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Bet } from "../../models/bet";
import { Match } from "../../models/match";
import { BetModalService } from "../../services/bet-modal.service";
import { BetApiService } from "../../api/bet-api.service";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-bet-modal",
  imports: [FormsModule, NgIf],
  templateUrl: "./bet-model.component.html",
  styleUrl: "./bet-model.component.scss",
})
export class BetModalComponent {
  show = false;
  match: Match = { id: 0, teamA: "", teamB: "" };
  bet: Bet = { id: 0, idMatch: 0, winningTeam: "", betAmount: 0 };

  constructor(
    private modalService: BetModalService,
    private betService: BetApiService
  ) {}

  ngOnInit(): void {
    this.modalService.openModal$.subscribe((match) => {
      this.match = match;
      this.bet = {
        id: 0,
        idMatch: match.idMatch,
        winningTeam: "",
        betAmount: 0,
      };
      this.show = true;
    });
  }

  submitBet(): void {
    this.betService.createBet(this.bet);
    this.close();
  }

  close(): void {
    this.show = false;
  }
}
