import React, { useContext, useEffect, useState } from "react"
import { DemoContext } from "./DemoProvider"
import "./Demo.css"
import { useHistory, useParams } from 'react-router-dom';



export const DemoEditForm = () => {

    const { updateDemo, getDemoById } = useContext(DemoContext)
    const { demoId } = useParams()
    const history = useHistory();


    const [demo, setDemo] = useState({
        song: {},
        startDate: "",
        completionDateGoal: "",
        mixComplete: false,
        masterComplete: false,
        notes: ""
    });


    const handleControlledInputChange = (event) => {

        const newDemo = { ...demo }
        let selectedVal = event.target.value
        console.log("checkbox", selectedVal)

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


    useEffect(() => {
        if (demoId) {
            getDemoById(demoId).then(demo => {
                setDemo(demo)

            })
        }
    }, [])


    const handleSaveDemo = (event) => {

        if (demo.title === "" || demo.completionDateGoal === "" || demo.startDate === "" || demo.mixComplete === "" || demo.masterComplete === "" || demo.notes === "") {
            window.alert("Please add details of demo")
        } else {
            updateDemo({
                id: demo.id,
                songId: demo.songId,
                startDate: demo.startDate,
                completionDateGoal: demo.completionDateGoal,
                mixComplete: demo.mixComplete,
                masterComplete: demo.masterComplete,
                notes: demo.notes
            })
                .then(() => history.push(`/demos/detail/${demo.id}`))
        }
    }


    return (
        <form className="demoForm">
            <h2 className="demoForm__title">Edit Demo</h2>
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
                    <input type="checkbox" className="checkbox" id="mixComplete" checked={demo.mixComplete} onChange={handleCheckboxChange} required autoFocus className="form-control" value={demo.mixComplete} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="masterComplete">Master Complete:</label>
                    <input type="checkbox" className="checkbox" id="masterComplete" checked={demo.masterComplete} onChange={handleCheckboxChange} required autoFocus className="form-control" value={demo.masterComplete} />
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
                Save Demo
            </button>
        </form>
    )
}