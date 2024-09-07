import React from 'react'
import vide from './vide.mp4'
import { RightCircleOutlined } from '@ant-design/icons';


function Header() {
    const inner = document.querySelector('[data-cursor-dot]');
const outer = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  inner.style.transform = `translate(${x}px, ${y}px)`;
  outer.animate({
     left : `${x}px`,
        top : `${y}px`
  },
  {
    duration: 100,
    fill: 'forwards'
  })
});

  return (
    <div className='header'>
      
         <video autoPlay loop muted id="video">
            <source src={vide} type="video/mp4"/>
        </video>
        <div className='nav'>
            
            <h1 className='brand'>Codepect</h1>
            <ul className='uls'>
                <li>Tech Stack</li>
                <li>Tools</li>
                <li>Basics</li>
                <li>Errors</li>
                <li>Contact</li>
                <button className='btn'>Connect  {"  "}  {<RightCircleOutlined/>} </button>
            </ul>
            <div className='mainbrand'>
                <h1 data-text="Codepect">Codepect</h1>
                
            </div>
            <p className='para'>It's not the End, Until You Stop</p>
           
        </div>
        <div className='cards'>
          
        </div>
        
    </div>
  )
}

export default Header
