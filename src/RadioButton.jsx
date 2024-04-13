import React,{useEffect, useState} from 'react'

function RadioButton() {
   // const [option1, setOption1] = useState([])
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

    useEffect(() =>{
        const optionsData = []
        // questions[0].options.map(item =>{
            
        //     setOption1(...option1, {item})
         
        // })

    })

   
  return (
    <div>
     <h2>Pick a country </h2>
       <label>{questions[0].question}
       <br/>
       {questions[0].options.map((item,idx) =>{
          return (
            <> 
            <input key={idx} 
            type="radio"
            name="question1"
            value={item}
            id={idx}
            // checked={}
            />
            <label htmlFor={idx}>{item}</label>
            <br/>

            </>

          ) 

       })}
       </label>
       <br/>
      <h2>Question #2 </h2>
       <label>{questions[1].question}
       <br/>
       {questions[1].options.map((item,indx) =>{
          return (
            <> 
            <input key={indx} 
            type="radio"
            name="question2"
            value={item}
            id={indx}
            // checked={}
            />
            <label htmlFor={indx}>{item}</label>
            <br/>

            </>

          )

       })}

</label>







    </div>
  )
}

export default RadioButton