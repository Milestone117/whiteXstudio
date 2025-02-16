import React from 'react';
import { Camera, Video, Film, Users, Award, Clock, Package } from 'lucide-react';
import './service.css';

function Services() {
  const services = [
    {
      icon: <Camera color="#212ea0" size={48} />,
      title: "Photography",
      description: "Professional photography services for weddings, events, portraits, and commercial projects. We capture your precious moments with artistic excellence.",
      bgImage: "../../assets/photgraphy.jpg" // You'll need to add your actual image paths
    },
    {
      icon: <Video color="#212ea0" size={48} />,
      title: "Videography",
      description: "High-quality video production for corporate events, weddings, music videos, and promotional content. We bring your stories to life.",
      bgImage: "../../assets/videography.jpg"
    },
    {
      icon: <Film color="#212ea0" size={48} />,
      title: "Film Production",
      description: "Complete film production services including scriptwriting, shooting, editing, and post-production. We transform your vision into cinematic reality.",
      bgImage: "../../assets/film.jpg"
    },
    {
      icon: <Users color="#212ea0" size={48} />,
      title: "Event Coverage",
      description: "Comprehensive event documentation with both photography and videography. Perfect for corporate events, conferences, and social gatherings.",
      bgImage: "../../assets/event.jpg"
    },
    {
      icon: <Award color="#212ea0" size={48} />,
      title: "Commercial Shoots",
      description: "Professional product photography and commercial video production for brands. We help showcase your products and services effectively.",
      bgImage: "../../assets/commercial.jpg"
    },
    {
      icon: <Clock color="#212ea0" size={48} />,
      title: "Same Day Edits",
      description: "Quick turnaround editing services for events and special occasions. Get your memories delivered while they're still fresh.",
      bgImage: "/images/same-day-edit-bg.jpg"
    },
    {
      icon: <Package color="#212ea0" size={48} />,
      title: "Equipment Rental",
      description: "Professional camera, lighting, and audio equipment rental services for photographers and filmmakers. High-quality gear for your production needs.",
      bgImage: "../../assets/rental.jpg"
    }
  ];

  return (
    <div className='services'>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-card service-card-${index + 1}`}
          >
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;