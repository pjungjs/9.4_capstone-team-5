import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserMain';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function ActionShow({ content }) {
  const { title, slug, category, relatedImage, points } = content.fields;

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const clickedAction = {
    action_slug: slug,
    completed_on: new Date().toISOString(),
    points,
  };

  const markAsIncomplete = async () => {
    try {
      const removeUserAction = async () => {
        const response = await axios.put(
          `${BASE_URL}/users/actions/${currentUser.user_auth_id}/${slug}`,
        );
        return response.data;
      };

      const updateUserScores = async () => {
        const response = await axios.put(
          `${BASE_URL}/users/scores/${currentUser.user_auth_id}`,
          {
            ...currentUser.user_scores,
            score_actions:
              Number(currentUser.user_scores.score_actions) - Number(points),
            score_total:
              Number(currentUser.user_scores.score_total) - Number(points),
          },
        );
        return response.data;
      };

      const updatedUsersInfo = await removeUserAction();
      const updatedUserScores = await updateUserScores();

      setCurrentUser({ ...updatedUsersInfo, user_scores: updatedUserScores });
    } catch (error) {
      console.warn('Error:', error);
    }
  };

  const markAsCompleted = async () => {
    try {
      const addUserAction = async () => {
        const response = await axios.put(
          `${BASE_URL}/users/actions/${currentUser.user_auth_id}`,
          clickedAction,
        );
        return response.data;
      };

      const updateUserScores = async () => {
        const response = await axios.put(
          `${BASE_URL}/users/scores/${currentUser.user_auth_id}`,
          {
            ...currentUser.user_scores,
            score_actions:
              Number(currentUser.user_scores.score_actions) + Number(points),
            score_total:
              Number(currentUser.user_scores.score_total) + Number(points),
          },
        );
        return response.data;
      };

      const updatedUsersInfo = await addUserAction();
      const updatedUserScores = await updateUserScores();

      setCurrentUser({ ...updatedUsersInfo, user_scores: updatedUserScores });
    } catch (error) {
      console.warn('Error:', error);
    }
  };

  return (
    <div className="group relative m-2 flex flex-col justify-center rounded-md border border-gray-400">
      <img
        src={`https:${relatedImage.fields.file.url}`}
        alt="Action related image"
        className={`${
          content.completed ? '' : 'grayscale'
        } relative h-52 w-64 object-fill`}
      />
      <div className="invisible absolute flex h-52 bg-emerald-300 bg-opacity-95 p-2 group-hover:visible">
        <div className="flex w-60 flex-col justify-between text-center text-lg">
          <div>
            <div className="truncate text-center font-medium">{title}</div>
            <div className="pt-1 text-sm italic">
              Category:{' '}
              <span className="font-medium underline">{category}</span>
            </div>
            <div className="pt-1 text-sm italic">
              Points:{' '}
              <span className="font-medium">{points}</span>
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
                onClick={() => markAsIncomplete()}
                className="rounded-full bg-red-600 px-3 py-1 text-white"
              >
                Mark as Incomplete
              </button>
            ) : (
              <button
                onClick={() => markAsCompleted()}
                className="rounded-full bg-green-600 px-3 py-1 text-white"
              >
                Mark as Completed
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionShow;
