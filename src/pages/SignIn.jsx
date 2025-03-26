import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/UseTitle';

const SignIn = () => {
    const { emailSignIn, googleSignIn } = useContext(AuthContext)
    useTitle()
    const navigate = useNavigate()
    const location = useLocation();

    const { register, handleSubmit,watch,formState: { errors } } = useForm();
    const email=watch("email")
    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                navigate(location.state || "/");
                
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const onSubmit = async (data) => {
        emailSignIn(data.email, data.password)
            .then(() => {
                toast.success("Login successful!");
                navigate(location.state || "/");
                
            })
            .catch((error) => {
                toast.error(error.message.split('/')[1].slice(0, error.message.split('/')[1].length - 2));
                

            });
       
    }
    return (
        <div>
            <div className="max-w-xl mx-auto p-5 flex flex-col justify-center py-8 dark:bg-black">
                <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Sign In</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div>
                        <label className="block font-medium dark:text-white">Email</label>
                        <input type="text" className="w-full border p-2 rounded dark:bg-gray-900"  
                            {...register("email", {
                                required: "Email is required",
                                
                            })} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block font-medium dark:text-white">Password</label>
                        <input type="password" className="w-full border p-2 rounded dark:bg-gray-900"
                            {...register("password", {
                                required: "Password is required",
                                
                            })} />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <div>
                        <Link
                            className="link link-hover"
                            to="/forget-password"
                            state={ {email} }
                            >
                            Forgot password?
                        </Link>
                    </div>
                    <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded w-full">Sign In</button>
                    <button className="btn btn-neutral mt-2 bg-white text-black block w-full" type="button" onClick={handleGoogle}>Sign in with Google</button>
                    <p className='dark:text-white'>Don't have an account?<span className='text-red-600'><Link to='/sign-up'> Sign up</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;