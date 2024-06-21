import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loding, resultData, setInput, input } = useContext(Context)
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <i class="fa-solid fa-circle-user"></i>
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hallo, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <i class="fa-regular fa-compass"></i>
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <i class="fa-regular fa-lightbulb"></i>
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <i class="fa-regular fa-message"></i>
                            </div>
                            <div className="card">
                                <p>Improve the readability od the following code</p>
                                <i class="fa-solid fa-code"></i>
                            </div>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <i class="fa-regular fa-circle-user"></i>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <i class="fa-brands fa-twitch"></i>
                            {loding 
                            ?
                            <div className="loader">  
                            <hr />
                            <hr />
                            <hr />
                            </div> 
                            :
                            <p dangerouslySetInnerHTML={{ __html:resultData }}></p>
                           }
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <i class="fa-regular fa-images"></i>
                            <i class="fa-solid fa-microphone"></i>
                            {input?<i onClick={() => onSent()} class="fa-regular fa-paper-plane"></i>:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, inclding about people,
                        so double-check its responses. Your privacy and Gwmini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;