import React, { useContext, useState } from 'react'
import './sidebar.css'
import { Context } from '../../context/Context'
const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const { onSent, prevPrompts, setRecentPeompt, newChat } = useContext(Context)
  const loadPrompt = async (prompt) =>{
    // setRecentPeompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className='sidebar'>
      <div className='top'>
        <i onClick={() => setExtended(prev => !prev)} class="fa-solid fa-bars menu"></i>
        <div onClick={()=> newChat()} className="new-chat">
          <i class="fa-solid fa-plus"></i>
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <i class="fa-regular fa-message"></i>
                  <p>{item.slice(0,18)}...</p>
                </div>
              )
            })}
          </div>
          : null
        }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <i class="fa-regular fa-circle-question"></i>
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <i class="fa-solid fa-clock-rotate-left"></i>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <i class="fa-solid fa-gear"></i>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}
export default Sidebar;