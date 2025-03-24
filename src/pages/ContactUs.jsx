import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";

const ContactUs = () => {
    const {user}=useContext(AuthContext)
    const [formData, setFormData] = useState({
        name: user?.displayName || "",
        email: user?.email || "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-3xl mx-auto p-6  text-center">
            <h1 className="text-4xl font-bold text-red-600">Contact Us</h1>
            <p className="text-gray-700 mt-4">
                Have questions? Feel free to reach out to us by filling out the form below.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Your Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="input input-bordered w-full p-2 mt-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Your Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="input input-bordered w-full p-2 mt-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Your Message</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        className="textarea textarea-bordered w-full p-2 mt-2"
                        rows="4"
                    />
                </div>

                <button type="submit" className="btn bg-red-600 text-white w-full mt-4">
                    Send Message
                </button>
            </form>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-red-600">Our Contact Information</h2>
                <p className="text-gray-700 mt-2">📍 Dhaka,Bangladesh</p>
                <p className="text-gray-700">📞 +000000000</p>
                <p className="text-gray-700">📧 contact@streamflix.com</p>
            </div>
        </div>
    );
};

export default ContactUs;
