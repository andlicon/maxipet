import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container grid grid-cols-4 mx-auto">
        <div id='nosotros'>
          <h2>Sobre nosotros</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque soluta eius aspernatur sunt in, magnam aperiam dicta tenetur necessitatibus labore sequi itaque doloremque natus amet laboriosam nam, error consectetur alias.
          </p>
        </div>
        <div>
          <h2>Mi cuenta</h2>
          <ul>
            <li>Información personal</li>
            <li>Direcciones</li>
            <li>Mascotas</li>
            <li>Órdenes</li>
            <li>Agenda</li>
          </ul>
        </div>
        <div>
          <h2>Información</h2>
          <ul>
            <li>Formulario de contacto</li>
            <li>Preguntas frecuentes</li>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
        <div>
          <h2>Atención al cliente</h2>
          <p>Bello monte, calle XXXXX, local1</p>
          <p>(0212) 575 54 12</p>
          <p>soporte@maxipet.com</p>
          <p>Lunes a viernes</p>
          <p>9:00 a.m. - 5:00 p.m</p>
        </div>
      </div>
    </div>
  )
}
export default Footer;
