import Colors from './colors'

const ColorsList = ({colors=[]}) => 
<div>
    {(colors.length === 0) ? 
    <p>No Colors Listed. (Add a Color)</p> :
    colors.map(color =>
        <Colors key={color.id} {...color} />
    )}
</div>

export default ColorsList