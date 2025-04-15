import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BetModalService {
  private openModalSubject = new Subject<any>();
  openModal$ = this.openModalSubject.asObservable();

  open(matchData: { idMatch: number; teamA: string; teamB: string }) {
    this.openModalSubject.next(matchData);
  }
}
