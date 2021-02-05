import React, { useContext, useEffect, useState } from "react"
import { SongContext } from "./SongProvider"
import "./Song.css"
import { useHistory, useParams } from 'react-router-dom';



export const SongForm = () => {

    const { addSong, getSongs, updateSong, getSongById } = useContext(SongContext)
    const {songId} = useParams()
    const history = useHistory();


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

 
    const handleControlledInputChange = (event) => {

      const newSong = { ...song }
      let selectedVal = event.target.value
    
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newSong[event.target.id] = selectedVal
      setSong(newSong)
    }


    useEffect(() => {
        getSongs().then(() => {
            if (songId) {
                getSongById(songId)
                .then(song => {
                    setSong(song)
                })
            }
        })
      }, [])

    const handleSaveSong = (event) => {
      

      if (song.title === "" || song.feel === "" || song.lyricSummary === "" || song.startDate === "" || song.completionDateGoal === "" || song.progress === "" || song.productionGoals === "" || song.cowriters === "") {
        window.alert("Please add details of song")
      } else {
          if (songId) {
              updateSong({
                  id: song.id,
                  title: song.title,
                  feel: song.feel,
                  lyricSummary: song.lyricSummary,
                  startDate: song.startDate,
                  completionDateGoal: song.completionDateGoal,
                  progress: song.progress,
                  productionGoals: song.productionGoals,
                  cowriters: song.cowriters
              })
              .then(() => history.push(`/songs/detail/${song.id}`))
          } else {
              addSong({
                title: song.title,
                feel: song.feel,
                lyricSummary: song.lyricSummary,
                startDate: song.startDate,
                completionDateGoal: song.completionDateGoal,
                progress: song.progress,
                productionGoals: song.productionGoals,
                cowriters: song.cowriters
              })
              .then(() => history.push("/songs"))
          }
      }
    }


    return (
      <form className="songForm">
          <h2 className="songForm__title">{songId ? "Edit Song" : "Add A Song"}</h2>
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
                onClick={event => {
                    event.preventDefault()
                    handleSaveSong()
                }}>
                {songId ? "Save Song" : "Add Song"}
            </button>
      </form>
    )
}