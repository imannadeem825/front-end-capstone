import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { User } from "./User"
import { useParams } from "react-router-dom"
import "./User.css"


export const UserList = () => {

  const { users, getUsers } = useContext(UserContext)

  useEffect(() => {
    console.log("UserList: useEffect - getUsers")
    getUsers()
  }, [])

  return (
    <div className="users">
      {console.log("UserList: Render", users)}
      <h3>Users</h3>
      {
        users.map(user => {
          return <User key={user.id} user={user} />
        })
      }
    </div>
  )
}


// export const DemoList = () => {

//   const { demos, getDemos } = useContext(DemoContext)
//   const { songs } = useContext(SongContext)

//   useEffect(() => {
//     console.log("DemoList: useEffect - getDemos")
//     getDemos()
//   }, [])

//   return (
//     <div className="demos">
//       {console.log("DemoList: Render", demos)}
//       <h2>Demos</h2>
//       {
//         demos.map(demo => {
//             const demoWithSong = songs.find( s => s.id === demo.songId)
//           return <Demo key={demo.id} demo={demo} demoWithSong={demoWithSong} />
//         })
//       }
//     </div>
//   )
// }

