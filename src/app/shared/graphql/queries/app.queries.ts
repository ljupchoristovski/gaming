import { gql } from 'apollo-angular';

export class Queries {
  public static get Boxes() {
    return gql`
      {
        boxes(free: true, openable: true, purchasable: true) {
          edges {
            node {
              id
              name
              iconUrl
              cost
            }
          }
        }
      }
    `;
  }

  public static get User() {
    return gql`
    {
        currentUser {
          id
          name
          wallets
          {
            id
            amount
            currency
          }
        }
      }
    `;
  }

  public static BoxDetails(id: string) {
    return gql`
    {
        box(id: "${id}") {
          id,
          name,
          iconUrl,
          price,
          slots {
            id,
            itemId,
            rate
            item {
              id,
              name,
              value,
              currency,
              iconUrl
            }
          }
        }
      }
    `;
  }
}
