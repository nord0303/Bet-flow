import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Bet } from "../models/bet";

@Injectable({
  providedIn: "root",
})
export class BetApiService {
  private mockBets: Bet[] = [
    { id: 1, idMatch: 1, winningTeam: "Équipe B", betAmount: 975 },
    { id: 1, idMatch: 2, winningTeam: "Équipe C", betAmount: 3460 },
  ];

  getBets(): Observable<Bet[]> {
    return of(this.mockBets);
  }

  createBet(bet: Bet): Observable<void> {
    const newId =
      this.mockBets.length > 0
        ? Math.max(...this.mockBets.map((b) => b.id)) + 1
        : 1;
    this.mockBets.push({ ...bet, id: newId });
    return of();
  }
}
