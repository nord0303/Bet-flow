import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Match } from "../models/match";

@Injectable({
  providedIn: "root",
})
export class MatchApiService {
  private mockMatches: Match[] = [
    { id: 1, teamA: "Équipe A", teamB: "Équipe B" },
    { id: 2, teamA: "Équipe C", teamB: "Équipe D" },
    { id: 3, teamA: "Équipe E", teamB: "Équipe F" },
    { id: 4, teamA: "Équipe G", teamB: "Équipe H" },
    { id: 5, teamA: "Équipe I", teamB: "Équipe J" },
  ];

  getFeaturedMatches(limit: number = 3): Observable<Match[]> {
    return of(this.mockMatches.slice(0, limit));
  }

  getMatches(): Observable<Match[]> {
    return of(this.mockMatches);
  }
}
