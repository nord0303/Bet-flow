import { Component } from "@angular/core";
import { NgForOf } from "@angular/common";
import { Match } from "../../models/match";
import { MatchApiService } from "../../api/match-api.service";

@Component({
  selector: "app-featured-match",
  imports: [NgForOf],
  templateUrl: "./featured-match.component.html",
  styleUrl: "./featured-match.component.css",
})
export class FeaturedMatchComponent {
  featuredMatches: Match[] = [];
  constructor(private matchService: MatchApiService) {}
  ngOnInit(): void {
    this.matchService.getFeaturedMatches(3).subscribe((matches) => {
      this.featuredMatches = matches;
    });
  }
}
