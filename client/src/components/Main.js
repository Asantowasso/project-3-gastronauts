import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RestaurantCards from '../components/RestaurantCards';
import Footer from '../components/Footer';
import './styles/main.css';

const Main = () => {
    return (
        <div className = "App">
            <div className = "Header">
                <Header />
            </div>
            <div className = "Navbar">
                <Navbar />
            </div>
            <div className = "RestaurantCards">
                <RestaurantCards />
            </div>
            <div className = "Footer">
                <Footer />
            </div>
            </div>
    )
}

export default Main;