import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    console.log(total)
    return (
        <div>
            <Helmet>
                <title>My Cart | Bistro Boss</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className='uppercase font-bold flex justify-evenly h-10 items-center'>
                <h3 className='text-3xl'>Total Items: {cart.length}</h3>
                <h3 className='text-3xl'>Total ptice: {total}</h3>
                <button className="btn btn-warning btn-small">Pay</button>

            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"></div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                            </tr>)
                        }




                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;