import { useState } from 'react';
import './Color_picker.css'

function Color_picker()
{

    const [bgcolor, setBgcolor] = useState("#fffff");

    const changeBG = ()=>
    {
        let color = document.querySelector("input").value;
        setBgcolor(color);
    }
    
    return(<>
    <div className='color_container'>
        <div className='color_box' style={{backgroundColor: bgcolor}}>
        </div>
        <label>Select Color: <input type='color' onChange={changeBG}></input></label>
        <p>Hex Code: {bgcolor}</p>
    </div>
    </>)
}

export default Color_picker;