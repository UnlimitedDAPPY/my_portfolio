import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import '../style.css';

const Home = () => {

  useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);

    useEffect(() => {
    document.title = "Home | My Profile Website";
  }, []);


  return (
   <section id="home" 
   className="py-12 px-12 flex items-center justify-center mt-12 min-h-screen">
    
     <div className='text-center'>
       <h1 className='text-3xl md:text-7xl font-bold mb-6'>
        Hi I'm Oladapo Olawunmi Asubiojo
        </h1>
      <p className='py-4 text-3xl mb-4 '
      data-aos="fade-down" 
      data-aos-duration="2000"
      data-aos-delay="500" 
      data-aos-easing="ease-out-cubic">
        <span className='typewriter'>
        Frontend Developer | QA Engineer | Product Manager | Data Analysis
        </span>
        </p>

      
      
        <a href="/My_CV.pdf" download="Oladapo_Olawunmi_Asubiojo_CV.pdf">
          <button className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-3 rounded-md w-full sm:w-[40%] md:w-[30%] border border-white transition-all duration-300 flex items-center justify-center mx-auto"
          data-aos="fade-up" data-aos-duration="1000"
          title="Download my CV">
            DOWNLOAD CV
          </button>
      </a> 

      <div className="flex space-x-4 mt-6 items-center mx-auto justify-center ">
          <h4>Follow Me</h4>
            <a href="https://facebook.com/oladapo olawunmi asubiojo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
              <FaTwitter />
          </a>
           <a href="https://linkedin.com/in/oladapo-asubiojo-745873164/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
          </a>
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
          </a>
        </div>

     </div>
    
   </section>
  )
}

export default Home

// bg-gradient-to-br from-blue-60 to-cyan-50