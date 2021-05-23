import myPostsStyles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let postText = React.createRef();

  let addPost = () => {
    let text = postText.current.value;
    if (text && text.trim() !== "") {
      props.addPost(text);
      props.rerender();
    }
    postText.current.value = "";
  };

  return (
    <div>
      <div className={myPostsStyles.sendPost_wrapper}>
        <label>My posts</label>
        <br />
        <textarea
          placeholder="write new post..."
          ref={postText}
          name="addNewPost"
          id="sendText"
        ></textarea>
        <br />
        <button
          type="submit"
          name="btn"
          className="btn btn-dark"
          onClick={addPost}
        >
          Add post
        </button>
      </div>

      <div id="post">
        {props.state.MyPosts.map((post) => {
          return (
            <Post
            rerender={props.rerender}
              removePost={props.removePost}
              addLike={props.addLike}
              postInfo={post}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
