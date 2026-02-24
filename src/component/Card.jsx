import React from "react";
import '../index.css';



const Card = ({ image, title, content, aosDelay, role, tools=[], link, className }) => { 
 
  return (
    
    <div className={`card ${className}`}
     data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={aosDelay}
      >
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-[300px] h-[200px] rounded transition-transform duration-300 rounded-t-2xl" 
        />
      )}
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <h6 className="text-sm font-medium text-gray-300">{role}</h6>
      <p className="text-sm mb-6 whitespace-pre-line">{content}</p>


       <ul className="list-disc pl-5 mb-4">
        {tools.map((tool, idx) => (
          <li key={idx}>{tool}</li>
        ))}
      </ul>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
          Visit Project
        </a>
      )}
    
  </div>

  )

  
}

export default Card;



