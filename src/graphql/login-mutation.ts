import gql from 'graphql-tag';
//import { AuthInput } from '../generated/graphql';

export const MUTATION_LOGIN = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      author {
        first_name
        last_name
      }
    }
  }
`;
