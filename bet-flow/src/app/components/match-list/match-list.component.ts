import { Component, Input } from "@angular/core";
import { Match } from "../../models/match";
import { NgForOf, NgIf } from "@angular/common";
import { BetButtonComponent } from "../bet-button/bet-button.component";

@Component({
  selector: "app-match-list",
  imports: [NgIf, NgForOf, BetButtonComponent],
  templateUrl: "./match-list.component.html",
  styleUrl: "./match-list.component.css",
})
export class MatchListComponent {
  @Input() matches: Match[] = [];
}
