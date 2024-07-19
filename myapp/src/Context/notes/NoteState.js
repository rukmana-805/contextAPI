import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const s1 = {
        name : "Akash",
        class : "5t"
    }

    const [state,setState] = useState(s1);

    const update = () => {
        setState({name:"Akash Behera", class:"6t"});
    }

    //Always pass multiple things in Object.
    return(
        <NoteContext.Provider value={{state,update}}> {/*Here NoteContext proides the value that value is, state object & that
            value is accessable every where when someone use it through useContext(NoteContext) function*/}
            {props.children} {/*You have to write it every where this--> This basically means When you wrap your
            content with NoteState then all children values autometically get accessable to that particular component.*/}
        </NoteContext.Provider>
    )
}

export default NoteState;