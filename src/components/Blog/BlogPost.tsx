import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
  useGetPostQuery, 
  useDeleteUserPostMutation  
} from '../../generated/graphql';

import { Image } from './Image'
import { Button, buttonType } from '../Button'
import { Modal } from '../Modal'
import './blogPost.css'

export interface BlogListProps {
  id: number;
}

// convert string to HTML
export const stringToHtml = (str: string) => 
  document.getElementById('body') != null
    ? document.getElementById('body')!.innerHTML=`${str}`
    : str

export const BlogPost: React.FC<BlogListProps> = ({ id }) => {
  const history = useHistory()

  // modal stuff
  const [modal, setModal] = useState<boolean>(false)
  const toggleModal = () => setModal(!modal)

  const [deletePost] = useDeleteUserPostMutation({
    variables: {
      id,
    }
  })

  const { data } = useGetPostQuery({
    variables: {
      id,
    },
  });

  const deleteIt = async (id: number) => {
    try {
      await deletePost({
        variables: {
          id
        }
      })
      history.push('/blog')
      } catch(error) {
        console.log(error.message)
      }
  } 

  const img = typeof data?.post.image === 'undefined' || data?.post.image === null 
    ? require('../../img/overpass1.png') 
    : require('../../img/' + data!.post.image)

  const created = new Date(data?.post.created_at).toDateString() 
    + ' @ ' + new Date(data?.post.created_at).toLocaleTimeString()

  stringToHtml(data?.post.body as string)

  return(
    <div className='post-container'>
      <div>
        <Image 
          className='image'
          style={{ width: 400, height: 300 }}
          src={img}
        /> 
      </div>
      <div className='post-text-content'>
        <div className='title'>{data?.post.title}</div>
        <div className='subtitle'>
          by <em>{data?.post.author.first_name} {data?.post.author.last_name}</em>
          &nbsp; on <em>{created}</em>
        </div>
        <div className='divider'></div>
        <div id='body' className='body'>
        </div>
    {/*<Button buttonText={'Delete'} buttonAction={()=> buttonAction(id)} />*/}
        <div className='button'>
          <Button 
            type={buttonType.delete}
            buttonText={'Delete'} 
            buttonAction={toggleModal} 
          />
        </div>
        <Modal 
          modalTitle='Delete this post'
          modalContentText='About to delete this post, are you sure?'
          confirmButtonText={'Delete'} 
          confirmButtonFunc={() => deleteIt(id)}
          show={modal} 
          close={toggleModal}
        />
    </div>
  </div> 
  )
}
