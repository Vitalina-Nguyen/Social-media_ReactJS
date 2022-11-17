import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from './../../../redux/profileReducer';
import { connect } from "react-redux";




/* let  MyPostsContainer = (props) => {
 
  return (
    <StoreContext.Consumer>
      { store => {
      let state = store.getState();

      let addpost = () => {
        store.dispatch(addPostActionCreator());
      }

      let onPostChange = (text) => {
        let action = updatePostTextActionCreator(text);
        store.dispatch(action);
      }
          return <MyPosts updatePostTextActionCreator = {onPostChange} 
                        onAddpost = {addpost} 
                        posts = {state.profilePage.posts} 
                        newPostText = {state.profilePage.newPostText}/>
      }}
      
    </StoreContext.Consumer>
  )
} */

let mapStateToProps = (state) => {
    return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
    updatePostTextActionCreator: (text) => {
        dispatch(updatePostTextActionCreator(text));
    },
    onAddpost: () => {
        dispatch(addPostActionCreator());
    } 
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
