
import { useState } from 'react';

export default function CarbonCalc(){
 let carbonSum = 0


  const [renewableEnergy, setRenewableEnergy] = useState(false);
  const [heatingSource, setHeatingSource] = useState('');
  const [gasForCooking, setGasForCooking] = useState(false);
  const [hasCar, setHasCar] = useState(false);
  const [carType, setCarType] = useState('');
  const [publicTransportTime, setPublicTransportTime] = useState(0);
  const [largeAppliancesPurchased, setLargeAppliancesPurchased] = useState(0);
  const [mediumAppliancesPurchased, setMediumAppliancesPurchased] = useState(0);
  const [smallAppliancesPurchased, setSmallAppliancesPurchased] = useState(0);
  const [clothingPurchased, setClothingPurchased] = useState(0);
  const [diet, setDiet] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(carbonSum)



  const handleSubmit = (e) => {
    e.preventDefault();
    carbonSum += publicTransportTime / 5 * 66;
    carbonSum += largeAppliancesPurchased * 750
    carbonSum += mediumAppliancesPurchased * 450
    carbonSum += smallAppliancesPurchased * 91
    if(renewableEnergy === false){
        carbonSum += 2881
    }
    if(heatingSource === "electricity"){
        carbonSum += 4194
    } else if (heatingSource === "naturalGas"){
        carbonSum += 2975
    }
    if(gasForCooking === "yes"){
        carbonSum += 290
    }
    if (carType === "gasoline"){
        carbonSum += 3842
    } else if (carType === "diesel"){
        carbonSum += 3713
    } else if (carType === "hybrid"){
        carbonSum += 2548
    }
    setCarbonFootprint(carbonSum)
  };

  console.log(carbonFootprint)

  return (
    <div>
      <h2>Carbon Footprint Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            1. Does your household use renewable energy?
            <select
              value={renewableEnergy}
              onChange={(e) => setRenewableEnergy(e.target.value)}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            2. What is the primary heating source in your household?
            <select
              value={heatingSource}
              onChange={(e) => setHeatingSource(e.target.value)}
            >
              <option value="">Select</option>
              <option value="electricity">Electricity</option>
              <option value="naturalGas">Natural Gas</option>
              <option value="noHeating">No Heating</option>
              <option value="solarEnergy">Solar Energy</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            3. Do you use gas for cooking?
            <select
              value={gasForCooking}
              onChange={(e) => setGasForCooking(e.target.value)}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            4. Do you have a car?
            <select
              value={hasCar}
              onChange={(e) => setHasCar(e.target.value)}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label>
          {hasCar === 'yes' && (
            <div>
              <label>
                What type of car do you have?
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
        <div>
          <label>
            5. How many minutes do you spend taking public transportation a day?
            <select
              value={publicTransportTime}
              onChange={(e) => setPublicTransportTime(Number(e.target.value))}
            >
              {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60].map((minutes) => (
                <option key={minutes} value={minutes}>{minutes} minutes</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            6. How many large sized appliances have you purchased in the past year?
            <select
              value={largeAppliancesPurchased}
              onChange={(e) => setLargeAppliancesPurchased(Number(e.target.value))}
            >
              {Array.from({ length: 11 }, (_, index) => (
                <option key={index} value={index}>{index}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            6. How many medium sized appliances have you purchased in the past year?
            <select
              value={mediumAppliancesPurchased}
              onChange={(e) => setMediumAppliancesPurchased(Number(e.target.value))}
            >
              {Array.from({ length: 11 }, (_, index) => (
                <option key={index} value={index}>{index}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            6. How many small sized appliances have you purchased in the past year?
            <select
              value={smallAppliancesPurchased}
              onChange={(e) => setSmallAppliancesPurchased(Number(e.target.value))}
            >
              {Array.from({ length: 11 }, (_, index) => (
                <option key={index} value={index}>{index}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            7. How many pieces of clothing have you purchased this year?
            <select
              value={clothingPurchased}
              onChange={(e) => setClothingPurchased(Number(e.target.value))}
            >
              {Array.from({ length: 21 }, (_, index) => (
                <option key={index} value={index}>{index}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            8. What is your diet?
            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
            >
              <option value="">Select</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="mostRedMeat">Red meat in most meals</option>
              <option value="NoRedMeat">No red meat</option>
            </select>
          </label>
        </div>
        <button>Calculate</button>
      </form>
      <div>
        <h1>Your Carbon Footprint: {carbonFootprint}</h1>
      </div>
    </div>
  );
};

