import React from 'react';
import './Person.css'

const Person = (props) => {
    // console.log(props);
    return (
        <div className="Person">
            <h1>Hello my name is {props.name}</h1>
            <p>Halo saya {props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
}

export default Person;