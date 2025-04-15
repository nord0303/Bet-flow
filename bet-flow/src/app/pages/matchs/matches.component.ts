import { Component } from "@angular/core";
import { FeaturedMatchComponent } from "../../components/featured-match/featured-match.component";
import { MatchListComponent } from "../../components/match-list/match-list.component";
import { Match } from "../../models/match";
import { MatchApiService } from "../../api/match-api.service";
import { BetListComponent } from "../../components/bet-list/bet-list.component";

@Component({
  selector: "app-matchs",
  imports: [FeaturedMatchComponent, MatchListComponent, BetListComponent],
  templateUrl: "./matches.component.html",
  styleUrl: "./matches.component.css",
})
export class MatchesComponent {
  matches: Match[] = [];

  constructor(private matchService: MatchApiService) {}

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches;
    });
  }
}
