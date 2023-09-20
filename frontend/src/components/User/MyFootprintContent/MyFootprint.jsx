import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

ChartJS.register( ArcElement, Tooltip, Legend );



const API = import.meta.env.VITE_BASE_URL

export default function MyFootprint() {

    const [answers, setAnswers] = useState({})

    useEffect(() => {
        axios.get(`${API}/users/answers`)
        
            .then((res) => {
                console.log(res.data);
                setAnswers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const data = {
        labels: ['One', 'Two', 'Three'],
        datasets: [
            {
                data: [3, 6, 9],
                backgroundColor: ['aqua', 'yellow', 'purple']
            }
            
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
          }
        }
    }

    return (
        <div>
            <div
            style={
                {
                    padding: '20px',
                    width: '30%'
                }
            }>
                <Pie
                data={data}
                options={options}
                >

                </Pie>
            </div>
        </div>
    )
}

