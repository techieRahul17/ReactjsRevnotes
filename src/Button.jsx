
export default function Button(){
    const handleClick=(e)=>console.log(e);
    const handleClick2=(name)=>console.log(`${name} Click2`);
   // event added
    return(<button onClick={(e)=>handleClick(e)}>Click me</button>
    )

}
//Next we can just modify the handleCLick with multiple lined arrow function an put if else and do onClick+conditions
//onDoubleclick to handle double clicks