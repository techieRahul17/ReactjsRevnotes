import Header from './Header.jsx';
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/button.jsx";

function App() {
    return (
        //We need to have atleast a set of empty brackets to enclose the components to prevent from errors
        <>
        <Button />
        <Header />
        <Food />
        <Card />
        <Footer />
        </>
    );
}

export default App
