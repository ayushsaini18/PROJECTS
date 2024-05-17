import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const { postList,fetching } = useContext(PostListData);
  
  return (
    <div className="post-container">
      <div className="post-item">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export default PostList;
