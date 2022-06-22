import React, { useState } from 'react'
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import NameList from '../NameList';
import DummyData from '../DummyData';


const ModalManager = ({ setIsOpen }) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [deadline, setDeadline] = useState('')
    const [teamMembers, setTeamMembers] = useState([''])



    const addInfo = () => {
        setIsOpen(false);
        DummyData.push({
            name: name,
            priority: priority,
            type: type,
            description: description,
            deadline: deadline,
            teamMembers: teamMembers,
        })
    }

    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Create New Team</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine />
                    </button>
                    <div className={styles.modalContent}>
                        <form >
                            <div class="dropdown" style={{ textAlign: "right" }}>
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Team Members Available
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {NameList.map((data, index) => (
                                        <li key={index} class="dropdown-item">{data}</li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ marginLeft: "20px" }}>
                                <h4 style={{ textAlign: "left" }}>Please Type in the Member Names And Task</h4>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Task Name</label>
                                    </div>
                                    <div class="col-auto" style={{ marginLeft: '028px' }}>
                                        <input onChange={(e) => setName(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Type</label>
                                    </div>
                                    <div class="col-auto" style={{ marginLeft: '65px' }} >
                                        <input onChange={(e) => setType(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Description</label>
                                    </div>
                                    <div class="col-auto" style={{ marginLeft: '23px' }}>
                                        <input onChange={(e) => setDescription(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Team Members</label>
                                    </div>
                                    <div class="col-auto" style={{ marginLeft: '0px' }}>
                                        <input onChange={(e) => setTeamMembers(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>

                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Priority</label>
                                    </div>
                                    <div class="col-auto" style={{ marginLeft: '51px' }}>
                                        <input onChange={(e) => setPriority(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center" style={{ marginBottom: "40px" }}>
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Deadline</label>
                                    </div>
                                    <div class="col-auto" style={{ marginLeft: '40px' }}>
                                        <input onChange={(e) => setDeadline(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>

                            <button
                                className={styles.addBtn}
                                onClick={() => addInfo()}
                                style={{ margin: 0 }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ModalManager