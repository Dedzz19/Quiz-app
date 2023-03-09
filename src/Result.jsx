import React, {useState} from 'react'
import Answers from './Answers'

export default function Result(props) {
  let total=props.score
  const score= (total/10)*100
  const[answers, setAnswers]=useState('hidden')
  const[hideAnswers,setHideAnswers]=useState('hidden')
  const[height,setHeight]=useState('h-screen')
  let politic=[
    {
      id:1,
      question:'Which animal is the symbol of the US Democratic Political Party?',
      options:[
        {text:'Donkey', correct:true, id:1},
        {text:'Monkey', correct:false, id:2},
        {text:'Eagle', correct:false, id:3},
        {text:'Horse', correct:false, id:4}      
      ]
    },
    {
      id:2,
      question:'Which British politician became Member of Parliament for Epping in October 1924?',
      options:[
        {text:'WINSTON CHURCHILL', correct:true, id:1},
        {text:'BORIS JOHNSON', correct:false, id:2},
        {text:'KEIR STARMER', correct:false, id:3},
        {text:'ED BALLS', correct:false, id:4}      
      ]
    },
    { id:3,
      question:'Bulent Ecevit was Prime Minister of which country from 1999 to 2002?',
      options:[
        {text:'Turkey', correct:true, id:1},
        {text:'Brazil', correct:false, id:2},
        {text:'Australia', correct:false, id:3},
        {text:'Mexico', correct:false, id:4}      
      ]
   },
   { id:4,
    question:'In defence, what does MIDAS stand for?',
    options:[
      {text:'Missile Defence Alarm System', correct:true, id:1},
      {text:'Missile Defence Alerting System', correct:false, id:2},
      {text:'Missile Disarming Alarm System', correct:false, id:3},
      {text:'Multiplication Division Addition and Subtraction', correct:false, id:4}      
    ]
  },
  { id:5,
    question:'Who was the first US President to be born in a hospital?',
    options:[
      {text:'Jimmy Carter', correct:true, id:1},
      {text:'John F. Kennedy', correct:false, id:2},
      {text:'Herbert Hoover', correct:false, id:3},
      {text:'Grover Cleveland', correct:false, id:4}      
    ]
  },
  { id:6,
    question:'Which British Prime Minister introduced income tax, to help offset a reduction in revenue caused by a decline in trade?',
    options:[
      {text:'William Pitt the Younger', correct:true, id:1},
      {text:'David Cameron', correct:false, id:2},
      {text:'James Callaghan', correct:false, id:3},
      {text:'Harold Wilson', correct:false, id:4}      
    ]
  },
  { id:7,
    question:'Which state was George W Bush governor of before becoming President of the United States?',
    options:[
      {text:'Texas', correct:true, id:1},
      {text:'California', correct:false, id:2},
      {text:'Virginia', correct:false, id:3},
      {text:'Georgia', correct:false, id:4}      
    ]
  },
  { id:8,
    question:'What did Theresa May claim was the naughtiest thing she had done as a child in a 2017 interview?',
    options:[
      {text:'Ran through fields of wheat', correct:true, id:1},
      {text:'Joined a rock Band', correct:false, id:2},
      {text:'Flashed a cab driver', correct:false, id:3},
      {text:'Joined a strip club', correct:false, id:4}      
    ]
  },
  { id:9,
    question:`Where did Richard Nixon hold his famous "I'm Not a Crook" press conference?`,
    options:[
      {text:'The Contemporary Resort at Disney World, Florida', correct:true, id:1},
      {text:'The Westin Palace,Madrid', correct:false, id:2},
      {text:'One Great George Street', correct:false, id:3},
      {text:'The Waldorf Astoria New York', correct:false, id:4}      
    ]
  },
  { id:10,
    question:'How long is a French President elected for?',
    options:[
      {text:'Five Years', correct:true, id:1},
      {text:'Four Years', correct:false, id:2},
      {text:'Three Years', correct:false, id:3},
      {text:'Two Years', correct:false, id:4}      
    ]
  }
  ]
  let sport=[
    {
      id:1,
      question:"What’s the diameter of a basketball hoop in inches?",
      options:[
        {text:'18 Inches', correct:true, id:1},
        {text:'12 Inches', correct:false, id:2},
        {text:'15 Inches', correct:false, id:3},
        {text:'13 Inches', correct:false, id:4}
      ]
    },
    {
      id:2,
      question:'How long is a marathon?',
      options:[
        {text:'42.195 kilometres (26.2 miles)', correct:true, id:1},
        {text:'40 kilometres (24.9 miles)', correct:false, id:2},
        {text:'27 kilometres (16.8 miles)', correct:false, id:3},
        {text:'30 kilometres (18.6 miles)', correct:false, id:4}
      ]
    },
    {
      id:3,
      question:' How many players are there on a baseball team?',
      options:[
        {text:'9 players', correct:true, id:1},
        {text:'11 players', correct:false, id:2},
        {text:'5 players', correct:false, id:3},
        {text:'7 players', correct:false, id:4}
      ]
    },
    {
      id:4,
      question:'Which country won the World Cup 2018?',
      options:[
        {text:'France', correct:true, id:1},
        {text:'Italy', correct:false, id:2},
        {text:'Germany', correct:false, id:3},
        {text:'Croatia', correct:false, id:4}
      ]
    },
    {
      id:5,
      question:'What sport is considered the “king of sports”?',
      options:[
        {text:'Soccer', correct:true, id:1},
        {text:'Long Tennis', correct:false, id:2},
        {text:'Basketball', correct:false, id:3},
        {text:'Golf', correct:false, id:4}
      ]
    },
    {
      id:6,
      question:'What are the two national sports of Canada?',
      options:[
        {text:'Lacrosse and ice hockey', correct:true, id:1},
        {text:'ice hockey and basketball', correct:false, id:2},
        {text:'basketball and football', correct:false, id:3},
        {text:'basketball and soccer', correct:false, id:4}
      ]
    },
    {
      id:7,
      question:'What team won the first NBA game in 1946?',
      options:[
        {text:'The New York Knicks', correct:true, id:1},
        {text:'Washington Capitols', correct:false, id:2},
        {text:'Boston Celtics', correct:false, id:3},
        {text:'Golden state Warriors', correct:false, id:4}
      ]
    },
    {
      id:8,
      question:'What is Muhammad Ali’s real name?',
      options:[
        {text:'Cassius Clay', correct:true, id:1},
        {text:'Joseph Louis Barrow', correct:false, id:2},
        {text:'Charlie Cooper', correct:false, id:3},
        {text:'Christian Connor', correct:false, id:4}
      ]
    },
    {
      id:9,
      question:'For which team did Michael Jordan spend most of his career playing?',
      options:[
        {text:'Chicago Bulls', correct:true, id:1},
        {text:'Washington Wizards', correct:false, id:2},
        {text:'Los Angels Lakers', correct:false, id:3},
        {text:'Phoenix Suns', correct:false, id:4}
      ]
    },
    {
      id:10,
      question:'What do you call it when a bowler makes three strikes in a row?',
      options:[
        {text:'Turkey', correct:true, id:1},
        {text:'Ace', correct:false, id:2},
        {text:'Bowl', correct:false, id:3},
        {text:'Strike', correct:false, id:4}
      ]
    }
  ]
  let data=
[
  {
    id:1,
    question:'What is the largest planet in our solar system?',
    options:[
    {text:'Jupiter', correct:true, id:1},
    {text:'Saturn', correct:false, id:2},
    {text:'Venus' , correct:false, id:3},
    {text:'Neptune' , correct:false, id:4}
    ]
  },
  {
    id:2,
    question:'What is the capital city of Canada?',
    options:[
    {text:'Ottawa', correct:true, id:1},
    {text:'Toronto', correct:false, id:2},
    {text:' Vancouver', correct:false, id:3},
    {text:'Montreal', correct:false, id:4}
    ]
  },
  {
    id:3,
    question:'Who wrote the novel "Prcorrecte and Prejudice"?',
    options:[
    {text:'Jane Austen', correct:true, id:1},
    {text:'Charles Dickensv', correct:false, id:2},
    {text:' Mark Twain', correct:false, id:3},
    {text:' Emily Bronte', correct:false, id:4}
    ]
    
  },
  {
    id:4,
    question:'Which planet in our solar system is the hottest?',
    options:[
        {text:'Venus', correct:true, id:1},
        {text:'Mercury' , correct:false, id:2},
        {text:'Mars' , correct:false, id:3},
        {text:'Jupiter', correct:false, id:4}
    ]
    
  },
  {
    id:5,
    question:'Which country is home to the Great Barrier Reef?',
    options:[
        {text:'Australia' , correct:true, id:1},
        {text:'Brazil' , correct:false, id:2},
        {text:'Canada' , correct:false, id:3},
        {text:'China', correct:false, id:4}
    ]
  
  },
  {
    id:6,
    question:'Who was the first person to walk on the moon?',
    options:[
      {text:'Neil Armstrong', correct:true, id:1},
      {text:'Buzz Aldrin', correct:false, id:2}, 
      {text:'Alan Shepard', correct:false, id:3},
      {text:'John Glenn', correct:false, id:4}
    ]
    
  },
  {
    id:7,
    question:'What is the smallest country in the world?',
    options:[
       {text:'Vatican City', correct:true, id:1},
      {text:'Monaco', correct:false, id:2},
      {text:'San Marino' , correct:false, id:3},
      {text:'Liechtenstein', correct:false, id:4}
    ]
  },
  {
    id:8,
    question:'Who is the current Prime Minister of the United Kingdom?',
    options:[
    {text:' Boris Johnson', correct:true, id:1},
    {text:'Theresa May', correct:false, id:2},
    {text:'Davcorrect Cameron', correct:false, id:3},
    {text:'Tony Blair', correct:false, id:4}      
    ]
  },
  {
    id:9,
    question:'Who painted the Mona Lisa?',
    options:[
    {text:'Leonardo da Vinci', correct:true, id:1},
    {text:'Michelangelo', correct:false, id:2},
    {text:'Vincent van Gogh', correct:false, id:3},
    {text:'Pablo Picasso', correct:false, id:4}
    ] 
  },
  {
    id:10,
    question:'In what year dcorrect the first iPhone launch?',
    options:[
      {text:'false, id:2007', correct:true, id:1},
      {text:'false, id:2005', correct:false, id:2},
      {text:'false, id:2009', correct:false, id:3},
      {text:'false, id:20true', correct:false, id:4}
    ]
  }
]
  const [questionType,setQuestionType]=useState(data) 
  const type=props.type
  function answer(){
    if(type==='sports'){
      setQuestionType(sport)
    }else  if(type=='politics'){
      setQuestionType(politic)
    }else  if(type=='general'){
      setQuestionType(data)
    }
  }

  return (
    <div className={`pt-12 ${height} capitalize gradient ${props.display}`}>
      <h1 className='text-center text-6xl font-bold my-8'>Results</h1>
      <h3 className='text-3xl text-gray-700 font-semibold text-center mb-3'>Quiz taken {props.type}</h3>
      <h1 className='text-xl capitalize text-gray-700 font-semibold text-center mb-3'>{total} of  {props.attemptedQuestions} attempted</h1>
      <h1 className='text-center font-bold text-4xl'>{score}% of 100%</h1>
      <span className='flex items-center text-white place-content-center gap-24 mt-3'>
        <button onClick={()=>
          {setAnswers('block'), setHideAnswers('block'),answer(),setHeight('h-max')
        }} 
          
          >View Answers</button>
        <button className={`${hideAnswers}`} onClick={()=>{setAnswers('hidden'),setHeight('h-screen'),setHideAnswers('hidden')}}>Hide answers</button>
      </span>
      <Answers type={props.type} questionType={questionType} display={answers} />
      <div className='flex place-content-end p-4'>
        <button onClick={props.retakeQuiz} className='bg-gray-800 text-white px-3 py-1 rounded'>Retake quiz</button>
      </div>
    </div>
  )
}
