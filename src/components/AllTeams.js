import React, { useState, useEffect } from 'react'
import DummyData from '../DummyData'
import TeamCard from './TeamCard'
import ModalTeam from './ModalTeam'

const AllTeams = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

    }, [])
    return (
        <>
            <div className='header'>All Teams</div>

            <div class="container">
                <div class='row'>
                    {DummyData.map((data, index) => (
                        <TeamCard key={index} name={data.name} priority={data.priority} completed={data.completed} completionLevel={data.completionLevel} teamMembers={data.teamMembers} type={data.type} description={data.description} deadline={data.deadline} />
                    ))}
                </div>
            </div>
            <div>
                <button className="primaryBtn" type="button" class="btn btn-primary" onClick={() => setIsOpen(true)}>
                    Create New Team
                </button>
                {isOpen && <ModalTeam setIsOpen={setIsOpen} />}
            </div>
        </>
    )
}

export default AllTeams