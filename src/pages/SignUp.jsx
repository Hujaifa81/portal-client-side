import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/UseTitle';
import { auth } from '../firebase/firebase.config';

const SignUp = () => {
    const {emailRegister}=useContext(AuthContext)
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    useTitle()
    const onSubmit = async (data) => {
        
        emailRegister(data.email,data.password)
        .then((result)=>{
            const currentUser={
                name:data.name,
                photo:data.photo,
                email:data.email
            }
            
            updateProfile(result.user, {
                        displayName: currentUser.name, 
                        photoURL: currentUser.photo,
                        email:currentUser.email
                      })
            .then(()=>{
                navigate('/')
            }).catch(()=>{
                
            })  
        })
        .catch(() => {
            
          })

    };
    return (
        <div className="max-w-xl mx-auto p-5 dark:bg-black">
            <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block font-medium dark:text-white">Name</label>
                    <input type="text" className="w-full border p-2 rounded dark:bg-gray-900"
                        {...register("name", {
                            required: "Name is required",
                        })} />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="block font-medium dark:text-white">Email</label>
                    <input type="text" className="w-full border p-2 rounded dark:bg-gray-900"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                        })} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block font-medium dark:text-white">Password</label>
                    <input type="password" className="w-full border p-2 rounded dark:bg-gray-900"
                        {...register("password", {
                            required: "Password is required",
                            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, message: "Password must contain at least 6 characters, including uppercase and lowercase letters" }
                        })} />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <div>
                    <label className="block font-medium dark:text-white">Photo URL</label>
                    <input type="url" className="w-full border p-2 rounded dark:bg-gray-900"
                        {...register("photo", {
                            required: "Photo URL is required",
                            pattern: { value: /^(http|https):\/\/[^ "\n]+$/, message: "Invalid URL" }
                        })} />
                    {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                </div>

                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
                <p className='dark:text-white'>Already have an account?<span className='text-red-600'><Link to='/sign-in'> Sign in</Link></span></p>
            </form>
        </div>
    );
};

export default SignUp;