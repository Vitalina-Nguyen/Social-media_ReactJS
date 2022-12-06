import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';




function MyPosts(props) {

  //Mapping
  let postsElements = props.posts.map ( m => <Post 
                      post = {m.post} 
                      key = {m.id}
                      likesCount = {m.likesCount} />)

  let newPostElement = React.createRef();

  let onAddpost = () => {
    props.onAddpost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostTextActionCreator(text);
  }

  return (
      <div>
        <h3>My Posts</h3>
        <textarea onChange={onPostChange} 
                  ref = {newPostElement} 
                  value = {props.newPostText}></textarea>
        <button onClick = {onAddpost}>Add post</button>
        {postsElements}
      </div>
      
    );
}

export default MyPosts;
