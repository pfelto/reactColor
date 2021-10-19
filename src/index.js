import React from "react";
import ReactDOM from "react-dom";

class AddColorForm extends React.Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        const { _title , _color } = this.refs;
        e.preventDefault();
        alert(`New Color: ${_title.value} ${_color.value}`);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    render(){ 
        return (
            <form onSubmit={this.submit}>
                <input ref='_title'
                    type='text'
                    placeholder='Add Color...'/>
                <input ref='_color'
                    type='color'/>
                <button>ADD</button>
            </form>
        )
    }
}




ReactDOM.render(<AddColorForm />, document.getElementById('root'));