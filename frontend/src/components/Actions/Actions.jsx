import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import ActionCard from './ActionCard.jsx';

function Actions() {
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

  return (
    <div className="m-4 flex flex-col items-center space-y-4">
      <div className="text-3xl font-bold text-emerald-600">Take Actions!</div>
      <div>Your actions matter! Small steps together will change the world</div>
      <div className="m-4 flex flex-wrap justify-center">
        {actionContent &&
          actionContent.map((content) => (
            <ActionCard key={content.sys.id} content={content} />
          ))}
      </div>
    </div>
  );
}

export default Actions;
