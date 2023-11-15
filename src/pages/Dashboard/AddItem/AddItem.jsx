import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                        <select className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled selected>Choose a category</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
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