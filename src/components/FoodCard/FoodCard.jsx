import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-4 top-4 px-4 py-2 rounded-lg">${price}</p>
                <div className="card-body flex flex-col items-start">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <Link to={``}>
                            <button className="btn btn-outline border-b-4 border-0 border-black bg-slate-500 text-white">Order Now</button>
                        </Link>                    </div>
                </div>
            </div>
        </div>
    );
};



export default FoodCard;