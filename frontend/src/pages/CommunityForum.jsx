import Posts from '../components/Posts/Posts.jsx';

function CommunityForum() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full flex-col items-center justify-center bg-green-100 p-4 text-center">
        <div className="py-2 text-3xl font-bold text-green-700">
          Community Forum
        </div>
        <div className="max-w-xl p-4 pb-2">
          <p>Welcome to the Community Forum.</p>
          <p>Share your questions, tips, resources, or anything in general.</p>
          <p>You can create a new post or edit your existing ones.</p>
          <p>
            Join the conversation by liking and commenting on interesting posts.
          </p>
        </div>
      </div>
      <Posts />
    </div>
  );
}

export default CommunityForum;
