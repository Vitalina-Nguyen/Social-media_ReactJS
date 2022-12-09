const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    // {id: 1, followed: true, photoUrl: 'https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?compress=1&resize=400x300', 
    //         name: 'Victor', status: 'I am cool', location: {city: 'Minsk', country: 'Belarus'}},
     
    // {id: 2, followed: false, photoUrl: 'https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?compress=1&resize=400x300', 
    //         name: 'Julie', status: 'I am funny', location: {city: 'Pnom Pen' , country: 'Cambodia'}},
     
    // {id: 3, followed: true, photoUrl: 'https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?compress=1&resize=400x300', 
    //         name: 'Anastasia', status: 'I am cozy', location: {city: 'Svetlogorsk', country: 'Belarus'}},
     
  ]
}

let searchingReducer = (state = initialState, action) => {  
  switch (action.type){
    
    case FOLLOW: {
      return {...state, 
        users: state.users.map ( u => { 
          if (u.id === action.userId) {
            return {...u, followed: true }
          }
          return u;
        }) 
      }
    }

    case UNFOLLOW: {
      return {...state,
        users: state.users.map ( u => {
          if (u.id === action.userId){
            return {...u, followed: false}
          }
          return u;
        })
      }
    }

    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }
    
    default: 
      return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default searchingReducer;