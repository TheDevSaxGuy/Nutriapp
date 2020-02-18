import React from 'react';

const Form =()=>(
    <div className="Form">
        <div className="Form-head">
            <h2> Dar de alta  </h2>
        </div>
        <div className ="Form-item">
            <form>
                <input name="First-name" type="text" placeholder="Nombre del paciente"/>
                <input name="Last-name" type="text" placeholder="Apellido del paciente"/>
                <select name="type">
                    <option disable selected>Seleccionar</option>
                    <option value="child">Niño</option>
                    <option value="teen">
                        Adolescente
                    </option>
                    <option value="adult">Adulto</option>
                </select>
                <select name="gender">
                    <option disable selected>Seleccionar</option>
                    <option value="male">Hombre</option>
                    <option value="female">
                        Mujer
                    </option>
                </select>
                <input type="file" name="photo" />
                <button>Enviar</button>
            </form>
        </div>

    </div>

);

export default Form;