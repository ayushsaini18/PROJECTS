import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller=new AbortController();
    const signal=controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        addInitialPost(obj.posts);
        setFetching(false);
      });

      return ()=>{
       
        controller.abort();
      };
  }, []);

  // const handleOnClickPost = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then(obj=>addInitialPost(obj.posts));
  // };

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
