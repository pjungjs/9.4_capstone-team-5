function Home() {
  return (
    <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-3   gap-3 mx-8 my-8 border-2 border-orange-700'>

      <div className="md:col-span-2 md:row-span-2 border-8 border-green-500 ">
        <h1>What is Ecoway?</h1>
        <p>Ecoway is a platform that allows you to track your carbon footprint and offset it by donating to a charity of your choice. </p>
      </div>

      <div className="md:col-start-3 border-8 border-blue-500">
        <h1>How does it work?</h1>
        <p>First, you will need to create an account. Then, you will be able to track your carbon footprint by entering your daily activities. Finally, you will be able to offset your carbon footprint by donating to a charity of your choice. </p>
      </div>

      <div className="hidden md:col-start-3 md:row-start-2 md:flex border-8 border-red-500">
        <h1>Why should I use Ecoway?</h1>
        <p>By using Ecoway, you will be able to track your carbon footprint and offset it by donating to a charity of your choice. </p>
      </div>

      {/* <div className="border-2 border-yellow-500">
        <h1>How much does it cost?</h1>
        <p>It is free to use Ecoway. However, you will need to donate to a charity of your choice in order to offset your carbon footprint. </p>
      </div>

      <div className="border-2 border-green-500">
        <h1>How do I get started?</h1>
        <p>First, you will need to create an account. Then, you will be able to track your carbon footprint by entering your daily activities. Finally, you will be able to offset your carbon footprint by donating to a charity of your choice. </p>
      </div>

      <div className="border-2 border-blue-500">
        <h1>How do I create an account?</h1>
        <p>First, you will need to create an account. Then, you will be able to track your carbon footprint by entering your daily activities. Finally, you will be able to offset your carbon footprint by donating to a charity of your choice. </p>
      </div>

      <div className="border-2 border-red-500">
        <h1>How do I track my carbon footprint?</h1>
        <p>First, you will need to create an account. Then, you will be able to track your carbon footprint by entering your daily activities. Finally, you will be able to offset your carbon footprint by donating to a charity of your choice. </p>
      </div> */}

       {/* <div className="border-2 border-yellow-500">  this is going to be an image tag or use an image as bg of div
        <h1>Paving a sustainable future, one Ecoway at a time </h1>
        <button>join now</button>
      </div>

      <div className="border-2 border-red-700">
       <p>hello</p>
      </div>

      <div className="border-2 border-blue-700">
          <div>image</div>
      </div> */}


    </div>

  );
}

export default Home;
