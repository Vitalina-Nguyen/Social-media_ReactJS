import React from "react";
import { connect } from "react-redux";
import {followAC, unfollowAC, setUsersAC} from "../../redux/searchingReducer";
import SearchUser from "./SearchUser"

let mapStateToProps = (state) => {
    return {
        users: state.searching.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) =>{dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    }
}


let SearchUserContainer = connect (mapStateToProps, mapDispatchToProps) (SearchUser)

export default SearchUserContainer;
