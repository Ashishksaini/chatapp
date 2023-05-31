import React, { useEffect } from 'react'
import { useState } from 'react';
import Cards from '../components/Cards';
import './Todo.css'
import Footer from '../components/Footer';
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import { TabScrollButton } from '@mui/material'
const Todo = () => {
    const data = [
      { date: '2023-05-31', time: '12:00', name: 'Aman Parashar' },
      { date: '2023-06-31', time: '13:50', name: 'Tom Schmedtmann' }
    ]
    const [val, setval] = useState(data);
    const [valid, setvalid] = useState(false);
    useEffect(() => {
        document.querySelector('.name').value = "";
        document.querySelector('.date_time').value = "";
    }, [val,valid]);
    let addCard = (e) => {

        let cardadder = document.querySelector('.cardAdder');
        cardadder.classList.remove("hidden");
        let cardx = document.querySelector('.todo_meetings');
        cardx.classList.add("hidden");
        document.querySelector('.todo_card_add').classList.add('hidden');
        
    }
    let handleAdd = (e) => {
        let d=document.querySelector('.name').value;
        let t = document.querySelector('.date_time').value;
        if (d.length == 0 || t.length == 0 ) { 
            alert("Enter valid data");
            setvalid(!valid);
            return;
        };
        const nCard = {
            date: t.substr(0, 10),
            time: t.substr(11),
            name: d
        };
        setval([nCard,...val]);
        document.querySelector('.cardAdder').classList.add('hidden');
        document.querySelector('.todo_meetings').classList.remove('hidden');
        document.querySelector('.todo_card_add').classList.remove('hidden');
    }
    return (
      <div className='todo'>
        <div className='todo_nav'>
          <span className='todo_nav_message'>
            <b>Chat & Meeting</b>
          </span>
          <div className='todo_nav_icons'>
            <button className='todo_nav_icon'>
              <NotificationsIcon />
            </button>
            <button className='todo_nav_icon'>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className='todo_meeting_options'>
          <button className='todo_meeting_option'>1 on 1</button>
          <button className='todo_meeting_option'>Team</button>
        </div>
        <div className='todo_meetings'>
          {/* <TabScrollButton/> */}
                {val.map((e) => {
                    // console.log(e);
            return <Cards {...e} ></Cards>
          })}
        </div>
        <div className='todo_card_add'>
          <button className='todo_card_add_button' onClick={addCard}>+</button>
            </div>
            {/* cardAdder */}
            <div className="cardAdder hidden">
                <div className="cardAdder_cover"></div>
                <div className='cardAdder_content'>
                <div> Name   : <input type="text" autoComplete='on'  className="name"/></div>
                <div>
                 Venue    : <input type="datetime-local" className='date_time'/>
                </div>
                    <button className='addCard' onClick={handleAdd}>Add</button>
                </div>
            </div>
        <div className='todo_footer'>
          <Footer />
        </div>
      </div>
    )
}

export default Todo;