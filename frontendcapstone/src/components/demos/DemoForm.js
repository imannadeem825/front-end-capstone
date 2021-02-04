import React, { useContext, useEffect, useState } from "react"
import { DemoContext } from "./DemoProvider"
import { SongContext } from "../songs/SongProvider"
import "./Demo.css"
import { useHistory, useParams } from 'react-router-dom';

export const DemoForm = () => {
    const { addDemo, getDemos, updateDemo, getDemoById } = useContext(DemoContext)
    const { songs, getSongs } = useContext(SongContext)

    const [demo, setDemo] = useState({
        songId: 0,
        song: {},
        startDate: "",
        completionDateGoal: "",
        mixComplete: "",
        masterComplete: "",
        notes: ""
    });


    const { demoId } = useParams()
    const history = useHistory();


    const handleControlledInputChange = (event) => {

        const newDemo = { ...demo }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newDemo[event.target.id] = selectedVal
        setDemo(newDemo)
    }

    useEffect(() => {
        if (demoId) {
            getDemoById(demoId).then(demo => {
                setDemo(demo)
            })
        }
    }, [])



    // Add dependency on songs for if/then statement (see animalform)

    // Goal: make completion value be true or false (boolean)
    // if/then--
    // if checkbox is checked (and task is removed from user visibility on DOM), then completion is true
    // if checkbox is not checked (and task is not removed), then completion is false
    const handleSaveDemo = (event) => {

        event.preventDefault()

        const songId = demo.songId

        if (demo.title === "" || demo.completionDateGoal === "" || demo.startDate === "" || demo.mixComplete === "" || demo.masterComplete === "" || demo.notes === "") {
            window.alert("Please add details of demo")
        } else {
            if (demoId) {
                //add songId?
                updateDemo({
                    id: demo.id,
                    startDate: demo.startDate,
                    completionDateGoal: demo.completionDateGoal,
                    mixComplete: demo.mixComplete,
                    masterComplete: demo.masterComplete,
                    notes: demo.notes
                })
                    .then(() => history.push(`/demos/detail/${demo.id}`))
            } else {
                addDemo({
                    title: demo.title,
                    startDate: demo.startDate,
                    completionDateGoal: demo.completionDateGoal,
                    mixComplete: demo.mixComplete,
                    masterComplete: demo.masterComplete,
                    notes: demo.notes
                })
                    .then(() => history.push("/demos"))
            }
        }
    }

    //add mastercomplete, check if id needs to be more specific for demo vs song on completionDateGoal and startDate
    //possibly add if statement to have h3 of song title when on the edit demo page (delete edit demo title)
    return (
        <form className="demoForm">
            <h2 className="demoForm__title">{demoId ? "Edit Demo" : "Add A Demo"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Demo Title:</label>
                    <div>{demo.song.title}</div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="text" id="startDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Date demo was started" value={demo.startDate} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="completionDateGoal">Completion Date Goal:</label>
                    <input type="text" id="completionDateGoal" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Ideal completion date" value={demo.completionDateGoal} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="mixComplete">Mix Complete:</label>
                    <input type="checkbox" className="checkbox" id="mixComplete" onChange={handleControlledInputChange} required autoFocus className="form-control" value={demo.mixComplete} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <textarea id="notes" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="List any production notes" value={demo.notes} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    handleSaveDemo()
                }}>
                {demoId ? "Save Demo" : "Add Demo"}
            </button>
        </form>
    )
}