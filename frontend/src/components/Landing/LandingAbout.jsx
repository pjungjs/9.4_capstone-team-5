function AboutSection() {
  return (
    <div>
      <div>
        <div className="cust-text-text mx-4 my-20 flex flex-col items-center justify-center text-center">
          <div className="p-2">
            <p className="text-4xl font-bold">Who we are</p>
            <br />
            <p className="mt-4 text-2xl">
              Ecoway is an app focused on promoting sustainability and
              encouraging eco-friendly practices that can have a positive impact
              on the environment and people&apos;s daily lives. All this while
              making it fun and easy to do so, by providing a platform for
              people to share their experiences and learn from each other.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center justify-start rounded-lg bg-white p-6 shadow-lg shadow-green-500">
              <p className="text-xl font-medium">📣 OUR MISSION</p>
              <p className="mt-3">
                Our mission is to help people reduce their carbon footprint and
                make a positive impact on the environment.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start rounded-lg bg-white p-6 shadow-lg shadow-green-500">
              <p className="text-xl font-medium">🍃 CALCULATOR</p>
              <p className="mt-3">
                Our vision is to create a community of people who are passionate
                about sustainability and eco-friendly practices.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start rounded-lg bg-white p-6 shadow-lg shadow-green-500">
              <p className="text-xl font-medium">🌎 OUR VALUES</p>
              <p className="mt-3">
                Our values are to be transparent, honest, and ethical in all
                that we do.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start rounded-lg bg-white p-6 shadow-lg shadow-green-500">
              <p className="text-xl font-medium">🏆 OUR GOALS</p>
              <p className="mt-3">
                Our goal is to help people reduce their carbon footprint while
                also making a positive impact on the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
