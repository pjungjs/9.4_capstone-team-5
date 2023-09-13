import { useState, useEffect, useContext } from "react"
import axios from "axios"

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

    return (
        <div>
            "hello"
        </div>
    )
}