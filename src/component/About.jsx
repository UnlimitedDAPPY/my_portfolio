import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import imgPreview from '../assets/images/img-preview.png'; 

import { Download } from "lucide-react";

const About = () => {
   useEffect(() => {
    AOS.init({ duration: 1000 }); // Optional global duration
  }, []);

  return (

    <div id="about" className="bg-gray-700 py-6 text-white">
       <div className="text-center py-4">
      <h1 className="text-2xl md:text-3xl font-bold py-4">About Me</h1>
      <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed">I'm a passionate frontend developer, QA Engineer and product manager with 3years experience in both QA Engineerand product manager and a year experience in frontend development  </p>
    </div>
    <div className="flex flex-col gap-8 lg:px-28 items-center justify-between px-8 pb-4 md:px-12 md:flex-row mx-auto">
      <div className="flex flex-col space-y-6 max-w-xl"
      data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500" data-aos-easing="ease-out-cubic">
      
        <div className="flex flex-col ">
          <p className="text-base leading-relaxed mb-4">
            I'm a result-driven Product Manager and QA Engineer with a background in Frontend Development. I bridge the gap between product vision and technical execution with hands-on expertise in test automation, manual testing, product discovery, and agile delivery.
          </p>
          <p className="mb-4">When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.</p>

            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Tailwind', 'Bootstrap', 'Appium', 'Git', 'Selenium JavaScript', 'API Testing', 'Manual  Testing', 'JMeter'].map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
              </div>

        </div>

        {/* Social Icons */}
        
      </div>

      {/* Right Side - Image */}
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white"
       data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500" data-aos-easing="ease-out-cubic">
       <img src={imgPreview} alt="Profile" className="w-full h-full object-cover" /> 
      </div>
    </div>
    </div>
  );
};


export default About;