import React, { useState } from 'react'
import gif from '../images/quiz.gif'
import { Fade } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function LandingPage() {
    const [open, setOpen] = useState(false);
    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{ marginTop: '8%'}}>
            <h3>QUIZTIME</h3>
            <img style={{ width: '450px' }} src={gif} alt="" />
            <div style={{ gap: '20px' }} className='d-flex justify-content-center align-items-center  '>
                <button onClick={() => setOpen(!open)} className='btn btn-warning fw-bold'>Instructions</button>
                
                <Link to={'/home'} style={{textDecoration:'none',color:'white'}} className='btn btn-warning fw-bold'>Get Start  <i class="fa-solid fa-brain"></i></Link>
            </div>
            <Fade in={open}>
                <div id="example-fade-text" className='mt-5'>
                    <ul style={{listStyle:'circle'}}>
                        <li>  You will be asked 10 questions one after another.</li>

                        <li> 10 points is awarded for the correct answer.</li>

                        <li> Each question has three options. You can choose only one options.</li>
                        <li> You can review and change answers before the quiz finish.</li>
                       <li>The result will be declared at the end of the quiz.</li>
                    </ul>
                </div>
            </Fade>
        </div>
    )
}

export default LandingPage