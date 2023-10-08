import { HiArrowDownTray } from 'react-icons/hi2';
//import reduceCarbon from '../../assets/reduceCarbon.jpeg';
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <div>
      {/* <Link to="/login">
      <button className="mx-auto my-8 flex gap-2 rounded-md bg-blue-400 px-6 py-2 shadow-xl ring-neutral-900 ring-offset-4 ring-offset-white transition-shadow hover:shadow-none focus:outline-none focus-visible:ring-4 ">
        <HiArrowDownTray className="h-6 w-6" />
        Download Our App
      </button>
      </Link> */}
      {/* <img
        src={reduceCarbon}
        className="w-full animate-pulse rounded-t-xl ease-in-out md:h-full"
        alt="Reduce Carbon Footprint"
      /> */}
      <div >
//         <div className="mx-auto max-w-6xl px-4 py-12">
//         <div className="p-10">
        <p className=" text-center font-bold text-4xl">Who we are. </p>
        <br />
        <p className="mt-4 text-2xl text-center cust-text-text">
          Ecoway is an app focused on promoting sustainability and encouraging
          eco-friendly practices that can have a positive impact on the
          environment and people's daily lives. All this while making it fun and
          easy to do so, by providing a platform for people to share their
          experiences and learn from each other.
        </p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="h-full rounded-lg bg-white p-6 shadow-lg shadow-green-500">
                <h3 className="text-xl font-medium">
                  📣 OUR MISSION
                </h3>
                <p className="mt-2">
                  Our mission is to help people reduce their carbon footprint
                  and make a positive impact on the environment.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-full rounded-lg bg-white p-6 shadow-lg shadow-green-500 ">
                <p className="text-xl font-medium text-gray-900 dark:text-white">
                  🍃 CALCULATOR
                </p>
                <p className="mt-2">
                  Our vision is to create a community of people who are
                  passionate about sustainability and eco-friendly practices.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-full rounded-lg bg-white p-6 shadow-lg shadow-green-500 ">
                <h3 className="text-xl font-medium">
                  🌎 OUR VALUES
                </h3>
                <p className="mt-2">
                  Our values are to be transparent, honest, and ethical in all
                  that we do.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-full rounded-lg bg-white p-6 shadow-lg shadow-green-500">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  🏆 OUR GOALS
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Our goal is to help people reduce their carbon footprint while
                  also making a positive impact on the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
