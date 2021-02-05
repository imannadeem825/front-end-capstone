import React, { useState, createContext } from "react"
export const DemoContext = createContext()

//are all expands correct?

export const DemoProvider = (props) => {
    
    const [demos, setDemos] = useState([])

    const getDemos = () => {
        return fetch("http://localhost:8088/demos?_expand=song")
        .then(res => res.json())
        .then(setDemos)
    }

    const addDemo = demoObj => {
        return fetch("http://localhost:8088/demos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(demoObj)
        })
        .then(response => response.json())
    }

    const getDemoById = (id) => {
        return fetch(`http://localhost:8088/demos/${id}?_expand=song`)
            .then(res => res.json())
    }

    const updateDemo = demo => {
        return fetch(`http://localhost:8088/demos/${demo.id}?_expand=song`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(demo)
        })
          .then(getDemos)
      }

      const deleteDemo = demoId => {
        return fetch(`http://localhost:8088/demos/${demoId}`, {
            method: "DELETE"
        })
            .then(getDemos)
    }

    return (
     <DemoContext.Provider value={{
        demos, addDemo, getDemos, getDemoById, updateDemo, deleteDemo
        }}>
            {props.children}
    </DemoContext.Provider>
    )
}

