import React from "react";
import ColorsData from "./ColorsData";
import ColorsList from "./colorList";
import AddColorForm from "./addColorForm"

let id = 4;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ColorsData,
        }
        this.removeColor = this.removeColor.bind(this);
    }

    addColor(title,color){
        const colors = [
            ...this.state.colors,
            {
                id: id,
                title,
                color,
                rating: 0,
            }
        ]
        id++;
        this.setState({colors});
    }

    removeColor(id){
        const colors = this.state.colors.filter(
            color => color.id !== id
        );
        this.setState({colors});
    }

    rateColor(id, rating){
        console.log('Wow you are here!');
        const colors = this.state.colors.map(color =>
            (color.id !== id) ? color :
            {
                ...color,
                rating
            });
            console.log(colors);
            this.setState({colors});
    }

    render(){
        const { colors } = this.state;
        //console.log(colors);
        return (
            <div>
                <AddColorForm onNewColor={(title,color) => this.addColor(title,color)}/>
                <ColorsList colors={colors} 
                onRemove={(id) => this.removeColor(id)} 
                onRate={(id,rating) => {
                    console.log(id);
                    console.log(rating);
                    this.rateColor(id,rating);
                    }}/>
            </div>
        );
    }
}

export default App