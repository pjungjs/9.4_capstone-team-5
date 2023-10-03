import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactModal from '../components/Contact/ContactModal.jsx';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    issue: 'general',
    name: '',
    email: '',
    message: '',
  });
  const [emailSentStatus, setEmailSentStatus] = useState({
    success: true,
    message: '',
  });
  const [openModal, setOpenModal] = useState(false);
  const form = useRef();
  
  useEffect(() => {
    openModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [openModal]);

  function handleSelectChange(event) {
    setContactInfo({ ...contactInfo, [event.target.id]: event.target.value });
  }

  function handleTextChange(event) {
    setContactInfo({ ...contactInfo, [event.target.id]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result);
        setEmailSentStatus({ success: true, message: result.text });
      },
      (error) => {
        console.log(error);
        setEmailSentStatus({ success: false, message: error.text });
      },
    );

    setOpenModal(!openModal);
  }

  function handleClear() {
    setContactInfo({
      issue: 'general',
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <div>
      <div className="bg-cust-contact-us absolute -z-10 h-screen w-screen bg-cover bg-fixed bg-top bg-no-repeat opacity-20"></div>
      {openModal && (
        <ContactModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          emailSentStatus={emailSentStatus}
          setEmailSentStatus={setEmailSentStatus}
        />
      )}
      <section className="mb-10 flex items-center">
        <div className="mx-auto max-w-screen-sm px-6 py-8">
          <div>
            <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-green-600">
              Contact Us
            </h2>
            <div className="mb-8 px-6 text-center text-xl font-normal text-gray-900">
              <p>Thank you for visiting EcoWay.</p>
              <p>
                Please send us a message if you have any technical issue or a
                feedback about our website.
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-lg bg-gray-100 p-4 shadow-xl"
          >
            <div className="sm:flex sm:items-center">
              <label
                htmlFor="issue"
                className="mb-2 block whitespace-nowrap text-sm font-medium text-gray-900 sm:mb-0 sm:pr-3"
              >
                Select an issue:
              </label>
              <select
                id="issue"
                name="user_issue"
                value={contactInfo.issue}
                onChange={handleSelectChange}
                className="block bg-gray-50 p-2.5"
              >
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="sm:flex sm:items-center">
              <label
                htmlFor="name"
                className="mb-2 block whitespace-nowrap text-sm font-medium text-gray-900 sm:mb-0 sm:pr-3"
              >
                Name:
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                value={contactInfo.name}
                onChange={handleTextChange}
                className="block bg-gray-50"
                placeholder="your name here..."
                required
              />
            </div>

            <div className="sm:flex sm:items-center">
              <label
                htmlFor="email"
                className="mb-2 block whitespace-nowrap text-sm font-medium text-gray-900 sm:mb-0 sm:pr-3"
              >
                Email:
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                value={contactInfo.email}
                onChange={handleTextChange}
                className="block bg-gray-50"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 sm:mb-3"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="user_message"
                rows="5"
                value={contactInfo.message}
                onChange={handleTextChange}
                className="bg-gray-50"
                placeholder="Leave your message here..."
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={handleClear}
                className="cust-btn rounded-full px-5 py-3"
              >
                Clear fields
              </button>
              <input
                type="submit"
                value="Send message"
                className="cust-btn rounded-full px-5 py-3"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
