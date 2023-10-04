import Posts from '../components/Posts/Posts.jsx';

function CommunityForum() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <div className="mb-4 flex w-full flex-col items-center justify-center bg-green-100 p-4 text-center">
        <div className="py-2 text-3xl font-bold text-green-700">
          Community Forum
        </div>
        <div className="max-w-lg px-8 pb-2 pt-4">
          I&apos;m a paragraph. Click here to add your own text and edit me.
          I&apos;m a great place for you to tell a story and let your users know
          a little more about you.
        </div>
      </div>
      <Posts />
    </div>
  );
}

export default CommunityForum;
