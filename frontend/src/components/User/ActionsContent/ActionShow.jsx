import { useNavigate } from 'react-router-dom';

function ActionShow({ content }) {
  const { title, slug, category, relatedImage } = content.fields;
  const navigate = useNavigate();

  return (
    <div>
      <div className="group relative m-2 flex flex-col justify-center rounded-md border border-gray-400">
        <img
          src={`https:${relatedImage.fields.file.url}`}
          alt="Action related image"
          className={`${
            content.completed ? '' : 'grayscale'
          } relative h-52 w-64 object-cover`}
        />
        <div className="invisible absolute flex h-52 bg-emerald-300 bg-opacity-95 p-2 group-hover:visible">
          <div className="flex w-60 flex-col justify-between text-center text-lg">
            <div>
              <div className="truncate py-1 text-center font-medium">
                {title}
              </div>
              <div className="pt-1 text-sm italic">
                Category:{' '}
                <span className="font-medium underline">{category}</span>
              </div>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => navigate(`/actions/${slug}`)}
                className="rounded-full bg-blue-600 px-3 py-1 text-white"
              >
                See Details
              </button>
              {content.completed ? (
                <button
                  onClick={() => navigate()}
                  className="rounded-full bg-red-600 px-3 py-1 text-white"
                >
                  Mark as Incompleted
                </button>
              ) : (
                <button
                  onClick={() => navigate()}
                  className="rounded-full bg-green-600 px-3 py-1 text-white"
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionShow;
