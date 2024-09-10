import React,{ Suspense} from 'react'
import { RightCircleOutlined } from '@ant-design/icons';
import { Link, Navigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Anim from './Anim.jsx'
import code from './code.jpg'
import { useNavigate } from 'react-router-dom';



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
  const navigate = useNavigate();


  return (
    <div className='header'>
      
         <Canvas>
          <ambientLight intensity={-1}/>
          <OrbitControls/>
          <Suspense fallback={null}>
            <Anim/>
          </Suspense>
          <Environment preset='sunset'/>
         </Canvas>
        <div className='nav'>
            
            <img className='log' src={code} alt='logo' onClick={()=>{
              navigate('/')
            }}/>
            <ul className='uls'>
                <li><Link to='/MainTech'>Tech Stack</Link></li>
                <li><Link to='/MainTool'/>Tools</li>
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
