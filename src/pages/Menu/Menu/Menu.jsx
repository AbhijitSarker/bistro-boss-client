import { Helmet } from 'react-helmet-async';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
        </div>
    );
};

export default Menu;