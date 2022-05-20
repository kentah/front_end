import gql from 'graphql-tag';
//import { CreatePostInput } from '../generated/graphql';

export const MUTATION_DELETE_POST = gql`
  mutation deleteUserPost($id: Float!) {
    deletePost(id: $id)
    }
`;

