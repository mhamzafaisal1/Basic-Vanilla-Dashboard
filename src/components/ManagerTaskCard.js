import React from 'react'

const ManagerTaskCard = ({ name, completionLevel, teamMembers,description, status }) => {



    return (
        <div class="card col-sm" style={{ width: "30rem", height: "10rem" }}>
            <ul style={{ paddingLeft: 0, margin: 0, }}>
                <li class="list-group-item list-group-item-action list-group-item-primary">Name : {name}</li>
                <li class="list-group-item list-group-item-action list-group-item-secondary">Status : {status}</li>
                <li class="list-group-item list-group-item-action list-group-item-danger">Description : {description}</li>
                <li class="list-group-item list-group-item-action list-group-item-warning">Completion Level : {completionLevel}</li>
                <li class="list-group-item list-group-item-action list-group-item-info">Team Members :{teamMembers.map((item) => (
                    item + ", "
                ))}</li>


            </ul>
        </div>
    )
}

export default ManagerTaskCard