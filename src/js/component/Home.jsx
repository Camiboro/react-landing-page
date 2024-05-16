import React from 'react';
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

const Home = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="cards-container">
                    {Array(4).fill(0).map((_, index) => (
                        <Card
                            key={index}
                            imageSrc="http://via.placeholder.com/500x325"
                            description="Texto descriptivo aquí"
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
