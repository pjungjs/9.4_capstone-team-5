
import planet from '../assets/planet1.jpeg'
import recycling from '../assets/recycle1.jpeg'
import AboutSection from '../components/common/AboutSection';


function Home() {
  return (
    <div className='main-landing'>

    <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-3 gap-3 mx-8 my-8 h-auto border-2 border-orange-700'>

      <div className="md:col-span-2 md:row-span-2 border-8 border-green-500 resize rounded-md">
        <img src={planet } className='w-full'/>
        
        <button class='bg-green-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded' >Take Action</button>
      </div>

      <div className="md:col-start-3 border-8 border-blue-500">
        <h1>How does it work?</h1>
        <p>First, you will need to create an account. Then, you will be able to track your carbon footprint by entering your daily activities. Finally, you will be able to offset your carbon footprint by donating to a charity of your choice. </p>
      </div>

      <div className="hidden md:col-start-3 md:row-start-2 md:flex border-8 border-red-500">
        
        <img src={recycling} className='w-full'/>
      </div>


    </div>
      <AboutSection />
    </div>

  );
}

export default Home;
