import { useNavigate } from 'react-router-dom';

function Post({ session, post, postUserInfo }) {
  const navigate = useNavigate();

  const createdAt = new Date(post.created_at).toLocaleString('en-US', {
    dateStyle: 'short',
  });

  const properCategory =
    post.category.charAt(0).toUpperCase() + post.category.slice(1);

  return (
    post && (
      <div
        className="grid grid-cols-10 items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-green-300 to-blue-300 p-2 text-center text-sm hover:cursor-pointer"
        onClick={() => {
          if (session) navigate(`/community-forum/post/${post.slug}`);
          else navigate('/login');
        }}
      >
        <div className="col-span-6 flex flex-col overflow-scroll p-1 text-left md:col-span-7">
          <div className="text-lg font-bold">{post.title}</div>
          <div>{properCategory}</div>
          {postUserInfo && postUserInfo.username && (
            <div>
              Posted by{' '}
              <span className="underline">{postUserInfo.username}</span>
            </div>
          )}
          <div className="line-clamp-3">{post.content}</div>
        </div>
        <div className="col-start-7 font-semibold text-gray-800 md:col-start-8">
          {post.post_likes.length}
        </div>
        <div className="col-start-8 font-semibold text-gray-800 md:col-start-9">
          {post.post_comments.length}
        </div>
        <div className="col-span-2 col-start-9 font-semibold text-gray-800 md:col-span-1 md:col-start-10">
          {createdAt}
        </div>
      </div>
    )
  );
}

export default Post;
