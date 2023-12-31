import { useNavigate } from 'react-router-dom';

function ActionCard({ content }) {
  const navigate = useNavigate();
  const { title, slug, category, relatedImage, points, level } = content.fields;

  return (
    <div>
      <div
        onClick={() => navigate(`/actions/${slug}`)}
        className="items-left m-2 flex w-80 flex-col justify-center rounded-md border-2 border-gray-400 p-4 hover:cursor-pointer hover:bg-green-300"
      >
        <div className="text-center text-lg font-medium">{title}</div>
        <div className="pt-1 text-xs italic">
          Category: <span className="font-medium underline">{category}</span>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={`https:${relatedImage.fields.file.url}`}
            alt="Action related image"
            className="h-60 w-80 object-contain py-2.5"
          />
        </div>
        <div className="flex justify-between">
          <div>Points: {points}</div>
          <div>Level: {level}</div>
        </div>
      </div>
    </div>
  );
}

export default ActionCard;
