import { Component, Input } from "@angular/core";
import { BetModalService } from "../../services/bet-modal.service";
import { Match } from "../../models/match";

@Component({
  selector: "app-bet-button",
  imports: [],
  templateUrl: "./bet-button.component.html",
  styleUrl: "./bet-button.component.css",
})
export class BetButtonComponent {
  @Input() match!: Match;

  constructor(private betModal: BetModalService) {}

  openModal(): void {
    this.betModal.open({
      idMatch: this.match.id,
      teamA: this.match.teamA,
      teamB: this.match.teamB,
    });
  }
}
