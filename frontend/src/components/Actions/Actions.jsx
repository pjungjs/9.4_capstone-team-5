import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

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

    console.log(actionContent);
  }, []);

  return <div>Actions</div>;
}

export default Actions;
