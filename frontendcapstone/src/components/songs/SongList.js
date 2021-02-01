import React, { useContext, useEffect } from "react"
import { SongContext } from "./SongProvider"
import { Song } from "./Song"
import "./Song.css"

export const SongList = () => {
  const { songs, getSongs } = useContext(SongContext)

  useEffect(() => {
    console.log("SongList: useEffect - getSongs")
    getSongs()

  }, [])

  return (
    <div className="songs">
      {console.log("SongList: Render", songs)}
      {
        songs.map(song => {
          return <Song key={song.id} song={song} />
        })
      }
    </div>
  )
}