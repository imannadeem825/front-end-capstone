import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { SongContext } from "./SongProvider"
import { Song } from "./Song"
import "./Song.css"

export const SongList = () => {

  const { songs, getSongs } = useContext(SongContext)
  const history = useHistory()


  useEffect(() => {
    console.log("SongList: useEffect - getSongs")
    getSongs()

  }, [])


  return (
    <div className="songs">
      {console.log("SongList: Render", songs)}
      <h2>Songs</h2>
      <button onClick={() => {history.push("/songs/create")}}>
        Add A Song
      </button>
      {
        songs.map(song => {
          return <Song key={song.id} song={song} />
        })
      }
    </div>
  )
}

