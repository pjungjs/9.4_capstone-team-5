import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function ContactModal({ openModal, setOpenModal }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="w-72 rounded-lg bg-white p-2 text-center md:w-80">
        <div className="flex justify-end">
          <button
            className="rounded-full p-0.5 hover:bg-gray-700 hover:text-white"
            onClick={() => setOpenModal(!openModal)}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="md:px-2">
          <h1 className="p-2 pt-0 text-center text-xl font-semibold text-green-600">
            Thanks for reaching out!
          </h1>

          <p className="pb-4 pt-1 text-center text-gray-700">
            Your &quot;EcoWay&quot; message is received. Together, we&apos;re
            making a positive impact for a better planet!
          </p>
        </div>

        <div className="p-1">
          <button
            className="rounded-full border border-gray-300 px-4 py-2 text-gray-900 hover:bg-green-600 hover:text-white"
            onClick={() => {
              setOpenModal(!openModal);
              navigate('/');
            }}
          >
            Go back Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
