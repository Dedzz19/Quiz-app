import React, {useState } from 'react'
import general from './Compnents/Data'
import politics from './Compnents/Politics'
import Questions from './Questions'
import Result from './Result'
import sports from './Compnents/Sports'
import './styles.css'
export default function Quiz() {
  const[display, setDisplay]=useState('block')
  const[displayGame, setDisplayGame]=useState('hidden')
  const[quizType, setQuizType]=useState('general')
  const[result, setResult]=useState('hidden')
  const[sportsButtonColor, setSportsButtonColor]=useState('zinc')
  const[politicsButtonColor, setPoliticsButtonColor]=useState('zinc')
  const[generalButtonColor, setGeneralButtonColor]=useState('bg-blue-400')
  const[questionNumber,setQuestionNumber]=useState(0)
  const[questionType,setQuestionType]=useState(general)
  const[id,setId]=useState(0)
  const[score,setScore]=useState(0)
  const[attemptedQuestions, setAttemptedQuestions]=useState(0)


  function politicsCol(){
    setPoliticsButtonColor('blue')
    setGeneralButtonColor('bg-zinc-400')
    setSportsButtonColor('zinc')
    setQuizType('politics')
  }
  function sportsCol(){
    setPoliticsButtonColor('zinc')
    setGeneralButtonColor('bg-zinc-400')
    setSportsButtonColor('blue')
    setQuizType('sports')
  }
  function generalCol(){
    setPoliticsButtonColor('zinc')
    setGeneralButtonColor('bg-blue-400')
    setSportsButtonColor('zinc')
    setQuizType('general')
  }

 function change(){
  if(questionNumber<9){
    setQuestionNumber(questionNumber+1)
    setResult('hidden')
  }else{
    setResult('block')
    setDisplayGame('hidden')
  }
  if(id.valueOf()==1){
    setScore(score+1)
  }else if(id!=0){
    setAttemptedQuestions(attemptedQuestions+1)
  }
  setId(0)
  console.log(attemptedQuestions)
 }


 function handleChange(e){
    setId(e.target.value)
 }
 
  function startQuiz(){
    setDisplay('hidden')
    setDisplayGame('block')
  }

  function retakeQuiz(){
    setDisplay('block')
    setDisplayGame('hidden')
    setResult('hidden')
    setScore(0)
    setId(0)
    setQuestionNumber(0)
    setPoliticsButtonColor('zinc')
    setGeneralButtonColor('bg-blue-400')
    setSportsButtonColor('zinc')
    setQuizType('general')
    setAttemptedQuestions(0)
  }
 
  return (
    <div className=''>
      {/* Setting Quiz  */}
     <section className={` home ${display}  bg-gray-300 h-screen py-40`}>
     <h1 className='text-6xl font-semibold text-center '>Quiz</h1>
      <p className='text-4xl font-medium capitalize text-center'> Choose type of quiz</p>
      <div className='flex place-content-center gap-12 md:gap-24 mt-12'>
        <button onClick={()=>{setQuestionType(general),generalCol()}} className={`${generalButtonColor} text-xl rounded-xl px-4 py-2 `}>General</button >
        <button onClick={()=>{setQuestionType(politics),politicsCol()}} className={`bg-${politicsButtonColor}-400 text-xl rounded-xl px-4 py-2 `}>Politics</button>
        <button onClick={()=>{setQuestionType(sports),sportsCol()}} className={`bg-${sportsButtonColor}-400 text-xl rounded-xl px-4 py-2 hover:bg-blue-300`}>Sports</button>
      </div>
      <span className='flex place-content-center pt-12 '>
      <button className='text-xl rounded-xl bg-gray-300 px-4 py-2 hover:bg-blue-300' onClick={startQuiz}>Take Quiz</button>
      </span>
     </section>
     {/* Quiz */}
      <Questions  displayGame={displayGame} questionNumber={questionNumber} questionType={questionType}  change={change} handleChange={handleChange} id={id} score={score} />
      {/* Results */}
     <Result attemptedQuestions={attemptedQuestions} retakeQuiz={retakeQuiz} type={quizType} score={score} id={id} total={questionNumber+1} display={result}/>
    </div>
  )
}
