export default function ProfilePicture() {
    const imaheurl="./assets/Rahul.png"
    const handleClick=()=>console.log(imaheurl);
    return(<img alt="Rahul" src={imaheurl}/>)
}