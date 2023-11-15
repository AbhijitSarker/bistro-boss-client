import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;



    const onSubmit = data => {
        //host images on imagebb
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }

                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log(data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Menu Item Added Successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })



    };

    return (
        <div className="w-full ">
            <SectionTitle subHeading="What's new?" heading="Add An Item"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="mx-4" >
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name *</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        className="input input-bordered w-full "
                        {...register("name", { required: true, maxLength: 120 })}
                    />
                </div>

                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category *</span>
                        </label>
                        <select defaultValue={'Choose a category'} className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled >Choose a category</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>salad</option>
                            <option>drinks</option>
                            <option>dessert</option>
                        </select>
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price *</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            className="input input-bordered w-full "
                            {...register("price", { required: true, maxLength: 120 })}
                        />
                    </div>
                </div>

                <div className="form-control my-4">
                    <label className="label">
                        <span className="label-text">Recipe Details *</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image *</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                </div>

                <input className="btn btn-warning btn-sm" type="submit" value={'Add Item'} />
            </form>
        </div>
    );
};

export default AddItem;