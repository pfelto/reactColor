import React from "react";

//do not need this to be a class as moving functionality and state out of this ish 
//Need class to use refs. If we end up using it in the end i won't change this 
//You may not use the ref attribute on function components because they don’t have instances.
//this.refs is depreciated

class AddColorForm extends React.Component {
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
            <form onSubmit={(e) => this.submit(e)}>
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