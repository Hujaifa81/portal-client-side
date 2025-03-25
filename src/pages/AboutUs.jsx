import image from '../assets/banner-3.jpg'
import useTitle from '../hooks/UseTitle';
const AboutUs = () => {
    useTitle()
    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 text-center">
            <h1 className="text-4xl font-bold text-red-600">About Us</h1>
            <p className="text-gray-700 mt-4">
            "Welcome to StreamFlix, the ultimate destination for movie lovers! We bring you an extensive collection of films across genres, from timeless classics to the latest blockbusters. Our platform is designed for a seamless viewing experience, offering high-quality streaming, personalized recommendations, and an easy-to-use interface. Whether you're in the mood for action, romance, comedy, or thrillers, we've got something for everyone. Join us and dive into a world of cinematic magic!
            </p>

            <div className="mt-8 flex justify-center items-center gap-6">
                <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-500">Our Mission</h2>
                    <p className="text-gray-600 mt-2">
                    Our mission is to provide movie lovers with an immersive and seamless streaming experience, offering a vast collection of films across genres. We aim to bring entertainment to everyone by delivering high-quality content, user-friendly navigation, and personalized recommendations—making every movie night unforgettable.
                    </p>
                </div>

                
            </div>

            <div className="mt-8">
                <img 
                    src={image}
                    alt="image"
                    className="rounded-lg shadow-lg w-full"
                />
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-500">Join Us</h2>
                <p className="text-gray-700 mt-2">
                Become part of the StramFlix community! By joining us, you’ll unlock exclusive access to the latest movie releases, personalized recommendations, and a vibrant community of fellow movie lovers. <br /> Whether you're here to watch your favorite films or discover something new, StreamFlix is your one-stop destination for all things cinema. Sign up today and start exploring!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
