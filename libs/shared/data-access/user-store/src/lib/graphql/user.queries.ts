import {gql} from '@apollo/client';
import {IApolloRequest} from "@modern-app/shared/utils/interfaces";


export const userRequest: IApolloRequest = {
  keys: ['user'],
  query: gql`
    query {
      user {
        id
        username
        password
        nickname
        email
        phone
        created
        updated
      }
    }
  `,
};
