import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CarbonCalc() {
  let carbonSum = 0;

  const [renewableEnergy, setRenewableEnergy] = useState('');
  const [heatingSource, setHeatingSource] = useState('');
  const [gasForCooking, setGasForCooking] = useState('');
  const [hasCar, setHasCar] = useState(false);
  const [carType, setCarType] = useState('');
  const [publicTransportTime, setPublicTransportTime] = useState(0);
  const [largeAppliancesPurchased, setLargeAppliancesPurchased] = useState(0);
  const [mediumAppliancesPurchased, setMediumAppliancesPurchased] = useState(0);
  const [smallAppliancesPurchased, setSmallAppliancesPurchased] = useState(0);
  const [clothingPurchased, setClothingPurchased] = useState(0);
  const [diet, setDiet] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(carbonSum);
  const [questNum, setQuestNum] = useState(0);
  const [takeTest, setTakeTest] = useState(false);
  const [barWidth, setBarWidth] = useState(10);

  const questions = [
    <div className="items-center space-x-4 text-green-700">
      <span className="text-lg">
        1. Does your household use renewable energy?
      </span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="renewableEnergy"
          value="yes"
          onChange={() => setRenewableEnergy('yes')}
          checked={renewableEnergy === 'yes'}
        />
        <span className="ml-1 mr-4 text-lg">Yes</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="renewableEnergy"
          value="no"
          onChange={() => setRenewableEnergy('no')}
          checked={renewableEnergy === 'no'}
        />
        <span className="ml-1 text-lg">No</span>
      </label>
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">
        2. What is the primary heating source in your household?
      </span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="heatingSource"
          value="electricity"
          onChange={() => setHeatingSource('electricity')}
          checked={heatingSource === 'electricity'}
        />
        <span className="ml-1 mr-2 text-lg">Electricity</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="heatingSource"
          value="naturalGas"
          onChange={() => setHeatingSource('naturalGas')}
          checked={heatingSource === 'naturalGas'}
        />
        <span className="ml-1 mr-2 text-lg">Natural Gas</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="heatingSource"
          value="noHeating"
          onChange={() => setHeatingSource('noHeating')}
          checked={heatingSource === 'noHeating'}
        />
        <span className="ml-1 mr-2 text-lg">No Heating</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="heatingSource"
          value="solarEnergy"
          onChange={() => setHeatingSource('solarEnergy')}
          checked={heatingSource === 'solarEnergy'}
        />
        <span className="ml-1 text-lg">Solar Energy</span>
      </label>
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">3. Do you use gas for cooking?</span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="gasForCooking"
          value="yes"
          onChange={() => setGasForCooking(true)}
          checked={gasForCooking === true}
        />
        <span className="ml-1 mr-4 text-lg">Yes</span>
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="gasForCooking"
          value="no"
          onChange={() => setGasForCooking(false)}
          checked={gasForCooking === false}
        />
        <span className="ml-1 text-lg">No</span>
      </label>
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">4. Do you have a car?</span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="hasCar"
          value="yes"
          onChange={() => setHasCar(true)}
          checked={hasCar === true}
        />
        <span className="ml-1 mr-4 text-lg">Yes</span>
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="noCar"
          value="no"
          onChange={() => setHasCar(false)}
          checked={hasCar === false}
        />
        <span className="ml-1 text-lg">No</span>
      </label>
      {hasCar && (
        <div>
          <span className="text-lg">What type of car do you have?</span>
          <br></br>
          <br></br>
          <label className="inline-flex items-center">
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="gasoline">Gasoline</option>
              <option value="diesel">Diesel</option>
              <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option>
            </select>
          </label>
        </div>
      )}
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">
        5. How many minutes do you spend taking public transportation a day?
      </span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <select
          value={publicTransportTime}
          onChange={(e) => setPublicTransportTime(Number(e.target.value))}
        >
          {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((minutes) => (
            <option key={minutes} value={minutes}>
              {minutes} minutes
            </option>
          ))}
        </select>
      </label>
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">
        6. How many large sized appliances have you purchased in the past year?
      </span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <select
          value={largeAppliancesPurchased}
          onChange={(e) => setLargeAppliancesPurchased(Number(e.target.value))}
        >
          {Array.from({ length: 11 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </label>
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">
        7. How many medium sized appliances have you purchased in the past year?
      </span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <select
          value={mediumAppliancesPurchased}
          onChange={(e) => setMediumAppliancesPurchased(Number(e.target.value))}
        >
          {Array.from({ length: 11 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </label>
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">
        8. How many small sized appliances have you purchased in the past year?
      </span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <select
          value={smallAppliancesPurchased}
          onChange={(e) => setSmallAppliancesPurchased(Number(e.target.value))}
        >
          {Array.from({ length: 11 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </label>
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">
        9. How many pieces of clothing have you purchased this year?
      </span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <select
          value={clothingPurchased}
          onChange={(e) => setClothingPurchased(Number(e.target.value))}
        >
          {Array.from({ length: 21 }, (_, index) => (
            <option key={index} value={index}>
              {index}
            </option>
          ))}
        </select>
      </label>
    </div>,
    <div className="items-center space-x-4">
      <span className="text-lg">10. What is your diet?</span>
      <br></br>
      <br></br>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="diet"
          value="vegan"
          onChange={() => setDiet('vegan')}
          checked={diet === 'vegan'}
        />
        <span className="ml-1 text-lg">Vegan</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="diet"
          value="vegetarian"
          onChange={() => setDiet('vegetarian')}
          checked={diet === 'vegetarian'}
        />
        <span className="ml-1 text-lg">Vegetarian</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="diet"
          value="mostRedMeat"
          onChange={() => setDiet('mostRedMeat')}
          checked={diet === 'mostRedMeat'}
        />
        <span className="ml-1 text-lg">Red meat in most meals</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio h-6 w-6 text-blue-500"
          name="diet"
          value="noRedMeat"
          onChange={() => setDiet('noRedMeat')}
          checked={diet === 'noRedMeat'}
        />
        <span className="ml-1 text-lg">No red meat</span>
      </label>
    </div>,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    carbonSum += (publicTransportTime / 5) * 66;
    carbonSum += largeAppliancesPurchased * 750;
    carbonSum += mediumAppliancesPurchased * 450;
    carbonSum += smallAppliancesPurchased * 91;
    if (renewableEnergy === 'no') {
      carbonSum += 2881;
    }
    if (heatingSource === 'electricity') {
      carbonSum += 4194;
    } else if (heatingSource === 'naturalGas') {
      carbonSum += 2975;
    }
    if (gasForCooking === 'yes') {
      carbonSum += 290;
    }
    if (carType === 'gasoline') {
      carbonSum += 3842;
    } else if (carType === 'diesel') {
      carbonSum += 3713;
    } else if (carType === 'hybrid') {
      carbonSum += 2548;
    }
    setCarbonFootprint(carbonSum);
  };

  const handleOutsideClick = (e) => {
    if (takeTest && e.target.classList.contains('flex')) {
      setTakeTest(false);
    }
  };

  return (
    <div onClick={handleOutsideClick}>
      <div className="flex items-center justify-center ">
        <div className="mb-40 mt-40 w-full max-w-lg rounded-lg bg-gray-200 p-6 text-center shadow-lg">
          <p className="mb-4 text-lg">
            This questionnaire will ask a few questions about your daily life in
            order to determine your carbon footprint. This will only take 2-3
            minutes.
          </p>
          <button
            onClick={() => {
              setTakeTest(true);
            }}
            className="rounded-lg bg-green-500 px-6 py-3 text-white hover:bg-green-600"
          >
            Take Questionnaire
          </button>
        </div>
      </div>
      {takeTest && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-40 bg-gray-500 bg-opacity-90 transition-opacity"></div>
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ease-out sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="bg-gray-400 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="container mx-auto p-4">
                      <h2 className="mb-4 text-center text-2xl font-semibold">
                        Carbon Footprint Calculator
                      </h2>
                      <div className="relative pt-1">
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <span className="inline-block rounded-full bg-green-200 px-2 py-1 text-xs font-semibold uppercase text-green-600">
                              In Progress
                            </span>
                          </div>
                          <div className="text-center">
                            <h3 className="text-l font-semibold">
                              Question: {questNum + 1}/{questions.length}
                            </h3>
                          </div>
                        </div>
                        <div className="relative h-8 w-full rounded-full bg-gray-200">
                          <div
                            className="absolute left-0 top-0 h-full rounded-full bg-green-500"
                            style={{ width: `${barWidth}%` }}
                          ></div>
                        </div>
                      </div>

                      <br></br>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-4 border-8 border-gray-300 bg-white p-20"
                      >
                        {questions[questNum]}
                        {questNum > 0 && (
                          <button
                            className="mr-5 rounded bg-[#88B92B] px-4 py-2 text-lg text-white hover:bg-green-600"
                            onClick={() => {
                              setQuestNum(questNum - 1);
                              setBarWidth(barWidth - 10);
                            }}
                          >
                            Back
                          </button>
                        )}
                        {questNum < questions.length - 1 && (
                          <button
                            className="rounded bg-[#88B92B] px-4 py-2 text-lg text-white hover:bg-green-600"
                            onClick={() => {
                              setQuestNum(questNum + 1);
                              setBarWidth(barWidth + 10);
                            }}
                          >
                            Next
                          </button>
                        )}
                        <br></br>
                        {questNum === questions.length - 1 && (
                          <div className="flex items-center justify-center">
                            <Link to="/user/dashboard">
                              <button className="rounded bg-green-500 px-6 py-5 text-lg text-white hover:bg-green-600">
                                Finish!
                              </button>
                            </Link>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
