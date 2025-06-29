import Rahul from './assets/Rahul.png';
export default function Card(){
    return (
        <div className="card">
            <img className="card1" src={Rahul} alt="Hello Rahul" />
            <h2 className="card2">Rahul V S</h2>
            <p className="card3">Rahul is a Web dev</p>
        </div>

    );
}