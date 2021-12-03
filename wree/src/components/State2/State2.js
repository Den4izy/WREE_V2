import './State2.css';
import React from 'react';
import { useState } from 'react';

function State2() {

    const [count, setCount] = useState([]);
    let ref = React.createRef();


    let handler = () => {
        let val = ref.current.value;
        let current = [...count, val];
        // console.log(current);
        setCount(current);
        ref.current.value = '';


    }


    return (
        < div className="state2" >
            <h1>State2 with func</h1>

            <p>State потрібен для того щоб при зміні данних в компоненті їх автоматично виводило</p>
            <div>
                <input type="text" ref={ref} />
            </div>
            <div>
                <button onClick={handler}>Add</button>
            </div>
            <div>
                <ul>
                    {count.map((item, index) => <li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
        </div >
    );
}

export default State2;