import CarbonCalc from "../../CarbonCalc"
import { useEffect, useState } from "react"
import axios from "axios";
import { motion } from 'framer-motion';

const API = import.meta.env.VITE_BASE_URL;

export default function DailyQuestions( { returningUser, currentUser }) {

    const [loading, setLoading] = useState(true);
    const [questNum, setQuestNum] = useState(0);
    const [questions, setQuestions] = useState({})
    const [barWidth, setBarWidth] = useState(100/8);
    const [showQuest, setShowQuest] = useState(false)
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [milesBiked, setMilesBiked] = useState(0);
    const [mealsMade, setMealsMade] = useState(0);
    const [existingAnswers, setExistingAnswers] = useState({})
    const [answersTable, setAnswersTable] = useState({
      user_auth_id: currentUser.user_auth_id,
      question_answers: {},
      carbon_emission_result: 0,
    });


    const [userScores, setUserScores] = useState({
    score_actions: 0,
    score_energy: 0,
    score_food: 0,
    score_lifestyle: 0,
    score_logged_in: 0,
    score_recycling: 0,
    score_total: 0,
    score_transportation: 0,
    user_auth_id: 0
    })

    const answers = {
        0: ['Installed energy-efficient appliances', 'Using solar panels', 'Not using renewable energy sources', 'None of the above'],
        1: ['Increased the use of public transportation or carpooling', 'Increased personal car usage', 'No change in transportation habits'],
        2: ['0'],
        3: ['Increased my recycling efforts', 'Maintained consistent recycling habits', 'Decreased my recycling efforts'],
        4: ['Yes, I compost regularly', 'I rarely compost', 'No, I don\'t compost'],
        5: ['Reduced meat consumption', 'Transitioned to a vegetarian diet', 'Transitioned to a vegan diet', 'No significant diet changes'],
        6: ['0'],
        7: ['Yes, I actively support and engage in local sustainability initiatives', 'I\'m aware of such initiatives but haven\'t participated', 'No, I\'m not involved in local sustainability initiatives']
    }


    useEffect(() => {
        axios
          .get(`${API}/questions`)
          .then((response) => {
            const dailyQuestions = response.data.slice(11);
            setQuestions(dailyQuestions);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }, []);

        
  useEffect(() => {
    axios
    .get(`${API}/users/answers/${currentUser.user_auth_id}`)
    .then((response) => {
        console.log(response.data);
        setAnswersTable(response.data);
        setExistingAnswers(response.data.question_answers)
        setLoading(false);
      })
      .catch((err) => {
          console.log(err);
          setLoading(false);
      });
  }, []);

      
      useEffect(() => {
        axios
          .get(`${API}/users/scores/${currentUser.user_auth_id}`)
          .then((response) => {
            setUserScores({
              score_actions: response.data.score_actions,
              score_energy: response.data.score_energy,
              score_food: response.data.score_food,
              score_lifestyle: response.data.score_lifestyle,
              score_logged_in: response.data.score_logged_in,
              score_recycling: response.data.score_recycling,
              score_total: response.data.score_total,
              score_transportation: response.data.score_transportation,
              user_auth_id: response.data.user_auth_id
              })
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }, []);


      const updateUserScores = (updatedUserScores) => {
        axios
          .put(
            `${API}/users/scores/${currentUser.user_auth_id}`,
            updatedUserScores,
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.warn('Error:', error);
          });
      };

      const updateQuestionAnswers = (updatedAnswersTable) => {
            axios
              .put(`${API}/users/answers/${currentUser.user_auth_id}`, updatedAnswersTable)
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.warn('Error:', error);
              });
      };


      
      const handleAnswersTable = () => {
        const updatedQuestionAnswers = {
          ...existingAnswers,
          "Select the option that best describes your household energy usage compared to your last login": selectedAnswers[0],
          "Pick the option that best represents your daily transportation habits compared to your last login": selectedAnswers[1],
          "How many miles have you biked this week?": selectedAnswers[2],
          "How has your recycling behavior changed?": selectedAnswers[3],
          "Do you actively compost organic waste?": selectedAnswers[4],
          "How has your diet changed?": selectedAnswers[5],
          "How many home-cooked meals have you made this week?": selectedAnswers[6],
          "Do you support or engage in local community initiatives promoting sustainability?": selectedAnswers[7],
        };

        setAnswersTable({
          ...answersTable,
          question_answers: updatedQuestionAnswers
        })
        
      }
      

      const handleUserScore = () => {
        let updatedUserScores = { ...userScores };
        let energyScore = 0;
        let transportationScore = 0;
        let recyclingScore = 0;
        let foodScore = 0;
        let lifestyleScore = 0;
      
        if (selectedAnswers[0] === "Using solar panels") {
          energyScore = 350;
          } else if (selectedAnswers[0] === "Installed energy-efficient appliances") {
          energyScore = 100;
          }
        if (selectedAnswers[1] === "Increased the use of public transportation or carpooling") {
            transportationScore = 100;
        }
        if (selectedAnswers[3] === "Increased my recycling efforts") {
            recyclingScore = 200;
          } else if (selectedAnswers[3] === "Maintained consistent recycling habits") {
            recyclingScore = 100;
          } 
        if (selectedAnswers[4] === "Yes, I compost regularly") {
            foodScore = 200;
          } else if (selectedAnswers[4] === "I rarely compost") {
            foodScore = 100;
          }
        if (selectedAnswers[5] === "Reduced meat consumption") {
            foodScore = 100;
          } else if (selectedAnswers[5] === "Transitioned to a vegetarian diet") {
            foodScore = 200;
          } else if (selectedAnswers[5] === "Transitioned to a vegan diet") {
            foodScore = 300;
          }
        if (selectedAnswers[7] === "Yes, I actively support and engage in local sustainability initiatives") {
            lifestyleScore = 300;
          }

        transportationScore += (milesBiked*2)
        foodScore += (mealsMade*4)
      
        updatedUserScores.score_energy += energyScore;
        updatedUserScores.score_transportation += transportationScore;
        updatedUserScores.score_recycling += recyclingScore;
        updatedUserScores.score_food += foodScore;
        updatedUserScores.score_lifestyle += lifestyleScore;
      
        updatedUserScores.score_total =
          updatedUserScores.score_actions +
          updatedUserScores.score_energy +
          updatedUserScores.score_food +
          updatedUserScores.score_lifestyle +
          updatedUserScores.score_logged_in +
          updatedUserScores.score_recycling +
          updatedUserScores.score_transportation;
      
        setUserScores(updatedUserScores);
        handleAnswersTable()
      };
      
       
      const handleAnswerSelection = (answer) => {
        setSelectedAnswers((prevSelectedAnswers) => {
          const updatedAnswers = [...prevSelectedAnswers];
          updatedAnswers[questNum] = answer;
          return updatedAnswers;
        });
      };

    
      const handleSubmit = (e) => {
        e.preventDefault();
        updateUserScores(userScores);
        updateQuestionAnswers(answersTable)
      };
      

      console.log(userScores)
      

      if (loading) {
        return <div>Loading...</div>;
    }

    console.log(selectedAnswers)
    

      if(!returningUser){
    return (
        <div>
            <CarbonCalc returningUser={returningUser} />
        </div>
    )
      } else {
        return (
            <div>
                {!showQuest ?

                    <div className="rounded-b-lg bg-gradient-to-r from-green-500 to-teal-500">
        <div className="p-5 text-center text-xl font-bold text-gray-800">
            <button onClick={() => setShowQuest(true)}>
              Take the daily questionnaire
            </button>
      </div>
    </div>
      :
      <div></div>
      }
    {showQuest ?
           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ease-out sm:my-8 sm:w-full sm:max-w-4xl"
  >
    <div className="bg-green-300 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-2xl font-semibold"
      >
        Daily Questionnaire
      </motion.h2>
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
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${barWidth}%` }}
      transition={{ duration: 0.5 }}
      className="absolute left-0 top-0 h-full rounded-full bg-green-500"
      style={{ width: `${barWidth}%` }}
    ></motion.div>
  </div>
      </div>

      <br></br>

      <form
  onSubmit={handleSubmit}
  className="space-y-4 border-8 border-gray-300 bg-white p-20"
>
  <motion.div
    key={questNum}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1>{questions[questNum].question}</h1>
    <br></br>
    {answers[questNum].map((ans, index) => {
        if(questNum === 2){
            return (
              <div key={index}>
              <input
                type="range"
                min="0"
                max="100"
                value={milesBiked}
                className="w-80 h-2 bg-blue-500 rounded-lg"
                onChange={(e) => {
                  setMilesBiked(e.target.value)
                  handleAnswerSelection(e.target.value)
                }}
              />
              <p>Miles Biked: {milesBiked}</p>
            </div>
            )
        } else if(questNum === 6){
          return (
            <div key={index}>
            <input
              type="range"
              min="0"
              max="25"
              value={mealsMade}
              className="w-80 h-2 bg-blue-500 rounded-lg"
              onChange={(e) => {
                setMealsMade(e.target.value)
                handleAnswerSelection(e.target.value)
              }}
            />
            <p>Home Made Meals: {mealsMade}</p>
          </div>
          )
        } else {
        return(
            <div key={index}>
<button
  type="button"
  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 active:bg-gradient-to-br active:from-lime-300 active:to-lime-300"
  onClick={() => handleAnswerSelection(ans)}
>
  <span className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-focus:bg-opacity-0 group-focus:text-gray-900`}>
    {ans}
  </span>
</button>
            </div>
        
        ) }
    })}
  </motion.div>
  {questNum > 0 && (
    <button
      type="button"
      className="mr-5 rounded bg-[#88B92B] px-4 py-2 text-lg text-white hover:bg-green-600"
      onClick={() => {
        setQuestNum(questNum - 1);
        setBarWidth(barWidth - 100/questions.length);
      }}
    >
      Back
    </button>
  )}
  {questNum < questions.length - 1 && (
    <button
      type="button"
      className="rounded bg-[#88B92B] px-4 py-2 text-lg text-white hover:bg-green-600"
      onClick={() => {
        setQuestNum(questNum + 1);
        setBarWidth(barWidth + 100/questions.length);
      }}
    >
      Next
    </button>
  )}
  <br></br>
  {questNum === questions.length - 1 && (
    <div className="flex items-center justify-center">
      <motion.button
        type="submit"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded bg-green-500 px-6 py-5 text-lg text-white hover:bg-green-600"
        onClick={handleUserScore}
      >
        Finish!
      </motion.button>
    </div>
  )}
</form>

    </div>
  </motion.div>
</div>
:
<div></div>
}
</div>

        )
      }
}