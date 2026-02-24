import React from 'react'
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperSample = () => {
  // Sample project data (replace with your actual data import)
  const projects = [
    {
      image: "project1.jpg",
      title: "Africa Agility",
      role: "Product Manager || QA Engineer",
      tools: ["Postman", "Microsoft Teams", "LoadRunner", "Agile"],
      content: "Key Achievement\n- Conducted comprehensive testing\n- Identified 15+ critical bugs\n- Improved release stability",
      link: "#"
    },
      {
      image: "project1.jpg",
      title: "Africa Agility",
      role: "Product Manager || QA Engineer",
      tools: ["Postman", "Microsoft Teams", "LoadRunner", "Agile"],
      content: "Key Achievement\n- Conducted comprehensive testing\n- Identified 15+ critical bugs\n- Improved release stability",
      link: "#"
    },
      {
      image: "project1.jpg",
      title: "Africa Agility",
      role: "Product Manager || QA Engineer",
      tools: ["Postman", "Microsoft Teams", "LoadRunner", "Agile"],
      content: "Key Achievement\n- Conducted comprehensive testing\n- Identified 15+ critical bugs\n- Improved release stability",
      link: "#"
    },
      {
      image: "project1.jpg",
      title: "Africa Agility",
      role: "Product Manager || QA Engineer",
      tools: ["Postman", "Microsoft Teams", "LoadRunner", "Agile"],
      content: "Key Achievement\n- Conducted comprehensive testing\n- Identified 15+ critical bugs\n- Improved release stability",
      link: "#"
    },
      {
      image: "project1.jpg",
      title: "Africa Agility",
      role: "Product Manager || QA Engineer",
      tools: ["Postman", "Microsoft Teams", "LoadRunner", "Agile"],
      content: "Key Achievement\n- Conducted comprehensive testing\n- Identified 15+ critical bugs\n- Improved release stability",
      link: "#"
    },
      {
      image: "project1.jpg",
      title: "Africa Agility",
      role: "Product Manager || QA Engineer",
      tools: ["Postman", "Microsoft Teams", "LoadRunner", "Agile"],
      content: "Key Achievement\n- Conducted comprehensive testing\n- Identified 15+ critical bugs\n- Improved release stability",
      link: "#"
    },
    // Add more projects as needed
  ];

  // Format content with line breaks
  const formatContent = (text) => {
    return text.split('\n').map((line, i) => (
      <p key={i} className={line.startsWith('- ') ? "ml-4 list-item" : ""}>
        {line.startsWith('- ') ? line.substring(2) : line}
      </p>
    ));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <p className="mt-2 max-w-2xl mx-auto">
            Professional projects with measurable impact.
          </p>
        </div>

        {/* Carousel with custom navigation */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 h-full rounded-lg shadow-md flex flex-col">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{project.role}</p>
                  <div className="my-3">
                    <span className="text-sm font-medium">Tools: </span>
                    <span className="text-gray-600 text-sm">
                      {project.tools.join(', ')}
                    </span>
                  </div>
                  <div className="text-gray-700 text-sm mb-4 flex-grow">
                    {formatContent(project.content)}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline hover:decoration-red-500 mt-auto"
                  >
                    View Project →
                  </a>
                </div>
                 <div className="flex gap-3 mt-4">
                    
                    <button className="bg-gray-100 w-full hover:bg-gray-200 text-gray-800 py-2 px-12 rounded-lg transition-colors">
                    Read More
                    </button>
                  </div>

              </SwiperSlide>
              
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <button className="custom-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button className="custom-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
        <button className='text-black'>Try</button>
      </div>
    </section>
  );
};


export default SwiperSample;
