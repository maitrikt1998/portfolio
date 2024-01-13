import React,{useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const textAnimation = () => {
          const textContainer = document.querySelector(".image-text h1");
          const text = textContainer.innerText;
    
          textContainer.innerHTML = ""; 
    
          const letters = text.split("");
    
          letters.forEach((letter, index) => {
            const letterSpan = document.createElement("span");
            letterSpan.textContent = letter;
    
            letterSpan.style.animationDelay = `${index * 0.2}s`;
            letterSpan.style.animationDuration = "0.5s";
    
            textContainer.appendChild(letterSpan);
          });
    
          // Trigger the animation
          textContainer.classList.add("animate-text");
        };
    
        textAnimation();
      }, []);
    
      return (
        <div className="container" id="home">
          <div className="row align-items-center">
            <div className="image-container">
              <img src="/img/img.jpg" alt="Portfolio" className="img-fluid" />
              <div className="image-text">
                <h1>Hello I am Maitrik Thakkar I am Full Stack Developer</h1>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Home;