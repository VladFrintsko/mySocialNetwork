import myPostsStyles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  const {rerender, state, removePost, addLike} = props;
  let postText = React.createRef();

  let addPost = () => {
    let text = postText.current.value;
    if (text && text.trim() !== "") {
      props.addPost(text);
      rerender();
    }
    postText.current.value = "";
  };

  return (
    <div>
      <div className={myPostsStyles.wrapper}>
        <div className={myPostsStyles.sendPost_wrapper}>
          <label>Add post</label>
          <br />
          <div className="form-floating">
            <textarea
              placeholder="write new post..."
              ref={postText}
              name="addNewPost"
              id="sendText"
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">New Post</label>
          </div>
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
      </div>

      <div id="post">
        {state.profilePage.MyPosts.length !== 0 && (
          <div className={myPostsStyles.postsWrapperTitle}>MY POSTS</div>
        )}
        {state.profilePage.MyPosts.map((post) => {
          return (
            <Post
              rerender={rerender}
              removePost={removePost}
              addLike={addLike}
              postInfo={post}
              regUsers={state.users.registredUsers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
