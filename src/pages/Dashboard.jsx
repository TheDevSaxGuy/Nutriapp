import React from 'react';
import Form from '../components/Form';
const Dashboard =()=>(
    <div className="Dashboard">
        <div className="Dashboard-container">
            <div className ="Dashboard-content">
                <div className="Dashboard">
                    <Form />
                </div>
                <div className="Dashboard-profile">
                    <h2>Perfil</h2>
                    <div className="Dashboard-profile-info">
                        <img src ="/" alt="Nombre Usuario" />
                        <span>Nombre</span>
                        <h4>Argentina Neftali Cervantes Ricaud</h4>
                        <span>correo:</span>
                        <h4>argentinacervantes@hotmail.com</h4>
                        <button>Cerrar Sesion </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;