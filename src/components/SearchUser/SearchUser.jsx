import React from "react";
import s from './SearchUser.module.css';
import axios from "axios";
import userPhoto from './../../axios/img/default_avatar.png';

const SearchUser = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers( axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items);  
        })
            
        )
    }

    return (
        <div>
           {props.users.map( u => <div key= {u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small != null ? u.  l : userPhoto }></img>
                        </div>
                        <div>
                           {
                            u.followed 
                            ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick = {() => {props.follow(u.id)}} >Follow</button>
                           }
                        </div>
                    </span>
                    <span>
                        <div>
                            <span>
                                {u.photos.small}
                            </span>
                            <span>
                                {u.status}
                            </span>
                        </div>
                        <div>
                            <span>
                                {'u.location.country'}
                            </span>
                            <span>
                                {'u.location.city'}
                            </span>
                        </div>
                    </span>
                </div>
            )}
        </div>
    );
}

export default SearchUser;
