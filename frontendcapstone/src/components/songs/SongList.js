import React, { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { SongContext } from "./SongProvider"
import { Song } from "./Song"
import { UserContext } from "../users/UserProvider"
import "./Song.css"


//filter by user?
//add songs no longer showing on dom when you save a new song--needs to save user id
//songs do show up if userId matches though

export const SongList = () => {

  const { songs, getSongs } = useContext(SongContext)
  const { users, getUsers } = useContext(UserContext)
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
      <h2>Songs</h2>
      <button onClick={() => {history.push("/songs/create")}}>
        Add A Song
      </button>
      {
        filteredSongsByUser.map(song => {
          return <Song key={song.id} song={song} />
        })
      }
    </div>
  )
}


// const handleLogin = (e) => {
//   e.preventDefault()

//   existingUserCheck()
//       .then(exists => {
//           if (exists) {
//               localStorage.setItem("capstone_user", exists.id)
//               history.push("/")
//           } else {
//               existDialog.current.showModal()
//           }
//       })
// }
