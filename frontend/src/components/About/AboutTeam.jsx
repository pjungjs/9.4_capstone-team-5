import React from 'react';
// import background2 from '../../assets/aboutImages/background2.png';
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from 'react-icons/bs';

function AboutTeam() {
  return (
    <div className="container mx-auto mt-36 md:px-6">
      <div className="mb-32 text-center">
        <p className="cust-text-text mb-12 text-3xl font-bold">Meet our team</p>

        <div className="lg:gap-xl-12 gap-x-6cust-text-text grid md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-12 lg:mb-0">
            <img
              className="mx-auto mb-6 w-[150px] rounded-lg shadow-lg"
              src="https://media.licdn.com/dms/image/D4E03AQGku8AQcQseXQ/profile-displayphoto-shrink_200_200/0/1696047842285?e=1701302400&v=beta&t=88cctxUu_EuaNv4JquIwCvQdSDXOoe_A0vVs6moUONk"
              alt="avatar"
            />
            <p className="mb-4 text-lg font-bold">Wilghen Santos</p>
            <p className="mb-6">Full Stack Software Developer</p>

            <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
              <a
                href="https://www.instagram.com/prodigos/"
                className="text-gray-500 hover:text-green-600"
              >
                <BsInstagram />
              </a>

              <a
                href="https://github.com/Wilsantos1975"
                className="text-gray-500 hover:text-green-600"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/fausto-wilghen-santos-9083a9112/"
                className="text-gray-500 hover:text-green-600"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              className="mx-auto mb-6 w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
              src="https://ca.slack-edge.com/TCVA3PF24-U023WM3UPKN-40b80928e312-512"
              alt="avatar"
            />
            <p className="mb-4 text-lg font-bold">Shareeka Epps</p>
            <p className="mb-6">Full Stack Software Developerr</p>
            <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsFacebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsInstagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsGithub />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="mb-12 md:mb-0">
            <img
              className="mx-auto mb-6 w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
              src="https://avatars.githubusercontent.com/u/115429022?v=4"
              alt="avatar"
            />
            <p className="mb-4 text-lg font-bold">Jinseok Jung</p>
            <p className="mb-6">Full Stack Software Developer</p>
            <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
              <a
                href=" https://github.com/pjungjs"
                className="text-gray-500 hover:text-green-600"
              >
                <BsGithub />
              </a>
              <a
                href=" https://www.linkedin.com/in/jinseok-jung/"
                className="text-gray-500 hover:text-green-600"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="mb-12 md:mb-0">
            <img
              className="mx-auto mb-6 w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
              src="data:image/png;base64,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"
              alt="avatar"
            />
            <h5 className="mb-4 text-lg font-bold">Jose Cepeda</h5>
            <p className="mb-6">Full Stack Software Developer</p>
            <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsFacebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsInstagram />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsGithub />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
