import React, { useState } from 'react'

export default function Questions(props) {
  const[color, setColor]=useState('text-gray-400')
  const[encourage, setEncourage]=useState('Good luck')
  const[next, setNext]=useState('Next')
  
  
  function bg(){
    let numbers= Math.floor(Math.random()*5)
    if(numbers==0){
      setColor('text-gray-800')
    }else if(numbers==1){
      setColor('text-gray-800')
    }else if(numbers===2){
      setColor('text-gray-500')
    }else if(numbers===3){
      setColor('text-white')
    }else if(numbers===4){
      setColor('text-white')
    }
    if(props.questionNumber<=5){
      setEncourage('Good luck')
    }else if(props.questionNumber<8){
      setEncourage('Almost there')
    }else if(props.questionNumber>8){
      setEncourage('Good luck')
    }
  }

  function nextQuestion(){
    if(props.questionNumber===8){
      setNext('Finish Quiz')
    }else{
      setNext('Next')
    }
   
  }
  return (
    <div>
    <section className={`${props.displayGame} home bg-gray-300 h-screen py-16`}>
      <span>
        <h1 className={`md:text-5xl md:font-base font-black text-2xl myanimate ${color} capitalize`}>{encourage}</h1>
      </span>
     <div className='lg:mx-32 md:mx-10 rounded-lg mt-3 md:mt-12 bg-white shadow-lg'>
     <div className='flex items-center place-content-center py-12 gap-28'>
      <h1 className='text-center text-3xl font-semibold'>Question {props.questionNumber+1}of 10</h1>
      {/* <Options  animate='pulse'  /> */}
      </div>
      <h3 className='md:text-3xl text-center px-3 lg:py-4 font-semibold'>{props.questionType[props.questionNumber].question}</h3>
      <ul className='mx-auto'>
       {props.questionType[props.questionNumber].options.map((option) =>{
        return(
          <div key={option.id+1} className='flex place-content-center items-center cursor-pointer shadow-sm my-3'>
            <input className='p-3' value={option.id} onChange={props.handleChange} checked={props.id==option.id} key={option.id+2} name='answer' type='radio' />
            <li key={option.id} className='py-3 text-xl' >{option.text}</li>
          </div>
        )
       })}
       
      </ul>
      <span className="flex place-content-end cursor-pointer">
      <button onClick={()=>{props.change(),bg(),nextQuestion()}} className='rounded-tl-lg bg-blue-300 w-fit px-4 text-2xl font-semibold py-2 italic'>{next}</button>
      </span>
      </div>
      </section>
    </div>
  )
}
