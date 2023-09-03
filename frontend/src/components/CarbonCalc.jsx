import { useState } from 'react';

export default function CarbonCalc() {
  let carbonSum = 0;

  const [renewableEnergy, setRenewableEnergy] = useState();
  const [heatingSource, setHeatingSource] = useState('');
  const [gasForCooking, setGasForCooking] = useState();
  const [hasCar, setHasCar] = useState(false);
  const [carType, setCarType] = useState('');
  const [publicTransportTime, setPublicTransportTime] = useState(0);
  const [largeAppliancesPurchased, setLargeAppliancesPurchased] = useState(0);
  const [mediumAppliancesPurchased, setMediumAppliancesPurchased] = useState(0);
  const [smallAppliancesPurchased, setSmallAppliancesPurchased] = useState(0);
  const [clothingPurchased, setClothingPurchased] = useState(0);
  const [diet, setDiet] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(carbonSum);

  const handleSubmit = (e) => {
    e.preventDefault();
    carbonSum += (publicTransportTime / 5) * 66;
    carbonSum += largeAppliancesPurchased * 750;
    carbonSum += mediumAppliancesPurchased * 450;
    carbonSum += smallAppliancesPurchased * 91;
    if (renewableEnergy === false || renewableEnergy === 'no') {
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

  console.log(carbonFootprint);

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        Carbon Footprint Calculator
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 border-8 p-4">
        <div className="items-center space-x-4">
          <span>1. Does your household use renewable energy?</span>
          <br></br>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="renewableEnergy"
              value="yes"
              onChange={() => setRenewableEnergy(true)}
              checked={renewableEnergy === true}
            />
            <span className="ml-1 mr-4">Yes</span>
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="renewableEnergy"
              value="no"
              onChange={() => setRenewableEnergy(false)}
              checked={renewableEnergy === false}
            />
            <span className="ml-1">No</span>
          </label>
        </div>
        <div className="items-center space-x-4">
          <span>2. What is the primary heating source in your household?</span>
          <br></br>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="heatingSource"
              value="electricity"
              onChange={() => setHeatingSource('electricity')}
              checked={heatingSource === 'electricity'}
            />
            <span className="ml-1 mr-2">Electricity</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="heatingSource"
              value="naturalGas"
              onChange={() => setHeatingSource('naturalGas')}
              checked={heatingSource === 'naturalGas'}
            />
            <span className="ml-1 mr-2">Natural Gas</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="heatingSource"
              value="noHeating"
              onChange={() => setHeatingSource('noHeating')}
              checked={heatingSource === 'noHeating'}
            />
            <span className="ml-1 mr-2">No Heating</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="heatingSource"
              value="solarEnergy"
              onChange={() => setHeatingSource('solarEnergy')}
              checked={heatingSource === 'solarEnergy'}
            />
            <span className="ml-1">Solar Energy</span>
          </label>
        </div>
        <div className="items-center space-x-4">
          <span>3. Do you use gas for cooking?</span>
          <br></br>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="gasForCooking"
              value="yes"
              onChange={() => setGasForCooking(true)}
              checked={gasForCooking === true}
            />
            <span className="ml-1 mr-4">Yes</span>
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="gasForCooking"
              value="no"
              onChange={() => setGasForCooking(false)}
              checked={gasForCooking === false}
            />
            <span className="ml-1">No</span>
          </label>
        </div>
        <div className="items-center space-x-4">
          <span>4. Do you have a car?</span>
          <br></br>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="hasCar"
              value="yes"
              onChange={() => setHasCar(true)}
              checked={hasCar === true}
            />
            <span className="ml-1 mr-4">Yes</span>
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="noCar"
              value="no"
              onChange={() => setHasCar(false)}
              checked={hasCar === false}
            />
            <span className="ml-1">No</span>
          </label>
          {hasCar && (
            <div>
              <label>
                <span>What type of car do you have?</span>
                <br></br>
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
        </div>
        <div className="items-center space-x-4">
          <span>
            5. How many minutes do you spend taking public transportation a day?
          </span>
          <br></br>
          <label className="inline-flex items-center">
            <select
              value={publicTransportTime}
              onChange={(e) => setPublicTransportTime(Number(e.target.value))}
            >
              {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map(
                (minutes) => (
                  <option key={minutes} value={minutes}>
                    {minutes} minutes
                  </option>
                ),
              )}
            </select>
          </label>
        </div>
        <div className="items-center space-x-4">
          6. How many large sized appliances have you purchased in the past
          year?
          <br></br>
          <label className="inline-flex items-center">
            <select
              value={largeAppliancesPurchased}
              onChange={(e) =>
                setLargeAppliancesPurchased(Number(e.target.value))
              }
            >
              {Array.from({ length: 11 }, (_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="items-center space-x-4">
          <span>
            7. How many medium sized appliances have you purchased in the past
            year?
          </span>
          <br></br>
          <label className="inline-flex items-center">
            <select
              value={mediumAppliancesPurchased}
              onChange={(e) =>
                setMediumAppliancesPurchased(Number(e.target.value))
              }
            >
              {Array.from({ length: 11 }, (_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="items-center space-x-4">
          <span>
            8. How many small sized appliances have you purchased in the past
            year?
          </span>
          <br></br>
          <label className="inline-flex items-center">
            <select
              value={smallAppliancesPurchased}
              onChange={(e) =>
                setSmallAppliancesPurchased(Number(e.target.value))
              }
            >
              {Array.from({ length: 11 }, (_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="items-center space-x-4">
          <span>
            9. How many pieces of clothing have you purchased this year?
          </span>
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
        </div>
        <div className="items-center space-x-4">
          <span>10. What is your diet?</span>
          <br></br>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="diet"
              value="vegan"
              onChange={() => setDiet('vegan')}
              checked={diet === 'vegan'}
            />
            <span className="ml-1">Vegan</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="diet"
              value="vegetarian"
              onChange={() => setDiet('vegetarian')}
              checked={diet === 'vegetarian'}
            />
            <span className="ml-1">Vegetarian</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="diet"
              value="mostRedMeat"
              onChange={() => setDiet('mostRedMeat')}
              checked={diet === 'mostRedMeat'}
            />
            <span className="ml-1">Red meat in most meals</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500"
              name="diet"
              value="noRedMeat"
              onChange={() => setDiet('noRedMeat')}
              checked={diet === 'noRedMeat'}
            />
            <span className="ml-1">No red meat</span>
          </label>
        </div>
        <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          Calculate!
        </button>
        <h1 className="text-xl font-semibold">
          Your Carbon Footprint: {carbonFootprint}
        </h1>
      </form>
    </div>
  );
}
