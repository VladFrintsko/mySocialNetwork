import postStyles from "./Post.module.css";

const Post = (props) => {
  let removePost = () => {
    props.removePost(props.postInfo.id);
    props.rerender();
  };
  let addLike = () => {
    props.addLike(1, props.postInfo.id);
    props.rerender();
  };

  const trueUser = JSON.parse(localStorage.getItem('userData')).login;
  const getUser = props.regUsers.find(user=> user.login === trueUser);

  return (
    <div>
      <div className={postStyles.postItem}>
        <div className={postStyles.postHead}>
          <div className={postStyles.avtorPlace}>
            <img
              src={getUser.myPhoto}
              alt="myPhoto"
            />
            <span className={postStyles.postsName}>{getUser.fullName}</span>
          </div>

          <button
            type="button"
            className={`${postStyles.btn} btn-secondary btn-sm`}
            onClick={removePost}
          >
            remove
          </button>
        </div>
        <div className={postStyles.postsInfo}>{props.postInfo.postText}</div>
        <div className={postStyles.userResponses}>
          <span className={postStyles.like} onClick={addLike}>
            Like
          </span>
          <span className={postStyles.countLikes}>
            {props.postInfo.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
