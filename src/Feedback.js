import React, { useState } from 'react';
import './Feedback.css'

const Feedback = ({resources}) => {
  const [selected, setSelected] = useState(false)

  const emogiesSection = () => {
    const {emojis} = resources

    const buttonHandler = () => {
        setSelected((prevSelected) => !prevSelected)
    }
    return(
        <div className='app-container'>
            <div className='container'>
                <h1 className='head'>How satisfied are you with our customer support performance?</h1>
                <div className='emoji-container'>
                    {emojis.map(item=>(
                        <ul key={item.id} className=''>
                            <button onClick={buttonHandler} className='button-container'>
                                <img src = {item.imageUrl} alt={item.name} className='img-section'/> <br/>
                                {item.name}
                            </button>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
  }


  const thanksSection = () => {
    const {loveEmojiUrl} = resources
    return(
        <div className='emogi-content'>
          <div className='section-rows'>
            <img src={loveEmojiUrl} alt={loveEmojiUrl} className='love-emogi'/>
            <h1>Thank you</h1>
            <p>we will use your feedback to imporve our customer support<br/> performance</p>
          </div>
        </div>
    )
  }

  return (
    <div>
      {selected ? thanksSection() : emogiesSection()}
    </div>
  );
}

export default Feedback;
