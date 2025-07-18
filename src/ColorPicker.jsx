import React,{useState} from 'react';

export default function ColorPicker() {

    const [color, setColor] = useState('red');
    return (<div className="color-picker">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>Color Picker11</p>
        </div>
        <label>Select a color: </label>
        <input onChange={(e) => setColor(e.target.value)}/>
    </div>);
}