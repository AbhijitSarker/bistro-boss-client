
const MenuItem = ({ item }) => {

    const { image, name, recipe, price } = item;
    return (
        <div className="flex space-x-4">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px] h-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-black">{name}-------</h3>
                <p className="text-gray-700"> {recipe}</p>
            </div>
            <p className="text-yellow-600">{price}</p>
        </div>
    );
};

export default MenuItem;