import React, { useContext, useEffect, useState } from "react"
import { DemoContext } from "./DemoProvider"
import { SongContext } from "../songs/SongProvider"
import "./Demo.css"
import { useHistory, useParams } from 'react-router-dom';

export const DemoAddForm = () => {
    const { addDemo, getDemos, updateDemo, getDemoById } = useContext(DemoContext)
    const { songs, getSongs, getSongById } = useContext(SongContext)

    const [demo, setDemo] = useState({
        song: {},
        startDate: "",
        completionDateGoal: "",
        mixComplete: false,
        masterComplete: false,
        notes: ""
    });


    const { songId } = useParams()
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


    const handleCheckboxChange = (event) => {
        const newDemo = { ...demo }
        newDemo[event.target.id] = event.target.checked
        setDemo(newDemo)
    }

    // Add dependency on songs for if/then statement (see animalform)

    // Goal: make completion value be true or false (boolean)
    // if/then--
    // if checkbox is checked, then completion is true
    // if checkbox is not checked, then completion is false
    const handleSaveDemo = (event) => {


        if (demo.completionDateGoal === "" || demo.startDate === "" || demo.notes === "") {
            window.alert("Please add details of demo")
        } else {
            addDemo({
                songId: parseInt(songId),
                startDate: demo.startDate,
                completionDateGoal: demo.completionDateGoal,
                mixComplete: demo.mixComplete,
                masterComplete: demo.masterComplete,
                notes: demo.notes
            })
                .then(() => history.push("/demos"))
        }
    }

    //add mastercomplete, check if id needs to be more specific for demo vs song on completionDateGoal and startDate
    //possibly add if statement to have h3 of song title when on the edit demo page (delete edit demo title)
    //song.demoId ? edit demo : add a demo
    //change ERD so it's a 1-1 ratio, add demoId to song object
    //currently, edit demo is always showing up because there is a song id by default in the url
    //add song, edit song, delete song and edit demo are working; add demo is not
    return (
        <form className="demoForm">
            <h2 className="demoForm__title">Add A Demo</h2>

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
                    <input type="checkbox" className="checkbox" id="mixComplete" onChange={handleCheckboxChange} required autoFocus className="form-control" value={demo.mixComplete} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="masterComplete">Master Complete:</label>
                    <input type="checkbox" className="checkbox" id="masterComplete" onChange={handleCheckboxChange} required autoFocus className="form-control" value={demo.masterComplete} />
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
                Add Demo
            </button>
        </form>
    )
}


// useEffect(() => {
//     if (songId) {
//         getSongById(demoId).then(demo => {
//             setDemo(demo)
//             console.log(demo)
//         })
//     }
// }, [])

{/* <fieldset>
<div className="form-group">
    <label htmlFor="title">Demo Title:</label>
    <div>{demo.song.title}</div>
</div>
</fieldset> */}