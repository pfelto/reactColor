import PropTypes from 'prop-types';


const Star = (props) => 
<div className={(props.selected) ? 'star selected' : 'star'}
    onClick={props.onClick}>
</div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Star