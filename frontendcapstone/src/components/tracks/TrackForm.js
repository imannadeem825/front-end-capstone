import React, { useContext, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { TrackContext } from "./TrackProvider"
import "./Track.css"



export const TrackForm = () => {

    const { addTrack } = useContext(TrackContext)
    const { demoId } = useParams()
    const history = useHistory();


    const [track, setTrack] = useState({
        demo: {},
        title: "",
        timeToComplete: "",
        isComplete: false,
    });
    console.log("testing track", track)


    const handleControlledInputChange = (event) => {
        const newTrack = { ...track }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTrack[event.target.id] = selectedVal
        setTrack(newTrack)
    }


    const handleCheckboxChange = (event) => {
        const newTrack = { ...track }
        newTrack[event.target.id] = event.target.checked
        setTrack(newTrack)
    }


    const handleSaveTrack = (event) => {
        if (track.title === "" || track.timeToComplete === "" || track.isComplete === "") {
            window.alert("Please add details of track")
        } else {
            addTrack({
                demoId: parseInt(demoId),
                title: track.title,
                timeToComplete: track.timeToComplete,
                isComplete: track.isComplete
            })
                .then(() => history.push(`/demos/detail/${demoId}`))
        }
    }


    return (
        <form className="trackForm">
            <h2 className="trackForm__title">Add A Track</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Track:</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Track Title" value={track.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="timeToComplete">Time to Complete:</label>
                    <textarea id="timeToComplete" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Time to Complete Track" value={track.timeToComplete} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="isComplete">Track Complete:</label>
                    <input type="checkbox" className="checkbox" id="isComplete" checked={track.isComplete} onChange={handleCheckboxChange} required autoFocus className="form-control" value={track.isComplete} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    handleSaveTrack()
                }}>
                Add Track
                </button>
        </form>
    )
}