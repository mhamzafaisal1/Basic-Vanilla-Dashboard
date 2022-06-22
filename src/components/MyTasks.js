import React, { useEffect, useState } from 'react'
import DummyData from '../DummyData'
import ManagerTaskCard from './ManagerTaskCard'
import ModalManager from './ModalManager'


const MyTasks = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

  }, [])
  return (

    <>
      <div className='header'>My Tasks</div>
      <div class="container">
        <div>
          {DummyData.map((data, index) => (
            <ManagerTaskCard key={index} status={data.status} name={data.name} completionLevel={data.completionLevel} description={data.description} teamMembers={data.teamMembers} />
          ))}
        </div>
      </div>
      <div>
        <button className="primaryBtn" type="button" class="btn btn-primary" onClick={() => setIsOpen(true)}>
          Create New Task
        </button>
        {isOpen && <ModalManager setIsOpen={setIsOpen} />}
      </div>
    </>
  )
}

export default MyTasks