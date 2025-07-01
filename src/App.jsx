import Header from './Header.jsx';
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/button.jsx";
import Student  from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {
    return (
        //We need to have atleast a set of empty brackets to enclose the components to prevent from errors
        <>
        <Button />
        <Header />
        <Food />
        <Card />
        <Student name="Rahul" age={30} isStudent={true}/>
        <Footer />
        <Student/>
        <UserGreeting isLoggedIn={true} name="Rahul" />
        </>
    );
}

export default App
