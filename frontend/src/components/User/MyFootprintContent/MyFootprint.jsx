import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement,
  LinearScale,
);

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function MyFootprint({ currentUser }) {
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  const categorizedAnswers = {
    lifestyle: [],
    diet: [],
    transportation: [],
    spending: [],
    energy: [],
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/answers/${currentUser.user_auth_id}`)
      .then((response) => {
        // console.log(response.data);
        setAnswers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const questionKeys = Object.keys(answers.question_answers);

  const separateAnswers = () => {
    questionKeys.forEach((key) => {
      const question = key;
      const answer = answers.question_answers[key];

      if (question.includes('car')) {
        categorizedAnswers.transportation.push({ question, answer });
      } else if (question.includes('cooking')) {
        categorizedAnswers.energy.push({ question, answer });
      } else if (question.includes('renewable energy')) {
        categorizedAnswers.energy.push({ question, answer });
      } else if (question.includes('heating source')) {
        categorizedAnswers.energy.push({ question, answer });
      } else if (question.includes('public transportation')) {
        categorizedAnswers.transportation.push({ question, answer });
      } else if (question.includes('large sized appliances')) {
        categorizedAnswers.spending.push({ question, answer });
      } else if (question.includes('small sized appliances')) {
        categorizedAnswers.spending.push({ question, answer });
      } else if (question.includes('medium sized appliances')) {
        categorizedAnswers.spending.push({ question, answer });
      } else if (question.includes('clothing')) {
        categorizedAnswers.spending.push({ question, answer });
      } else if (question.includes('diet')) {
        categorizedAnswers.diet.push({ question, answer });
      } else {
        categorizedAnswers.lifestyle.push({ question, answer });
      }
    });
  };

  separateAnswers();

  let energyPercentage = 0;
  let transportationPercentage = 0;
  let spendingPercentage = 0;
  let lifestylePercentage = 0;
  let dietPercentage = 0;

  console.log(categorizedAnswers);

  const calculatePercentage = () => {
    if (categorizedAnswers.energy[0]?.answer === true) {
      energyPercentage += 1;
    }
    if (categorizedAnswers.energy[1]?.answer === 'no') {
      energyPercentage += 10;
    }
    if (categorizedAnswers.energy[2]?.answer === 'electricity') {
      energyPercentage += 13;
    } else if (categorizedAnswers.energy[2]?.answer === 'naturalGas') {
      energyPercentage += 10;
    }
    if (categorizedAnswers.transportation[1]?.answer === 'gasoline') {
      transportationPercentage += 11;
    } else if (categorizedAnswers.transportation[1]?.answer === 'diesel') {
      transportationPercentage += 11;
    } else if (categorizedAnswers.transportation[1]?.answer === 'hybrid') {
      transportationPercentage += 9;
    }

    transportationPercentage +=
      categorizedAnswers.transportation[2]?.answer * 0.2;

    spendingPercentage += categorizedAnswers.spending[0]?.answer * 2;
    spendingPercentage += categorizedAnswers.spending[1]?.answer * 0.3;
    spendingPercentage += categorizedAnswers.spending[2]?.answer;

    const totalPercentage =
      energyPercentage + transportationPercentage + spendingPercentage;

    const scaleFactor = 100 / totalPercentage;

    energyPercentage *= scaleFactor;
    transportationPercentage *= scaleFactor;
    spendingPercentage *= scaleFactor;

    energyPercentage = Math.round(energyPercentage);
    transportationPercentage = Math.round(transportationPercentage);
    spendingPercentage = Math.round(spendingPercentage);
  };

  calculatePercentage();

  const segmentColors = ['aqua', 'yellow', 'purple', 'blue', 'red'];

  const calculateChartData = () => {
    const data = {
      labels: ['Energy', 'Transportation', 'Spending', 'Diet', 'Lifestyle'],
      datasets: [
        {
          data: [],
          backgroundColor: segmentColors,
        },
      ],
    };

    const categoryPercentages = [
      energyPercentage,
      transportationPercentage,
      spendingPercentage,
      lifestylePercentage,
      dietPercentage,
    ];

    data.datasets[0].data = categoryPercentages;

    return data;
  };

  const data = calculateChartData();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },
  };

  let biggestImpact = 0;
  let biggestImpactLabel = '';
  let tips = [
    {
      Energy: [
        'Switch to energy effictient appliances.',
        'Make sure appliances like your computer and television are really off when you turn them off.',
        'Lower your thermostat as much as you can tolerate.',
      ],
    },
  ];
  const calculateBiggestImpact = () => {
    const percentages = [
      energyPercentage,
      transportationPercentage,
      spendingPercentage,
      lifestylePercentage,
      dietPercentage,
    ];
    const labels = [
      'Energy',
      'Transportation',
      'Spending',
      'Lifestyle',
      'Diet',
    ];

    for (let i = 0; i < percentages.length; i++) {
      if (percentages[i] > biggestImpact) {
        biggestImpact = percentages[i];
        biggestImpactLabel = labels[i];
      }
    }
    // console.log(biggestImpact, biggestImpactLabel);
  };

  calculateBiggestImpact();
  const tipsForBiggestImpact = tips.find((tip) => tip[biggestImpactLabel]);

  const data2 = {
    labels: ['Mon', 'Tues', 'Wed'],
    datasets: [
      {
        label: '100',
        data: [3, 6, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: '100',
        data: [3, 3, 3],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const options2 = {};

  return (
    <div className="flex items-center justify-center">
      <div className="w-full overflow-auto p-4 shadow-md">
        <div>
          <span className="text-xl py-2 font-semibold">This is the breakdown of your Carbon Score</span>
          <div className="relative flex h-64 w-64 items-center">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 mt-20 flex items-center justify-center">
              {Math.round(answers.carbon_emission_result / 52)}
            </div>
            <Bar data={data2} options={options2}></Bar>
          </div>
          <div>
            According to your answers, you produce an estimated{' '}
            {Math.round(answers.carbon_emission_result / 365)} pounds of CO2 on
            a daily basis. The biggest factor in your carbon emissions is{' '}
            {biggestImpactLabel}.
          </div>
          <div>
            <br />
            <br />
            Here are some tips on how to improve:
          </div>
          <ul className="ml-6 mt-2 list-disc">
            {tipsForBiggestImpact &&
              tipsForBiggestImpact[biggestImpactLabel].map((tip, index) => (
                <li key={index} className="italic">
                  {tip}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
