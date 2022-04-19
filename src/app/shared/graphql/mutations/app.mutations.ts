import { gql } from 'apollo-angular';

export class Mutations {
  public static get OpenBox() {
    return gql`mutation OpenBox($input: OpenBoxInput!) {
        openBox(input: $input) {
          boxOpenings {
            id
            itemVariant {
              id
              name
              value
            }
          }
        }
      }
    `;
  }
}
