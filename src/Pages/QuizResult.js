import React from 'react'
import { Link } from 'react-router-dom'

function QuizResult(props) {
    let score = props.Score
    let total= props.totalScore
  return (

    <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center w-100'>
        {
            score>3?(
                <>
                 <div className='text-center'>
        <img style={{width:'450px',height:'250px'}} src="https://i.gifer.com/origin/1a/1af8d3b487b77085d5288814f151e1de_w200.gif" alt="" />
        <h1 className='text-warning mt-3'>Congratulation</h1>
          <h5 style={{marginLeft:'8px'}}> Your Score : {score}/{total}</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='btn btn-warning fw-bold'>Back To Home </Link>
      </div>
                </>
            ):
            <>
             <div className='text-center'>
        <h1 className='text-danger mt-3'>You Fail</h1>
        <h6 className='text-warning'>Better Luck Next Time</h6>
          <h5 style={{marginLeft:'8px'}}> Your Score :{score}/{total}</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='btn btn-warning fw-bold mt-3'>Back To Home </Link>

      </div>
            </>
        }
     
        </div>
  )
}

export default QuizResult