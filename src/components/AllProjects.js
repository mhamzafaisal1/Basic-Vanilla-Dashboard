import React, { useEffect, useState } from 'react'
import DummyData from '../DummyData'
import TaskCard from './TaskCard'
import './AllProjects.css'
import Modal from './Modal'

const AllProjects = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

  }, [])

  return (

    <>
  <div className='header'>All Projects</div>


      <div class="container">
        <div>
        {DummyData.map((data, index) => (
          <TaskCard key={index} name={data.name} status={data.status} priority={data.priority} completed={data.completed} completionLevel={data.completionLevel} teamMembers={data.teamMembers} type={data.type} description={data.description} deadline={data.deadline} />
        ))}
        </div>
      </div>

      <div>
        <button className="primaryBtn" type="button" class="btn btn-primary" onClick={() => setIsOpen(true)}>
          Add New Project
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>
    </>
  )
}

export default AllProjects