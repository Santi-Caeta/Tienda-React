import { Button } from 'antd';
import Cartwidtget from '../cartwidget/cartwidget'

const Navbar = () => {
    return (
            <menu>
                <h1> Tienda Hola Mundo</h1>
                <Button className='btn'>Nueva Coleccion</Button>
                <Button className='btn'> Promos</Button>
                <Button className='btn'>Nosotros</Button>
                <Button className='btn'>Contacto</Button>
                <Cartwidtget />
            </menu>
    )
};

export default Navbar;