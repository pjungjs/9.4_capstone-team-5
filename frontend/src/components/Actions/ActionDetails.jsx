import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function ActionDetails() {
  const [actionData, setActionData] = useState(null);
  const { slug } = useParams();

  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
    },
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="list-decimal">{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="py-1">{children}</p>
      ),
    },
  };

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({ content_type: 'actions' })
      .then((response) => {
        response.items.forEach((item) => {
          if (item.fields.slug === slug) setActionData(item.fields);
        });
      })
      .catch((error) =>
        console.warn('Error fetching data from Contentful', error),
      );
  }, []);

  console.log(actionData);

  return (
    <div className="m-4 mb-12 flex justify-center">
      {actionData && (
        <div className="flex w-full flex-col items-center md:max-w-[40rem]">
          <div>
            <div className="text-3xl font-bold text-emerald-600">
              {actionData.title}
            </div>
            <div className="text-md pt-3">
              <span className="text-green-600">Category: </span>
              <span className="font-medium italic underline">
                {actionData.category}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={`https:${actionData.relatedImage.fields.file.url}`}
              alt="Action related image"
              className="max-h-[30rem] object-contain py-2.5"
            />
            <div className="flex space-x-20 px-4">
              <div>
                <span className="text-green-600">Points:</span>{' '}
                {actionData.points}
              </div>
              <div>
                <span className="text-green-600">Level:</span>{' '}
                {actionData.level}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="p-4">
              <div className="pb-2 text-xl font-bold text-green-600">
                Description:
              </div>
              <div>
                {documentToReactComponents(
                  actionData.description,
                  richTextOptions,
                )}
              </div>
            </div>
            {actionData.tips && (
              <div className="p-4">
                <div className="pb-2 text-xl font-bold text-green-600">
                  Tips:
                </div>
                <div className="prose">
                  {documentToReactComponents(actionData.tips, richTextOptions)}
                </div>
              </div>
            )}
            {actionData.resources && (
              <div className="p-4">
                <div className="text-xl font-bold text-green-600">
                  Resources:
                </div>
                <ul className="list-disc">
                  {actionData.resources.map((resource, index) => (
                    <li key={index} className="py-1">
                      <a
                        className="text-blue-400 hover:text-blue-500 hover:underline"
                        href={resource}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="text-xl font-bold text-green-600">
              Track your actions!
            </div>
            <div className='py-2'>
              Create an account or Log in to your account to keep track your actions and points.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActionDetails;
