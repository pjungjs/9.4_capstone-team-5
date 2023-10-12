import carbonFootMoving from '../../assets/carbonFootMoving.gif';

function LandingGif() {
  return (
    <div
      className="relative flex h-[600px] w-full items-center justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${carbonFootMoving})` }}
    >
      <div className="h-[600px] w-full bg-black opacity-30"></div>
      <div className="absolute mx-4 my-20 text-center text-3xl font-extrabold text-white">
        <p>Gamified Eco-Living to turn sustainability into a game</p>
        <hr className="cust-bg-primary my-4" />
        <p>Take small actions lead to significant changes</p>
        <hr className="my-4" />
        <p>Connect with like-minded individuals for a greener world.</p>
      </div>
    </div>
  );
}

export default LandingGif;
