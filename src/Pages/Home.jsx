import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import { Col, Row } from 'react-bootstrap'
import QuizResult from './QuizResult';
function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [clickedOption, setClickedOption] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const changeQuestion = ()=>{
      updateScore()
      if(currentQuestion<QuizData.length-1){
          setCurrentQuestion(currentQuestion+1)
          setClickedOption(0)
      }else{
          setShowResult(true)
      }
  }
  const updateScore = ()=>{
      if(clickedOption===QuizData[currentQuestion].answer){
          setScore(score+1)
      }
  }
  console.log(score);
  return (

    <div className='d-flex flex-column justify-content-center align-items-center w-100 '>
      {showResult ? (
        <QuizResult Score={score} totalScore={QuizData.length}/>
      ):(
        <>
      <div style={{ marginTop: '10%' }} className=' d-flex justify-content-center align-items-center w-100 '>
        <button style={{ width: '750px', background: 'none', color: 'black', fontSize: '18px' }} className='btn btn-lg btn-warning border-warning shadow'>
          <span>{currentQuestion+1}. </span>
          <span>{QuizData[currentQuestion].question}</span>
        </button>
      </div>
      <div style={{ marginTop: '5%' }} className='d-flex justify-content-center align-items-center w-100'>
        <Row style={{ marginLeft: '15%' }}>

          {
            QuizData[currentQuestion].options.map((options,i)=> {
              return (

                <Col xl={6} className='mt-5 '>
                  <button

                    style={{ width: '250px' }}
                    className={`btn btn-warning option-btn ${
                      clickedOption === i+1? "bg-danger text-white":null
                    }`}
                    key={i}
                    // className='btn btn-warning '

                    onClick={()=>setClickedOption(i+1)}>
                    {options}
                  </button>
                </Col>


              )
            })}
        </Row>
      </div>
      <button onClick={changeQuestion} style={{ width: '90px' }} className='btn btn-warning mt-5 shadow'>Next</button>
      </>
      )}
    </div>
  )
}

export default Home