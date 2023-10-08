function AboutSection() {
  return (
    <div>
      <div>
        <p className="text-center text-4xl font-bold">Who we are.</p>
        <br />
        <p className="cust-text-text mt-4 text-center text-2xl">
          Ecoway is an app focused on promoting sustainability and encouraging
          eco-friendly practices that can have a positive impact on the
          environment and people&apos;s daily lives. All this while making it
          fun and easy to do so, by providing a platform for people to share
          their experiences and learn from each other.
        </p>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="h-full rounded-lg bg-white p-6 shadow-lg shadow-green-500">
                <h3 className="text-xl font-medium">📣 OUR MISSION</h3>
                <p className="mt-2">
                  Our mission is to help people reduce their carbon footprint
                  and make a positive impact on the environment.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-full rounded-lg bg-white p-6 shadow-lg shadow-green-500 ">
                <p className="text-xl font-medium text-gray-900">
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
                <h3 className="text-xl font-medium">🌎 OUR VALUES</h3>
                <p className="mt-2">
                  Our values are to be transparent, honest, and ethical in all
                  that we do.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-full rounded-lg bg-white p-6 shadow-lg shadow-green-500">
                <h3 className="text-xl font-medium text-gray-900">
                  🏆 OUR GOALS
                </h3>
                <p className="mt-2 text-gray-600">
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
