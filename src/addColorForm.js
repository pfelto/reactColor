import React from "react";


class AddColorForm extends React.Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        const { _title , _color } = this.refs;
        e.preventDefault();
        //alert(`New Color: ${_title.value} ${_color.value}`);
        this.props.onNewColor(_title.value, _color.value);
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

export default AddColorForm