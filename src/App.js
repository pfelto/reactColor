import React from "react";
import ColorsData from "./ColorsData";
import ColorsList from "./colorList";
import AddColorForm from "./addColorForm"

class App extends React.Component {
    render(){
        return (
            <div>
                <AddColorForm />
                <ColorsList colors={ColorsData}/>
            </div>
        );
    }
}

export default App