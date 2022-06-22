import React from 'react'

const TeamCard = ({ name, teamMembers }) => {
  return (
    <div class="card col-sm" style={{width: "18rem"}}>
      <div class="card-header">
        {name}
      </div>
      <ul class="list-group list-group-flush">
        {teamMembers.map((name, index) => (
          <li key={index} class="list-group-item">{name}</li>
        ))}
      </ul>
    </div>






  )
}

export default TeamCard