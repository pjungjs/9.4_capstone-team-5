
function Testimonial() {
  return (
    <div className="grid rounded-lg border border-gray-200 shadow-sm md:mb-12 md:grid-cols-2 group">
      <figure className="flex flex-col items-center justify-center rounded-t-lg border-b border-gray-200 bg-blue-200 p-8 text-center md:rounded-t-none md:rounded-tl-lg md:border-r group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 bg-white/40 p-8 rounded-xl mix-blend-luminosity cursor-pointer">
          <p className="uppercase text-lg font-semibold">
            Very easy this was to integrate...
          </p>
          <p className="my-4">
            As an orchestra director, I&apos;m accustomed to harmonizing
            melodies, but Ecoway harmonizes sustainability into my daily
            routine. This app has transformed the way I approach eco-friendly
            practices.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="h-9 w-9 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 text-left font-medium">
            <div>Karen Nelson</div>
            <div className="text-sm text-gray-500">Orchestra Director</div>
          </div>
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center justify-center rounded-tr-lg border-b border-gray-200 bg-blue-200 p-8 text-center group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 bg-white/40 p-8 rounded-xl mix-blend-luminosity cursor-pointer">
          <p className="uppercase text-lg font-semibold">
            It&apos;s a bridge that connects our actions to a greener future...
          </p>
          <p className="my-4">
            Running a successful business while nurturing the environment can be
            challenging. Ecoway, however, has revolutionized our approach at the
            R.O.C. With Ecoway, we&apos;re pioneering a greener future for our
            company and the planet.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="h-9 w-9 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 text-left font-medium">
            <div>Pastora Lara Portillo</div>
            <div className="text-sm text-gray-500">CEO of the R.O.C.</div>
          </div>
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center justify-center rounded-bl-lg border-b border-gray-200 bg-blue-200 p-8 text-center md:border-b-0 md:border-r group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 bg-white/40 p-8 rounded-xl mix-blend-luminosity cursor-pointer">
          <p className="uppercase text-lg font-semibold">
            Ecoway empowers individuals from all walks of life...
          </p>
          <p className="my-4">
            To be agents of positive change. Entrepreneurship is about innovation and impact, and Ecoway embodies
            both. From reducing waste to supporting green initiatives, Ecoway
            provides actionable steps that empower entrepreneurs like me to
            contribute positively to the environment while driving business
            success.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="h-9 w-9 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 text-left font-medium">
            <div>Steve Biko</div>
            <div className="text-sm text-gray-500">Entreprenour</div>
          </div>
        </figcaption>
      </figure>

      <figure className="flex flex-col items-center justify-center rounded-b-lg border-gray-200 bg-blue-200 p-8 text-center md:rounded-br-lg group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500">
        <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8  bg-white/40 p-8 rounded-xl mix-blend-luminosity cursor-pointer">
          <p className="uppercase text-lg font-semibold">
            It&apos;s about making sustainable choices...
          </p>
          <p className="my-4">
            Ecoway&apos;s data-driven insights and tools have enhanced my
            understanding of environmentally conscious lifestyle.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
          <img
            className="h-9 w-9 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 text-left font-medium">
            <div>William Cashman</div>
            <div className="text-sm text-gray-500">Stock Analyst</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Testimonial;
