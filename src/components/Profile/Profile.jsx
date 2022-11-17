import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";




function Profile(props) {

  return (
    <div className={s.content}>
      <div className={s.back_pic}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/044_le_pic_du_ger.jpg/1200px-044_le_pic_du_ger.jpg"></img>
      </div>
      <div>ava + info</div>
      <MyPostsContainer />
      </div>
  );
}

export default Profile;
