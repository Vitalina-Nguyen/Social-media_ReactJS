const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
  users: [
    {id: 1, followed: true, name: Victor, status: 'I am cool', location: {city: 'Minsk', country: 'Belarus'}},
    {id: 2, followed: false, name: Julie, status: 'I am funny', location: {city: 'Pnom Pen' , country: 'Cambodia'}},
    {id: 3, followed: true, name: Anastasia, status: 'I am cozy', location: {city: 'Svetlogorsk', country: 'Belarus'}},
  ]
  
}

let searchingReducer = (state = initialState, action) => {  
  switch (action.type){
    
    case FOLLOW: {
      return{
        ...state,
        users: [...state.users, {followed: true}]
      }
    }

    case UNFOLLOW: {

    }

  }
  
   
}

export const follow = (user) => {
    return {
      type: FOLLOW,
      user: user,
    }
  }
  export const unfollow = (user) => {
    return {
      type: UNFOLLOW,
      user: user,
    }
  }

export default searchingReducer;