import { Component } from "@angular/core";
import { Match } from "../../models/match";
import { MatchApiService } from "../../api/match-api.service";
import { Bet } from "../../models/bet";
import { BetApiService } from "../../api/bet-api.service";
import { BetButtonComponent } from "../bet-button/bet-button.component";
import { CurrencyPipe, NgForOf, NgIf } from "@angular/common";

@Component({
  selector: "app-bet-list",
  imports: [NgForOf, NgIf, CurrencyPipe],
  templateUrl: "./bet-list.component.html",
  styleUrl: "./bet-list.component.css",
})
export class BetListComponent {
  bets: Bet[] = [];

  constructor(private betService: BetApiService) {}

  ngOnInit(): void {
    this.betService.getBets().subscribe((bets) => {
      this.bets = bets;
    });
  }

  getTotalBetAmount(): number {
    return this.bets.reduce((total, bet) => total + bet.betAmount, 0);
  }
}
