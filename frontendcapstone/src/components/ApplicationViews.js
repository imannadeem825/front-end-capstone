import React from "react"
import { Route } from "react-router-dom"

import { SongProvider } from "./songs/SongProvider"
import { SongList } from "./songs/SongList"
import { SongForm } from "./songs/SongForm"

export const ApplicationViews = () => {
    return (
        <SongProvider>
            <Route exact path="/songs">
                <SongList />
            </Route>
            <Route path="/songs/create">
                <SongForm />
            </Route>
        </SongProvider>
    )
}