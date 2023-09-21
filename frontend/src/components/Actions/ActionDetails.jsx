import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TiArrowRightOutline } from 'react-icons/ti';
import { useStytchSession } from '@stytch/react';

function ActionDetails() {
  const [actionData, setActionData] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  const { session } = useStytchSession();

  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <span className="font-bold text-gray-700">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="py-2 pt-4 text-lg underline">{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="mx-2">{children}</li>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="py-1">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 hover:underline"
        >
          {children}
        </a>
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
            <div className="flex space-x-20 border-2 border-gray-300 px-4">
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
              Track your Actions!
            </div>
            {session ? (
              <>
                <div
                  onClick={() => navigate('/user/actions')}
                  className="flex items-center justify-center space-x-2 py-2 text-blue-400 hover:cursor-pointer hover:text-blue-600 hover:underline"
                >
                  <span className="text-lg">See Actions on the Dashboard</span>
                  <TiArrowRightOutline className=" text-2xl" />
                </div>
              </>
            ) : (
              <>
                <div className="py-2">
                  Create or Login to your account to keep track your actions and
                  accumulate points to earn badges!
                </div>
                <div
                  onClick={() => navigate('/login')}
                  className="flex items-center justify-center space-x-2 text-blue-400 hover:cursor-pointer hover:text-blue-600 hover:underline"
                >
                  <span className="text-xl">Go to Login page</span>
                  <TiArrowRightOutline className=" text-2xl" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ActionDetails;
