import React from 'react'
import DummyData from '../DummyData';
import ProgressBar from './ProgressBar';
import './Dashboard.css'





const Dashboard = () => {

  return (
    <>
      <div className='header'>Welcome Project Manager</div>
      <div style={{ paddingTop: "40px" }}>
        {DummyData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} name={item.name} completed={item.completed} priority={item.priority} status={item.status} />
        ))}
      </div>
    </>
  )
}

export default Dashboard