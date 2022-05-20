import React, { FC, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import {
  EditorState,
  //convertToRaw,
  //convertFromRaw,
  //ContentState,
  //ContentBlock 
} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Button, buttonType } from '../Button'
import { 
  convertToHTML, 
} from 'draft-convert'

import IBlog from '../../interfaces/blog'
//import IAuthor from '../../interfaces/author'
import './blogEditor.css'
//interface BlogEditorProps {}
//import { MUTATION_CREATE_POST } from '../../graphql/create-post-mutation'
import {
  //MakePostMutationVariables,
  useMakePostMutation,
} from '../../generated/graphql'

import { Modal } from '../Modal'
//interface DefaultAuthor exteds Omit<IAuthor, 'password'> {} 
//const defaultAuthor: IAuthor = {
//  _id: 1,
//  first_name: 'Kent',
//  last_name: 'Howard',
//  active: true,
//  password: ''
//}

interface IBlogCreate extends Omit<IBlog, '_id' | 'created_at' | 'updated_at' | 'author'> {}

const defaultPost: IBlogCreate = {
  title: '',
  body: '',
  ispublished: false,
  //author: defaultAuthor,
  image: ''
}

const BlogEditor: FC = () => {
  // for redirect after post is created
  const history = useHistory()
 
  // state of the editor
  const [editorState, setEditorState] = 
    useState<EditorState>(() => EditorState.createEmpty())

  const [post, setPost] = useState<IBlogCreate>(defaultPost)
  const [ispublished, setIspublished] = useState<boolean>(false)
  const [contentHtml, setContentHtml] = useState<string>()
  const [makePost] = useMakePostMutation({
    variables: {
      title: '',
      body: '',
      ispublished: false,
      image: ''
    }
  })

  // changed editor to typed Editor
  const editorRef = useRef<Editor>(null)

  // modal stuff 
  const [modal, setModal] = useState<boolean>(false)
  const toggleModal = () => { 
    setModal(!modal)
  }

  const submitPost = () => {
    console.log('submitting post before creation')
    const title = (document.getElementById('title') as HTMLInputElement).value
    setIspublished((document.getElementById('published') as HTMLInputElement).checked)
    
    const newPost: IBlogCreate = {
      title,
      body: contentHtml as string,
      ispublished,
      image: 'overpass1.png' as string
      //author: defaultAuthor,
    }
    //console.log('editor ref', editorRef.current.onEditorBlur)
    //console.log('setPost', newPost)
    // TODO: figure out why setPost isn't working correctly
    setPost(newPost)
    console.log('post in submitPost', post)
    // TODO: must pass newPost in directly instead of relying on the value of post
    createPost(newPost)
  }

  const createPost = async ({title, body, ispublished, image}: IBlogCreate) => {
    // can't derive value of post from toplevel because it can't be set
    //const { title, body, ispublished, image } = post
    if (title != '' || body != '') {
      try {
        await makePost({
          variables: {
            title,
            body,
            ispublished,
            image,
          }
        })

        // TODO: history no longer working after changing
        // onClick to called function
        history.push('/blog')
      } catch(error) {
        console.log('Error in blogEditor.createPost')
        console.log(error.message)
      } 

    } else {
      console.log('No title and/or no body content')
    }
    setEditorState(EditorState.createEmpty())
  }

  const handleEditorChange = (state: EditorState ) => {
    setEditorState(state)
    setContentHtml(convertToHTML(state.getCurrentContent()))
  }
  
  const cancelSubmit = () =>  {
    console.log('entry cancelled')
    setEditorState(EditorState.createEmpty())
  }

  return (
    <div className='blog-editor-content'>
      <div className='form-box'>
        <header className='blog-editor-header'>Blog Editor</header>
        <form onSubmit={submitPost}>
          <div className="title-box-d">
            <input className='title' id='title' type='text' name='title' placeholder='Title'/>
          </div>
          <div>
            <label className='publishedLabel'>Published</label>
            <input type='checkbox' id='published' name='published' />
          </div>
          <div className="content-box">
            <Editor
              ref={editorRef}
              onChange={() => setEditorState}
              editorState={editorState}
              wrapperClassName='wrapper-class'
              editorClassName='editor-class'
              toolbarClassName='toolbar-class'
              placeholder='Enter contents for post'
              onEditorStateChange={handleEditorChange}
              toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history', 'emoji', 'image'],
                blockType: {
                  inDropdown: true,
                  options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                  }
              }} />
            </div>
            <Button 
              type={buttonType.confirm}
              buttonText={'Post'}
              buttonAction={() => toggleModal()}
            />
            <Button 
              type={buttonType.deny}
              buttonText={'Cancel'}
              buttonAction={cancelSubmit}
            />
        </form>
        <Modal 
          modalTitle='Add this post?'
          modalContentText='You are about to add this post, are you sure?'
          confirmButtonText={'Delete'} 
          confirmButtonFunc={() => submitPost()}
          show={modal} 
          close={toggleModal}
        />
      </div>
    </div>
  )
} 

export default BlogEditor
