import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (


        <div>
            <Helmet>
                <title>Our Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={menuImg} title={'Our menu'}></Cover>

        </div>
    );
};

export default Menu;