import React from 'react'
import { useAllPostsQuery } from '../../generated/graphql'
import { BlogListItem } from './BlogListItem'
import './bloglist.css'

export const BlogList: React.FC = () => {
  const { loading, error, data } = useAllPostsQuery({
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error!!!</div>;
  }

  const { posts } = data;

  return (
    <div className="list-container">
      <div className='list'>
        {posts.map((p, i) => {
          return (
            <div 
              key={i}
            >
              <BlogListItem post={p} />
            </div>
          )
        })}
      </div>

    </div>
  );
};

