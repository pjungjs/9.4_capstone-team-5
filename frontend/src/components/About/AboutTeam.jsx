import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import joseCepeda from '../../assets/aboutImages/jose-cepeda-profile.jpeg';

function AboutTeam() {
  return (
    <div className="cust-text-text container mx-auto mb-32 mt-36 text-center">
      <p className="mb-12 text-5xl font-bold">Meet our team</p>
      <div className="flex flex-wrap items-center justify-center">
        <div className="space-y-4 p-4">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQGku8AQcQseXQ/profile-displayphoto-shrink_200_200/0/1696047842285?e=1701302400&v=beta&t=88cctxUu_EuaNv4JquIwCvQdSDXOoe_A0vVs6moUONk"
            referrerPolicy="no-referrer"
            alt="avatar"
            className="mx-auto w-[150px] rounded-lg shadow-lg"
          />
          <p className="text-lg font-bold">Wilghen Santos</p>
          <p>Full Stack Software Developer</p>
          <div className="flex justify-center space-x-5 pt-2">
            <a
              href="https://www.instagram.com/prodigos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600"
            >
              <BsInstagram />
            </a>
            <a
              href="https://github.com/Wilsantos1975"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/fausto-wilghen-santos-9083a9112/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="space-y-4 p-4">
          <img
            src="https://ca.slack-edge.com/TCVA3PF24-U023WM3UPKN-40b80928e312-512"
            alt="avatar"
            referrerPolicy="no-referrer"
            className="mx-auto w-[150px] rounded-lg shadow-lg"
          />
          <p className="text-lg font-bold">Shareeka Epps</p>
          <p>Full Stack Software Developer</p>
          <div className="flex justify-center space-x-5 pt-2">
            <a
              href="https://github.com/shaketastic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shareeka-epps/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="space-y-4 p-4">
          <img
            src="https://avatars.githubusercontent.com/u/115429022?v=4"
            alt="avatar"
            referrerPolicy="no-referrer"
            className="mx-auto w-[150px] rounded-lg shadow-lg dark:shadow-black/20"
          />
          <p className="text-lg font-bold">Jinseok Jung</p>
          <p>Full Stack Software Developer</p>
          <div className="flex justify-center space-x-5 pt-2">
            <a
              href="https://github.com/pjungjs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jinseok-jung/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="space-y-4 p-4">
          <img
            className="mx-auto mb-6 w-[150px] rounded-lg shadow-lg"
            src={joseCepeda}
            alt="avatar"
          />
          <h5 className="text-lg font-bold">Jose Cepeda</h5>
          <p>Full Stack Software Developer</p>
          <div className="flex justify-center space-x-5 pt-2">
            <a
              href="https://github.com/JoseC620"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
