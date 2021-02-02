import React, { useContext, useEffect, useState } from "react"
import { SongContext } from "./SongProvider"
import "./Song.css"
import { useParams, useHistory } from "react-router-dom"

export const SongDetails = () => {
  const { getSongById } = useContext(SongContext)

	const [song, setSong] = useState({})

	const {songId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", songId)
    getSongById(songId)
    .then((response) => {
      setSong(response)
    })
    }, [])

  return (
    <section className="song">
        <h3 className="song__title">Title: {song.title}</h3>
        <div className="song__feel">Feel: {song.feel}</div>
        <div className="song__lyricSummary">Lyric Summary: {song.lyricSummary}</div>
        <div className="song__startDate">Start Date: {song.startDate}</div>
        <div className="song__completionDateGoal">Completion Date Goal: {song.completionDateGoal}</div>
        <div className="song__progress">Progress: {song.progress}</div>
        <div className="song__productionGoals">Production Goals: {song.productionGoals}</div>
        <div className="song__cowriters">Co-writers: {song.cowriters}</div>
        <button onClick={() => {
            history.push(`/songs/edit/${song.id}`)}}>Edit
        </button>
    </section>
  )
}