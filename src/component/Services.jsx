import React from 'react'
import Card from './Card';
import { CardsSection } from '../data/contentData'
import '../index.css';


const Services = () => {


  return (
   <section className="bg-gray-900" id="services">
     <div className='container mx-auto px-4 py-8'>
      <div className="text-center mb-10">
          <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-400">
            WHAT I DO
          </h4>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 underline underline-offset-8">
            Services
          </h2>
        <p className="max-w-2xl mx-auto leading-relaxed sm:text-lg text-gray-300">
          Driving product vision from concept to market success, building quality into every stage of development and creating engaging, high-performance user interfaces.
        </p>
     </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
     >
      {CardsSection.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          // role={card.role}
          content={card.content}
          aosDelay={card.aosDelay}
          className='services-card'
          
        />
      ))}
    </div>
    </div>
   </section>
  )
}

export default Services;

// className=" text-white cursor-default
//                 border-l-[3px] border-[var(--accent)]
//                 hover:border-r-[3px]
//                 hover:-translate-y-[15px]
//                 group-hover:scale-110"
      


  // "bg-[#2E7D32] border-l-[3px] border-green-400 hover:border-r-[3px] hover:translate-y-[-15px] cursor-default transition-all duration-300 text-white",
  // "bg-[#6A1B9A] border-l-[3px] border-purple-400 hover:border-r-[3px] hover:translate-y-[-15px] cursor-default transition-all duration-300 text-white"

 //   const cardStyles = [
//   "bg-[#1F4E79] border-l-[3px] border-[var(--accent)] hover:border-r-[3px] hover:translate-y-[-15px] cursor-default transition-all duration-300 text-white",
// ];