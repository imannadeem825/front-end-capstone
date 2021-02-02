import React, { useContext, useEffect, useState } from "react"
import { SongContext } from "./SongProvider"
import "./Song.css"
import { useHistory } from 'react-router-dom';

export const SongForm = () => {
    const { songs, addSong, getSongs } = useContext(SongContext)

    const [song, setSong] = useState({
      title: "",
      feel: "",
      lyricSummary: "",
      startDate: "",
      completionDateGoal: "",
      progress: "",
      productionGoals: "",
      cowriters: ""
    });

    const history = useHistory();

    useEffect(() => {
      getSongs()
    }, [])

    const handleControlledInputChange = (event) => {

      const newSong = { ...song }
      let selectedVal = event.target.value
    
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newSong[event.target.id] = selectedVal
      setSong(newSong)
    }

    const handleClickSaveSong = (event) => {
      event.preventDefault() 

      const title = song.title
      const feel = song.feel
      const lyricSummary = song.lyricSummary
      const startDate = song.startDate
      const completionDateGoal = song.completionDateGoal
      const progress = song.progress
      const productionGoals = song.productionGoals
      const cowriters = song.cowriters

      if (title === "" || feel === "" || lyricSummary === "" || startDate === "" || completionDateGoal === "" || progress === "" || productionGoals === "" || cowriters === "") {
        window.alert("Please add details of song")
      } else {
        addSong(song)
        .then(() => history.push("/songs/create"))
      }
    }

    return (
      <form className="songForm">
          <h2 className="songForm__title">Add New Song</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="title">Song Title:</label>
                  <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Song Title" value={song.title}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="feel">Feel:</label>
                  <textarea id="feel" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Describe feel of song" value={song.feel}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="lyricSummary">Lyric Summary:</label>
                  <textarea id="lyricSummary" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Describe lyrical content" value={song.lyricSummary}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="startDate">Start Date:</label>
                  <input type="text" id="startDate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Date song was started" value={song.startDate}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="completionDateGoal">Completion Date Goal:</label>
                  <input type="text" id="completionDateGoal" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Ideal completion date" value={song.completionDateGoal}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="progress">Progress:</label>
                  <textarea id="progress" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Describe progress of song" value={song.progress}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="productionGoals">Production Goals:</label>
                  <textarea id="productionGoals" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Describe any goals for demo production" value={song.productionGoals}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="cowriters">Co-writers:</label>
                  <input type="text" id="cowriters" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="List any co-writers" value={song.cowriters}/>
              </div>
          </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveSong}>
                Save Song
            </button>
      </form>
    )
}