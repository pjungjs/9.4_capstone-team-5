import { useContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { UserContext } from '../UserMain.jsx';
import ActionShow from './ActionShow.jsx';

function ActionsMain() {
  const { currentUser } = useContext(UserContext);
  const [actionContent, setActionContent] = useState(null);
  const [sortBy, setSortBy] = useState('completed');

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({ content_type: 'actions' })
      .then((response) => setActionContent(response.items))
      .catch((error) =>
        console.error('Error fetching data from Contentful', error),
      );
  }, []);

  // mark actions as completed
  const allActions = actionContent?.map((action) => {
    const userCompletedAction = currentUser.user_actns?.find(
      (completedAction) => completedAction.action_slug === action.fields.slug,
    );
    if (userCompletedAction) {
      action.completed = true;
    } else {
      action.completed = false;
    }
    return action;
  });

  // sort actions to show completed first
  allActions?.sort((actionA, actionB) => {
    if (sortBy === 'completed') {
      return actionA.completed > actionB.completed ? -1 : 1;
    } else if (sortBy === 'incomplete') {
      return actionA.completed > actionB.completed ? 1 : -1;
    } else {
      return;
    }
  });

  return (
    <div className="m-4 mb-8">
      <div className="flex flex-col items-center justify-center text-gray-700">
        <div className="mb-2 p-2 text-2xl font-bold uppercase">All Actions</div>
        <div className="flex items-center">
          <p className="text-md whitespace-nowrap pr-2 font-medium">Sort by:</p>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="bg-gray-50"
          >
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center py-4">
        {actionContent &&
          allActions.map((content) => (
            <ActionShow key={content.sys.id} content={content} />
          ))}
      </div>
    </div>
  );
}

export default ActionsMain;
