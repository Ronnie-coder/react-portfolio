import "./works.scss"
import { useState } from 'react';

export default function Works() {
  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide data
  const slides = [
    {
      title: "Crafting Digital Excellence",
      description: "I specialize in building websites that blend aesthetics with functionality, ensuring an exceptional user experience.",
      leftImage: "assets/globe.png",
      rightImage: "assets/web.png"
    },
    {
      title: "Web Artistry Unleashed",
      description: "My websites are a fusion of design and technology, crafted to captivate and engage users effectively.",
      leftImage: "assets/globe.png",
      rightImage: "assets/web2.png"
    },
    {
      title: "Elevating Online Presence",
      description: "I create websites that not only look great but also perform seamlessly, enhancing your brand's digital footprint.",
      leftImage: "assets/globe.png",
      rightImage: "assets/web3.png"
    }
  ];

  // Function to handle slide navigation
  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
    } else {
      setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
    }
  };

  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {slides.map((slide, index) => (
          <div className="container" key={index}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={slide.leftImage} alt="" />
                  </div>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <span>Standout Designs</span>
                </div>
              </div>
              <div className="right">
                <img src={slide.rightImage} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img 
        src="assets/arrow.png" 
        className="arrow left" 
        alt="Previous slide" 
        onClick={() => handleClick("left")}
      />
      <img 
        src="assets/arrow.png" 
        className="arrow right" 
        alt="Next slide" 
        onClick={() => handleClick("right")}
      />
    </div>
  );
}