import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../generated/graphql';
import './bloglistItem.css'
import { Image } from './Image'
//import { Route} from 'react-router-dom'
//import { BlogPost } from './BlogPost'
import { stringToHtml } from './BlogPost'

//interface Tags {
//  tags: [string] 
//}

// array of html tags 
//const tagCheck = [ 
//  '<h1>', 
//  '<h2>', 
//  '<h3>', 
//  '<h4>', 
//  '<h5>', 
//  '<h6>', 
//  '<ul>', 
//  '<ol>', 
//  '<blockquote>', 
//  '<pre>', 
//  '<p>'  
//]


export interface BloglistItemProps {
  post: Post;
}

 
const truncate = (str:string, cutoff: number, extract: number) => {
  return str.length > cutoff ? str.substr(0, extract) + '...' : str;
}

export const BlogListItem: React.FC<BloglistItemProps> = ({ post }) => {
  const { id, title, created_at, author, image } = post;
  const { body } = post
  const { first_name, last_name } = author;

  const [postId] = useState(id);

  //useEffect(() => {
  //  console.log('blogList', postId);
  //}, [postId]);

  const img = typeof image === 'undefined' || image === null 
    ? require('../../img/overpass1.png') 
    : require('../../img/' + image)

  const created = new Date(created_at).toDateString() 
    + ' @ ' + new Date(created_at).toLocaleTimeString()

  stringToHtml(body)
  //console.log('contentBody in blogListItem', contentBody)

  //const checkSubstring: React.ReactNode = (str: string) => {
  //  //for(let i=0; i<tagCheck.length; i++) {
  //  //  if (str.includes(tagCheck[i])) {
  //  //    body = truncate(stringToHtml(str), 60, 60)
  //  //  }         
  //  //}
  //  tagCheck.forEach(tag => str.includes(tag)
  //    ? <div id='body' className='preview'></div> 
  //    : <div className="preview">{ truncate(body, 60, 60) }</div>
  //  ) 
  //}

  //const content: React.ReactNode = checkSubstring(body)

  return (
    <div className='blog-item-container'>
      <div className='card'>
        <Image src={img} style={{ width: 250, height: 250}}/>
        <div className='list-item'>
          <Link className='list-item-link' to={`/blog/${postId}`}>
            <h3 className='title'>{title}</h3>
            <hr className="divider"></hr>
            <div className='author'>
              {first_name} {last_name} - {created}
            </div>
    {/*<div id='body' className="preview">{ truncate(body, 60, 60) }</div>*/}
    <div className="preview">{ truncate(body, 60, 60) }</div>
  </Link>
      </div>
      </div>
    </div>
  );
};

