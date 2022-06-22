import React, { useState } from 'react'
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import NameList from '../NameList';
import DummyData from '../DummyData';


const ModalTeam = ({ setIsOpen }) => {
    const [member1, setMember1] = useState('')
    const [member2, setMember2] = useState('')
    const [member3, setMember3] = useState('')
    const [member4, setMember4] = useState('')
    const [name, setName] = useState('')



    const addInfo = () => {
        setIsOpen(false);
        DummyData.push({
            teamMembers: [member1, member2, member3, member4],
            name: name,
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
                                    <div class="col-auto" style={{marginLeft: "42px"}}>
                                        <input onChange={(e) => setName(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Team Member #1</label>
                                    </div>
                                    <div class="col-auto">
                                        <input onChange={(e) => setMember1(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Team Member #2</label>
                                    </div>
                                    <div class="col-auto">
                                        <input onChange={(e) => setMember2(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Team Member #3</label>
                                    </div>
                                    <div class="col-auto">
                                        <input onChange={(e) => setMember3(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center">
                                    <div class="col-auto">
                                        <label for="inputPassword6" class="col-form-label">Team Member #4</label>
                                    </div>
                                    <div class="col-auto">
                                        <input onChange={(e) => setMember4(e.target.value)} id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.addBtn} onClick={() => addInfo()}>
                                Add
                            </button>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ModalTeam