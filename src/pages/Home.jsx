import React from 'react';

const Home = ()=>(
    <div className="Home">
        <div className="Home-container">
            <div className="Home-items">
                <div className="Patients">
                    <div className="Patients-cover">
                        <span>Icono</span>
                        <div className="Patients-type">
                            Niño
                        </div>
                    </div>
                    <div className="Patients-content">
                        <div className="Patients-head">
                            <h2>Nombre del paciente</h2>
                            <i>genero</i>
                        </div>
                        <div className="Patients-date">
                            <i>icono</i>
                            <span>fecha</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;