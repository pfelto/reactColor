import Colors from './colors'

const ColorsList = ({colors=[], onRemove=f=>f , onRate=f=>f }) => 
<div className='colorList'>
    {(colors.length === 0) ? 
    <p>No Colors Listed. (Add a Color)</p> :
    colors.map(color =>
        <Colors key={color.id} 
        title={color.title}
        color={color.color}
        rating={color.rating}
        onRemove={() => onRemove(color.id)} 
        onRate={(rating) => onRate(color.id, rating)}/>
    )}
</div>

export default ColorsList