import React from "react";
//import PropTypes from 'prop-types';
import StarRating from "./starRating";

const Color = ({title, color, rating=0}) =>
<section className='color'>
    <h1>{title}</h1>
    <div className='box' 
        style={{ backgroundColor: color }}>   
    </div>
    <div>
        <StarRating starsSelected={rating}/>
    </div>
</section>


export default Color

//This doesn't need to be  a ES6 class, probably better to make it a stateless functional component
/*
class Color extends React.Component {


render(){
    const { title , color , rating } = this.props;
    return(
        <section className='color'>
            <h1>{title}</h1>
            <div className='box' 
            style={{ backgroundColor: color }}>   
            </div>
            <div>
                <StarRating starsSelected={rating}/>
            </div>
        </section>

    );
}
}
*/

