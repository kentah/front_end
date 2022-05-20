import gql from 'graphql-tag';
//import { CreatePostInput } from '../generated/graphql';

export const MUTATION_CREATE_POST = gql`
  mutation makePost($title: String!, $body: String!, $ispublished: Boolean!, $image: String!) {
    createPost(
      data: {
        title: $title
        body: $body
        ispublished: $ispublished
        image: $image
        author: { id: 1, username: "kentah", password: "abraxas" }
      }
    ) {
      title
    }
  }
`;

//export const MUTATION_CREATE_POST = gql`
//  mutation createPost($post: CreatePostInput!) {
//    createPost(data: $post) {
//      title
//    }
//  }
//`;
