import React from "react";
import { Code2, Palette, Smartphone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AA from "../assets/images/AA.png";
import Blinkers from "../assets/images/blinkers.png";
import BLL from "../assets/images/buyletlive.png";
import CNC from "../assets/images/cakesCream.png";
import Kili from "../assets/images/kilimanjaro.png";
import Laspark from "../assets/images/laspark.jpg";
import StanbicMobile from "../assets/images/stanbicMobile.png";
import StanbicWeb from "../assets/images/stanbicWeb.png";
import StartUpLagos from "../assets/images/startup_Lagos.png";
import TuneGrill from "../assets/images/tunegrill.jpg";
import Waheb from "../assets/images/waheb.png";
import Wazima from "../assets/images/wazima.jpg";

const Project = ({ aosDelay }) => {
  const features = [
    {
      image: AA,
      // icon: <Code2 className="w-10 h-10 text-blue-500" />,
      title: "Africa Agility",
      role: "Product Manager || QA Engineer",
      description:
        "Key Achievement \nAs QA Engineer Conducted comprehensive manual and API testing. Identified 15+ critical bugs pre-launch, reducing post-launch issues by 30% Led regression testing cycles, improving release stability Collaborated with developers to implement fixes, achieving 98% test pass rate As Product Manager Led roadmap for AI features, increasing user retention by 40% Optimized onboarding flow, reducing drop-offs by 35% Shipped 5 major releases 2 weeks ahead of schedule",
      buttonText: "Learn More",
      buttonLink: "africaagility.org",
    },
    {
      image: Blinkers,
      icon: (
        <Palette
          className="w-10 h-10 
      text-purple-500"
        />
      ),
      title: "Blinkers",
      role: "Product Manager || QA Engineer",
      description:
        "Design with elegance and ensure your UI looks stunning on all devices.",
      buttonText: "Learn More",
      buttonLink: "blinkers.org",
    },

    {
      image: BLL,
      icon: <Smartphone className="w-10 h-10 text-green-500" />,
      title: "Buyletlive",
      role: "Product Manager || QA Engineer",
      description:
        "Deliver seamless experiences across all screen sizes and devices.",
      buttonText: "Learn More",
      buttonLink: "buyletlive.com",
    },
    {
      image: CNC,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Cakes and Cream",
      role: "Product Manager || QA Engineer",
      description:
        "Build applications that can serve users from anywhere in the world.",
      buttonText: "Learn More",
      buttonLink: "cakesandcream.com",
    },
    {
      image: Kili,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Kilimanjaro",
      role: "Product Manager || QA Engineer",
      description:
        "Key Achievement As QA Engineer Conducted comprehensive manual and API testing.\n- Identified 15+ critical bugs pre-launch, reducing post-launch issues by 30%\n- Led regression testing cycles, improving release stability\n- Collaborated with developers to implement fixes, achieving 98% test pass rate\n\nAs Product Manager\n- Led roadmap for AI features, increasing user retention by 40%\n- Optimized onboarding flow, reducing drop-offs by 35%\n- Shipped 5 major releases 2 weeks ahead of schedule",
      buttonText: "Learn More",
      buttonLink: "kilimanjarorestuarants.com",
    },
    {
      image: Laspark,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Laspark",
      role: "Product Manager || QA Engineer",
      description:
        "Build applications that can serve users from anywhere in the world.",
      buttonText: "Learn More",
      buttonLink: "laspark.com",
    },
    {
      image: StanbicMobile,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Stanbic Mobile",
      role: "Product Manager || QA Engineer",
      description:
        "Build applications that can serve users from anywhere in the world.",
      buttonText: "Learn More",
      buttonLink: "stanbic.com",
    },
    {
      image: StanbicWeb,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Stanbic Web",
      role: "Product Manager || QA Engineer",
      description:
        "Build applications that can serve users from anywhere in the world.",
      buttonText: "Learn More",
      buttonLink: "stanbic.org",
    },
    {
      image: StartUpLagos,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Startup Lagos",
      role: "Product Manager || QA Engineer",
      description:
        "Build applications that can serve users from anywhere in the world.",
      buttonText: "Learn More",
      buttonLink: "startuplagos.com",
    },
    {
      image: TuneGrill,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "TuneGrill",
      role: "Product Manager || QA Engineer",
      description:
        "Build applications that can serve users from anywhere in the world.",
      buttonText: "Learn More",
      buttonLink: "tunegrill.com",
    },
    {
      image: Waheb,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Waheb",
      role: "Product Manager || QA Engineer",
      description:
        "Build applications that can serve users from anywhere in the world.",
      buttonText: "Learn More",
      buttonLink: "waheb.com",
    },
    {
      image: Wazima,
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Wazima",
      role: "QA Engineer",
      description:
        "Build applications that can serve users from anywhere in the world.",
      buttonText: "Learn More",
      buttonLink: "wazima.com",
    },
  ];

  return (
    <section className="py-12 bg-gray-700" id="projects">
      <div className="max-w-6xl mx-auto px-6"
       data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={aosDelay}>
        <div className="text-center px-4 py-8 mx-6">
          <h4 className="text-lg font-semibold tracking-widest">
            My Feature Projects
          </h4>

          <p className="max-w-xl mx-auto leading-relaxed">
            From stress-testing fintech APIs to optimizing SaaS user flows, I
            bridge technical rigor with product strategy. Each project below
            demonstrates how I solve real user problems through data-driven QA
            processes and market-aligned roadmaps. Metrics reflect impact, not
            just activity.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1} // show 4 at once
            slidesPerGroup={1} // move 4 at a time
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            loop={features.length > 4}
            breakpoints={{
              640: { slidesPerView: 1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
            className="!pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="h-full flex flex-col rounded-2xl shadow hover:shadow-lg transition ">
                  {/* Image */}
                  {feature.image && (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-40 object-cover rounded-t-2xl mb-4"
                    />
                  )}

                  {/* Title + Role */}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  {feature.role && (
                    <h6 className="text-sm text-gray-400 mb-2">
                      {feature.role}
                    </h6>
                  )}

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {feature.description}
                  </p>
                  <a>
                    {feature.buttonLink}
                  </a>

                  {/* Button */}
                  {feature.buttonText && (
                    <Link
                      to={feature.buttonLink}
                      className="inline-block mt-auto text-center py-2 bg-gray-900 hover:bg-gray-500 rounded-lg text-white transition"
                    >
                      {feature.buttonText}
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (inside relative wrapper) */}
          <button className="custom-prev absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 ml-[-4px]">
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button className="custom-next absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
       
      </div>
    </section>
  );
};

export default Project;

