import CarbonCalc from "../../CarbonCalc"
import { useEffect, useState } from "react"
import axios from "axios";
import { motion } from 'framer-motion';

const API = import.meta.env.VITE_BASE_URL;

export default function DailyQuestions( { returningUser }) {

    const [loading, setLoading] = useState(true);
    const [questNum, setQuestNum] = useState(0);
    const [questions, setQuestions] = useState({})
    const [barWidth, setBarWidth] = useState(100/8);
    const [showQuest, setShowQuest] = useState(false)

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
            console.log(response.data);
            const dailyQuestions = response.data.slice(11);
            setQuestions(dailyQuestions);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }, []);
      
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };

      if (loading) {
        return <div>Loading...</div>;
    }
    

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
    <div className="bg-green-600 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
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
        if(questNum === 2 || questNum === 6){
            return (
            <div key={index}>
           <input
            type="range"
             min={0}
             max="100"
             value="40"
            className="w-80 h-2 bg-blue-500 rounded-lg"
            />
            </div>
            )
        } else {
        return(
            <div key={index}>
 <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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