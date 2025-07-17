import React,{useState} from "react";

export default function MyComponent(){
    const [name,setName]=useState("Guest");
    const[age,setAge]=useState(0);

    const updateName=()=>{
        setName("Rahul");
    }
    const incAge=()=>{
        setAge(17);
    }
    function handleNameChange(e){
        setName(e.target.value);
    }
    return(
        <div>
            <input onChange={handleNameChange} value={name} placeholder="Name"/>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incAge}>Inc age</button>
        </div>
    )

}