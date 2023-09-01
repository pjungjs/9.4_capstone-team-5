import { useState } from 'react';
import ContactModal from '../components/Contact/ContactModal.jsx';

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    issue: 'general',
    email: '',
    message: '',
  });
  const [openModal, setOpenModal] = useState(false);

  function handleSelectChange(event) {
    setContactInfo({ ...contactInfo, [event.target.id]: event.target.value });
  }

  function handleTextChange(event) {
    setContactInfo({ ...contactInfo, [event.target.id]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setOpenModal(!openModal);
  }

  function handleClear() {
    setContactInfo({
      issue: 'general',
      email: '',
      message: '',
    });
  }

  return (
    <div
    // className="bg-contact-us bg-cover bg-top bg-no-repeat bg-fixed"
    >
      {openModal && (
        <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <section className="mb-10 flex items-center">
        <div className="mx-auto max-w-screen-sm px-6 py-8 lg:py-16">
          <div>
            <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-green-600">
              Contact Us
            </h2>
            <div className="mb-8 px-6 text-center font-light text-gray-600 sm:text-xl lg:mb-16">
              <p>Thank you for visiting EcoWay.</p>
              <p>
                Please send us a message if you have any technical issue or want
                to send a feedback about our website.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-lg bg-gray-100 p-4 shadow-xl"
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
                htmlFor="email"
                className="mb-2 block whitespace-nowrap text-sm font-medium text-gray-900 sm:mb-0 sm:pr-3"
              >
                Your email:
              </label>
              <input
                id="email"
                type="email"
                value={contactInfo.email}
                onChange={handleTextChange}
                className="block bg-gray-50"
                placeholder="user@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 sm:mb-3"
              >
                Your message:
              </label>
              <textarea
                id="message"
                rows="5"
                value={contactInfo.message}
                onChange={handleTextChange}
                className="bg-gray-50"
                placeholder="Leave your message here..."
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-center gap-2">
              <input
                type="submit"
                value="Send message"
                className="cust-btn rounded-full px-5 py-3"
              />
              <button
                type="button"
                onClick={handleClear}
                className="cust-btn rounded-full px-5 py-3"
              >
                Clear fields
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
