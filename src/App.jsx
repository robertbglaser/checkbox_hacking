import { useEffect, useState } from 'react'
import RadioButton from './RadioButton'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [question1, setQuestion1] =useState('')
  const [question2, setQuestion2] =useState('')
  const [question1Answer, setQuestion1Answer] = useState('')
  const [question2Answer, setQuestion2Answer] = useState('')
  const [option1, setOption1] = useState([])

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  const style = {
    container: {
      padding: '20px',
      border: '1px solid #E0E0E0',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    question: {
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    options: {
      marginBottom: '5px',
    },
    button: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: '#007BFF',
      color: '#FFF',
      fontSize: '14px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    feedback: {
      marginTop: '10px',
      fontSize: '14px',
    },
  };

useEffect(() =>{
setQuestion1(questions[0].question)
setQuestion2(questions[1].question)

  
 },[])


const handleClick=() =>{
 
  const answerQuestion1 = questions[0].correct
  const answerQuestion2 = questions[1].correct

   if(question1Answer === answerQuestion1 & question2Answer === answerQuestion2  ){
    console.log("The correct answer is selected")
  }
  else {console.log("An incorrect answer is selected")}
  
}
  return (
    <>


   
<div style={style.container}>
      <div id="question" style={style.question}>
      <h2>Pick the correct answer </h2>
       <label>{question1}</label>
       <div style={style.options}>
       {questions[0].options.map((item,idx) =>{
          return (
            <> 
            <input key={item}
            style={style.optons}
            type="radio"
            name="question1"
            value={item}
            id={idx}
            // checked={}
            onChange={(e) =>{setQuestion1Answer(e.target.value)}}
            />
            <label htmlFor={idx}>{item}</label>
            <br/>

            </>

          ) 

       })}
       
</div>
       <br/>
      <h2>Question #2 </h2>
       <label>{question2}</label>
       <br/>
       {questions[1].options.map((item1,indx) =>{
          return (
            <> 
            <input key={item1} 
            type="radio"
            style={style.option}
            name="question2"
            value={item1}
            id={indx}
            // checked={}
            onChange={(e) =>{setQuestion2Answer(e.target.value)}}
            />
            <label htmlFor={indx}>{item1}</label>
            <br/>

            </>

          )

       })}
      </div>
      <div style={style.options}></div>
      
      <button style={style.button} id="submitBtn" onClick={handleClick}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}></div>
    </div>
    </>
  );
}


export default App
