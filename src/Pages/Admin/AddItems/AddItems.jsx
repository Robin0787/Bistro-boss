import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaUtensils } from 'react-icons/fa';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    function handleAddItem(data){
        const givenImage = data.image[0];
        console.log(data);
        const formImage = new FormData();
        formImage.append('image', givenImage);
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,{
            method:"POST",
            body: formImage
        })
        .then(res => res.json())
        .then(result => {
            const image = result.data?.display_url;
            axiosSecure.post('/add-item', {...data, image})
            .then(result => {
                if(result.data.insertedId){
                    toast.success('Item Added');
                    reset();
                }
            });
        })
    }

    return (
        <section className='bg-white min-h-screen'>
            <Helmet>
                <title>Bistro Boss | Dashboard | Add an item</title>
            </Helmet>
           <article className='text-black'>
            <SectionHeader subHeading={'Add Items'} heading={'Add An Item'} />
            </article>
            <article className='p-4 md:p-10 lg:p-16 xl:p-20'>
                <form className='p-4 md:p-10 lg:p-16 xl:p-20 bg-gray-200 space-y-5 text-gray-700' onSubmit={handleSubmit(handleAddItem)}>
                    <div className='space-y-1'>
                        <label htmlFor="name">Recipe Name*</label><br />
                        <input type="text" name="" {...register('name', {required: true, maxLength: 100})} className='w-full bg-white p-2 rounded-md placeholder:text-sm border-0 focus:outline-0 focus:ring ring-gray-300 duration-300' placeholder='Recipe Name'/>
                    </div>
                    <div className="md:flex gap-5">
                        <div className='md:w-1/2 space-y-1'>
                            <label htmlFor="">Category*</label><br />
                            <select {...register('category', {required: true})} className='w-full bg-white p-2 rounded-md placeholder:text-sm border-0 focus:outline-0 focus:ring ring-gray-300 duration-300' defaultValue="Pizza">
                                <option  value="salad">Salad</option>
                                <option value="pizza" selected>Pizza</option>
                                <option value="desert">Desert</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className='md:w-1/2 space-y-1'>
                            <label htmlFor="price">Price*</label><br />
                            <input type="number" {...register('price', {required:true})} className='w-full bg-white p-2 rounded-md placeholder:text-sm border-0 focus:outline-0 focus:ring ring-gray-300 duration-300' name="price" placeholder='Price' />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="recipe-details">Recipe Details*</label>
                        <textarea {...register('recipe', {required:true})} cols="30" rows="10" className='w-full bg-white p-2 rounded-md placeholder:text-sm border-0 focus:outline-0 focus:ring ring-gray-300 duration-300' placeholder='Recipe Details'></textarea>
                    </div>
                    <div>
                    <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs bg-white text-gray-500" {...register('image', {required: true})}/>
                    </div>
                    <div>
                        <button type='submit' className='bg-indigo-800 text-white px-8 py-3 rounded-sm flex justify-center items-center gap-2'>Add Item <FaUtensils /></button>
                    </div>
                </form>
            </article>
        </section>
    );
};

export default AddItems;