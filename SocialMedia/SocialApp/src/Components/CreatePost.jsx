import React, { useContext,useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const {addPost}=useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();


  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(event);
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postContent=postContentElement.current.value;
    const reactions=reactionsElement.current.value;
    const hashtags=hashtagsElement.current.value.split(" ");

    addPost(userId,postTitle,postContent,reactions,hashtags);
    alert("Post Uploaded..Please check Home Page !!")
    userIdElement.current.value=""
    postTitleElement.current.value=""
    postContentElement.current.value=""
    reactionsElement.current.value=""
    hashtagsElement.current.value=""


  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your UserID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you felling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postContentElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people react to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Hastags Here
        </label>
        <input
          type="text"
          ref={hashtagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter your tags with spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
