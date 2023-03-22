import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Bank1() {
    const [count, setcount] = useState(0)
    const navigate = useNavigate()
    const[score , setscore]=useState(0)
    const questions = [
        {
            question: "Q1:What is the capital city of France?",
            a: "Madrid",
            b: "Paris",
            c: "Rome",
            d: "Berlin",
            answer: "b"
        },
        {
            question: "Q2:Which planet is closest to the Sun?",
            a: "Venus",
            b: "Mars",
            c: "Mercury",
            d: "Jupiter",
            answer: "c"
        },
        {
            question: "Q3:Who invented the telephone?",
            a: "Alexander Graham Bell",
            b: "Thomas Edison",
            c: "Nikola Tesla",
            d: "Albert Einstein",
            answer: "a"
        },
        {
            question: "Q4:What is the largest animal in the world?",
            a: "Giraffe",
            b: "Elephant",
            c: "Blue whale",
            d: "Hippopotamus",
            answer: "c"
        },
        {
            question: "Q5:What is the capital city of Australia?",
            a: "Sydney",
            b: "Melbourne",
            c: "Canberra",
            d: "Brisbane",
            answer: "c"
        },
        {
            question: "Q6:Who painted the Mona Lisa?",
            a: "Pablo Picasso",
            b: "Leonardo da Vinci",
            c: "Vincent van Gogh",
            d: "Michelangelo",
            answer: "b"
        },
        {
            question: "Q7:What is the largest country in the world?",
            a: "Canada",
            b: "United States",
            c: "Russia",
            d: "China",
            answer: "c"
        },
        {
            question: "Q8:Which is the tallest mammal?",
            a: "Elephant",
            b: "Giraffe",
            c: "Hippopotamus",
            d: "Rhino",
            answer: "b"
        },
        {
            question: "Q9:What is the smallest continent?",
            a: "Europe",
            b: "Africa",
            c: "Australia",
            d: "Asia",
            answer: "c"
        },
        {
            question: "Q10:Who wrote the play 'Hamlet'?",
            a: "William Shakespeare",
            b: "George Bernard Shaw",
            c: "Oscar Wilde",
            d: "Samuel Beckett",
            answer: "a"
        }
    ]


    function next(e) {
        e.preventDefault()
        if (count == 9) {
            navigate('/Score')
        }
        else {
            setcount(count + 1)
        }
    }

    function select(e) {
        const answer = e.target.value
        const canswer = questions[count].answer
        if(answer==canswer){
            setscore(score+1)
            console.log(score)


        }
    }



    return (
        <div>
            <h3>{questions[count].question}</h3>
            <ul>
                <li>

                    <input type="radio" name='quiz' id='option1' value='a' onChange={select}></input><label htmlFor="option1" id='option1'>{questions[count].a}</label><br /></li>
                <li>
                    <input type="radio" name='quiz' id='option2' value='b' onChange={select}></input> <label htmlFor="option2" id='option2'>{questions[count].b}</label><br /></li>
                <li>
                    <input type="radio" name='quiz' id='option3' value='c' onChange={select}></input><label htmlFor="option3" id='option3'>{questions[count].c}</label><br /></li>
                <li>
                    <input type="radio" name='quiz' id='option4' value='d' onChange={select}></input><label htmlFor="option4" id='option4'>{questions[count].d}</label><br /></li>
            </ul>
            <button type='submit' onClick={next}>Next</button>


        </div>
    )
}

export default Bank1
