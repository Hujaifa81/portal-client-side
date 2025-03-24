import noProfile from '../assets/no-profile-picture-15257.png'
const Testimonial = () => {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold  text-red-600">What Our Users Say</h2>
          <p className="text-gray-600 mt-2">Hear from our happy clients and users.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-xl p-6">
              <p className="text-gray-700">"This service has changed my life! Highly recommended."</p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={noProfile} alt="User 1" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold">Mamun</h4>
                  <span className="text-sm text-gray-500">Entrepreneur</span>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl p-6">
              <p className="text-gray-700">"A seamless experience with great customer support."</p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={noProfile} alt="User 2" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold">Rifat</h4>
                  <span className="text-sm text-gray-500">Designer</span>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl p-6">
              <p className="text-gray-700">"Exceptional quality and user-friendly interface!"</p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={noProfile} alt="User 3" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="font-bold">Tanvir</h4>
                  <span className="text-sm text-gray-500">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonial;
  