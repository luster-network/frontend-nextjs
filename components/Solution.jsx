import React, {useState} from 'react'

import Content from "./Content"

const Solution = () => {
    const [content, setContent] = useState('Placement');

    const placementHandler = () => {
        setContent('Placement')
    }
    const mentorshipHandler = () => {
        setContent('Mentorship')
    }
    const experienceHandler = () => {
        setContent('Experience')
    }
    const learningHandler = () => {
        setContent('Learning')
    }
    const ecosystemHandler = () => {
        setContent('Ecosystem')
    }

    const clickButton = " border p-3 bg-gray-800 md:text-2xl my-2 rounded-xl mx-8"
    const unclickedButton = "border p-3 rounded-xl md:text-2xl my-2 hover:bg-gray-800 mx-8"

  return (
    <div className='mx-8 md:mx-24 border-white md:mt-[12rem] mb-24 pb-12'>
        <p className='text-6xl font-semibold text-center my-12'>Your one stop solution</p>

        <div className=' flex flex-row md:flex-col items-center justify-center '>

            <div className="flex flex-col md:flex-row justify-center items-center">
                <button className={`tab ${content==='Placement'? `${clickButton}` : `${unclickedButton}`}`} onClick={placementHandler}> Placement </button>
                <button className={`tab ${content==='Mentorship'? `${clickButton}` : `${unclickedButton}`}`} onClick={mentorshipHandler}> Mentorship </button>
                <button className={`tab ${content==='Experience'? `${clickButton}` : `${unclickedButton}`}`} onClick={experienceHandler}> Experience </button>
                <button className={`tab ${content==='Learning'? `${clickButton}` : `${unclickedButton}`}`} onClick={learningHandler}> Learning </button>
                <button className={`tab ${content==='Ecosystem'? `${clickButton}` : `${unclickedButton}`}`} onClick={ecosystemHandler}> Ecosystem </button>
            </div>
            
            <div className='mt-12'>
                <Content content={content} />
            </div>
        
        </div>
    </div>
  )
}

export default Solution