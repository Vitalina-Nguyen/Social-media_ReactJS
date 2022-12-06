const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {

    posts: [
        {id: 1, post: 'Hello! This is Anna.', likesCount: 12},
        {id: 2, post: 'I am an artist.', likesCount: 13}
    ],
    newPostText: ''

}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
    
        case ADD_POST : {
            let newPost = {
                id: 3,
                post: state.newPostText, 
                likesCount: 0
            }
            return {
              ...state,
              posts: [newPost,...state.posts],
              newPostText: '', 
            }
        }
        
        case UPDATE_POST_TEXT: {
          return {
              ...state,
              newPostText: action.newText
            };
        }

        default: return state;

    }
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }

export const updatePostTextActionCreator = (text) => {
    return {
      type: UPDATE_POST_TEXT, 
      newText: text
    }
  }

export default profileReducer;
