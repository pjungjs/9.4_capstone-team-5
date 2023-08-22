function Home() {
  return (
    <div className="grid grid-cols-2 gap-4">
       <div className="border-2 border-yellow-500">  {/*this is going to be an image tag or use an image as bg of div*/}
        <h1>Paving a sustainable future, one Ecoway at a time </h1>
        <button>join now</button>
      </div>

      <div className="border-2 border-red-700">
       <p>hello</p>
      </div>

      <div className="border-2 border-blue-700">
          <div>image</div>
      </div>
    </div>

  );
}

export default Home;
