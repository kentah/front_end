import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AuthInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  posts?: Array<Post>;
  active: Scalars['Boolean'];
  username: Scalars['String'];
};

export type AuthorInput = {
  id: Scalars['Float'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  author?: Maybe<Author>;
  errors?: Maybe<Array<FieldError>>;
};

export type CreateAuthorInput = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  active: Scalars['Boolean'];
};

export type CreatePostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
  ispublished: Scalars['Boolean'];
  image: Scalars['String'];
  author: AuthorInput;
};


export type FieldError = {
  __typename?: 'FieldError';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createAuthor: Author;
  login: AuthorResponse;
  updatePost: Post;
  updateAuthor: Author;
  deletePost: Scalars['Boolean'];
  deleteAuthor: Scalars['Boolean'];
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationCreateAuthorArgs = {
  data: CreateAuthorInput;
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationUpdatePostArgs = {
  data: UpdatePostInput;
  id: Scalars['Float'];
};


export type MutationUpdateAuthorArgs = {
  data: UpdateAuthorInput;
  id: Scalars['Float'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  author: Author;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  image: Scalars['String'];
  ispublished: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
  post: Post;
  authors: Array<Author>;
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};

export type UpdateAuthorInput = {
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
};

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  ispublished?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
};

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'created_at' | 'updated_at' | 'ispublished' | 'image'>
    & { author: (
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'first_name' | 'last_name' | 'username' | 'active'>
    ) }
  )> }
);

export type MakePostMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
  ispublished: Scalars['Boolean'];
  image: Scalars['String'];
}>;


export type MakePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'title'>
  ) }
);

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthorResponse' }
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'first_name' | 'last_name'>
    )> }
  ) }
);

export type GetPostQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'created_at' | 'updated_at' | 'ispublished' | 'image'>
    & { author: (
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'first_name' | 'last_name' | 'username' | 'active'>
    ) }
  ) }
);


export const AllPostsDocument = gql`
    query AllPosts {
  posts {
    id
    title
    body
    created_at
    updated_at
    ispublished
    image
    author {
      id
      first_name
      last_name
      username
      active
    }
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const MakePostDocument = gql`
    mutation makePost($title: String!, $body: String!, $ispublished: Boolean!, $image: String!) {
  createPost(
    data: {title: $title, body: $body, ispublished: $ispublished, image: $image, author: {id: 1, username: "kentah", password: "abraxas"}}
  ) {
    title
  }
}
    `;
export type MakePostMutationFn = Apollo.MutationFunction<MakePostMutation, MakePostMutationVariables>;

/**
 * __useMakePostMutation__
 *
 * To run a mutation, you first call `useMakePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makePostMutation, { data, loading, error }] = useMakePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      ispublished: // value for 'ispublished'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useMakePostMutation(baseOptions?: Apollo.MutationHookOptions<MakePostMutation, MakePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakePostMutation, MakePostMutationVariables>(MakePostDocument, options);
      }
export type MakePostMutationHookResult = ReturnType<typeof useMakePostMutation>;
export type MakePostMutationResult = Apollo.MutationResult<MakePostMutation>;
export type MakePostMutationOptions = Apollo.BaseMutationOptions<MakePostMutation, MakePostMutationVariables>;
export const LoginUserDocument = gql`
    mutation loginUser($username: String!, $password: String!) {
  login(input: {username: $username, password: $password}) {
    author {
      first_name
      last_name
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const GetPostDocument = gql`
    query getPost($id: Float!) {
  post(id: $id) {
    id
    title
    body
    created_at
    updated_at
    ispublished
    image
    author {
      id
      first_name
      last_name
      username
      active
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
