import { useContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { UserContext } from '../UserMain.jsx';
import ActionShow from './ActionShow.jsx';

function ActionsMain() {
  const { currentUser } = useContext(UserContext);
  const [actionContent, setActionContent] = useState(null);

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({ content_type: 'actions' })
      .then((response) => setActionContent(response.items))
      .catch((error) =>
        console.warn('Error fetching data from Contentful', error),
      );
  }, []);

  // mark actions as completed
  const filteredActions = actionContent?.map((action) => {
    const userCompletedAction = currentUser.user_actns.find(
      (completedAction) => completedAction.action_slug === action.fields.slug,
    );

    if (userCompletedAction) {
      action.completed = true;
    } else {
      action.completed = false;
    }

    return action;
  });

  // filter actions to show completed first
  filteredActions?.sort((actionA, actionB) => {
    return actionA.completed > actionB.completed ? -1 : 1;
  });

  return (
    <div className="m-4 ">
      <div className="flex flex-col items-center justify-center py-4">
        <div className='text-xl'>All Actions</div>
        <div>filter by completed or incompleted first</div>
      </div>
      <div className="flex flex-wrap justify-center">
        {actionContent &&
          filteredActions.map((content) => (
            <ActionShow key={content.sys.id} content={content} />
          ))}
      </div>
    </div>
  );
}

export default ActionsMain;
