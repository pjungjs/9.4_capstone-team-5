import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function ContactModal({
  openModal,
  setOpenModal,
  emailSentStatus,
  setEmailSentStatus,
}) {
  const navigate = useNavigate();

  const handleModalClose = () => {
    setOpenModal(!openModal);
    setEmailSentStatus({
      success: false,
      message: '',
    });
  };

  return (
    emailSentStatus.message && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
        <div className="w-72 rounded-lg bg-white p-2 text-center md:w-80">
          <div className="flex justify-end">
            <button
              className="rounded-full p-0.5 hover:bg-gray-700 hover:text-white"
              onClick={() => handleModalClose()}
            >
              <AiOutlineClose />
            </button>
          </div>

          <div>
            <div className="p-2 pt-0 text-center text-xl font-semibold">
              {emailSentStatus.success ? (
                <p className="text-green-600">Thanks for reaching out!</p>
              ) : (
                <p className="text-red-600">Uh-oh! Something went wrong</p>
              )}
            </div>

            <div className="pb-4 pt-1 text-center text-gray-700">
              {emailSentStatus.success ? (
                <p>
                  Your &quot;EcoWay&quot; message is sent. Together, we&apos;re
                  making a positive impact for a better planet!
                </p>
              ) : (
                <p>Please try again later 🙁</p>
              )}
            </div>
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
    )
  );
}

export default ContactModal;
