import Header from './Header.jsx';
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";

function App() {
    return (
        //We need to have atleast a set of empty brackets to enclose the components to prevent from errors
        <>
        <Header />
        <Food />
        <Footer />
        </>
    );
}

export default App
