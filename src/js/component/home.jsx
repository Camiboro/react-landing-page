import React from "react";

const Home = () => {
    return (
        <div className="App">
            <nav className="navbar">
                <button>Home</button>
                <button>About</button>
                <button>Service</button>
                <button>Contact</button>
            </nav>

            <div className="container"> 
                <div className="jumbotron">
                    <h1 className="jumbotron-title">Título del Jumbotron</h1>
                    <p className="jumbotron-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                    </p>
                    <button className="jumbotron-button">click to action</button>
                </div>  

                <div className="cards-container">
                    {Array(4).fill(0).map((_, index) => (
                        <div key={index} className="card">
                            <img src={"http://via.placeholder.com/500x325"} alt="Card" />
                            <p>Texto descriptivo aquí</p>
                            <button className="blue-button">Find out more</button>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer">
                <p>© 2023 Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
