import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs';
import { Mutations } from '../graphql/mutations/app.mutations';
import { Queries } from '../graphql/queries/app.queries';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  constructor(private _appolo: Apollo) {}

  getAllBoxes() {
    return this._appolo
      .watchQuery({
        query: Queries.Boxes,
      })
      .valueChanges.pipe(map((res: any) => res.data));
  }

  getBoxDetails(id: string) {
    return this._appolo
      .watchQuery({
        query: Queries.BoxDetails(id),
      })
      .valueChanges.pipe(map((res: any) => res.data));
  }

  openBox(boxId: string) {
    return this._appolo
    .mutate({
      mutation: Mutations.OpenBox,
      variables: {
          input: {boxId, amount: 1}
      }
    });
  }

  getUserInfo() {
    return this._appolo
      .watchQuery({
        query: Queries.User,
      })
      .valueChanges.pipe(map((res: any) => res));
    }
}
