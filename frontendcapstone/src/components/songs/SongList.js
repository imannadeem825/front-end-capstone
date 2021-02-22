import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { SongContext } from "./SongProvider"
import { Song } from "./Song"
import "./Song.css"


export const SongList = () => {

  const { songs, getSongs } = useContext(SongContext)
  const history = useHistory()
  const userId = localStorage.getItem("capstone_user")

  useEffect(() => {
    console.log("SongList: useEffect - getSongs")
    getSongs()
  }, [])

  const filteredSongsByUser = songs.filter(song => song.userId === parseInt(userId))

  return (
    <div className="songs">
      {console.log("SongList: Render", songs)}
      <div className="addASongButton__div">
        <button className="addASongButton" onClick={() => {history.push("/songs/create")}}>
          Add A Song
        </button>
      </div>
      <h2 className="songList__title">Songs</h2>
      {
        filteredSongsByUser.map(song => {
          return <Song key={song.id} song={song} />
        })
      }
    </div>
  )
}
