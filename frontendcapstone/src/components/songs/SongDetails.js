import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { SongContext } from "./SongProvider"
import "./Song.css"


export const SongDetails = () => {

  const { getSongById, deleteSong } = useContext(SongContext)
  const [song, setSong] = useState({})
  const { songId } = useParams();
  const history = useHistory();
  

  const handleDelete = () => {
    deleteSong(song.id)
      .then(() => {
        history.push("/songs")
      })
  }


  useEffect(() => {
    console.log("useEffect", songId)
    getSongById(songId)
      .then((response) => {
        setSong(response)
      })
  }, [])


  return (
    <section className="song">
      <h2 className="song__title">Song Title: {song.title}</h2>
      <div className="song__feel">
        <div className="feel__title">Feel:</div>
        <div className="feel__text">{song.feel}</div>
      </div>
      <div className="song__lyricSummary">
        <div className="lyricSummary__title">Lyric Summary:</div>
        <div className="lyricSummary__text">{song.lyricSummary}</div>
      </div>
      <div className="song__startDate">
        <div className="startDate__title">Start Date:</div>
        <div className="startDate__text">{song.startDate}</div>
      </div>
      <div className="song__completionDateGoal">
        <div className="completionDate__title">Completion Date Goal:</div>
        <div className="completionDateGoal__text">{song.completionDateGoal}</div>
      </div>
      <div className="song__progress">
        <div className="progress__title">Progress:</div>
        <div className="progress__text">{song.progress}</div>
      </div>
      <div className="song__productionGoals">
        <div className="productionGoals__title">Production Goals:</div>
        <div className="productionGoals__text">{song.productionGoals}</div>
      </div>
      <div className="song__cowriters">
        <div className="cowriters__title">Co-writers:</div>
        <div className="cowriters__text">{song.cowriters}</div>
      </div>
      <button onClick={() => {
        history.push(`/songs/edit/${song.id}`)
      }}>Edit
      </button>
      <button onClick={handleDelete}>Delete Song</button>
      <button onClick={() => { history.push(`/demos/create/${song.id}`) }}>
        Add A Demo
      </button>
    </section>
  )
}