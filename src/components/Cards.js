import React from 'react'
import "./Cards.css";
const Cards = ({date,time,name}) => {
    let meetingtype;
    return (
      <div className='card'>
        <div className='cards'>
          <div className='card_avatar'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqwm3d3WRtydwtUx550VaHMMx9bQGCiTIHACRPtezkXnFxPCSkrXG0Rx2EC3jiyjAV1I1HdrcTyM&usqp=CAU&ec=48665701'
              alt='Avatar.jpg'
            />
          </div>
          <div className='card_detail'>
            <div className='card_avatar_name'>{name}</div>
            <div className='card_meeting_detail'>
              <img
                src='https://i.pinimg.com/originals/0b/d5/c7/0bd5c79a8b47e78e25bd1853d0ee5b60.png'
                alt=''
              />
              <div className='day card_meeting_details'>{date}</div>
              <div className='time card_meeting_details'>{time}</div>
            </div>
                </div>
                <button className='card_start_buttton'>Start</button>
        </div>
        <div className='card_cover'></div>
      </div>
    )
};

export default Cards