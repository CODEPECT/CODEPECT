import React from 'react'
import lot from './lot.json'
import Lottie from 'lottie-react'


function Layout() {

  const slides = [
    "https://tse2.mm.bing.net/th?id=OIP._s4_i4HP9aomqEkBlQK8IgHaJQ&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP._s4_i4HP9aomqEkBlQK8IgHaJQ&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP._s4_i4HP9aomqEkBlQK8IgHaJQ&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP._s4_i4HP9aomqEkBlQK8IgHaJQ&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP._s4_i4HP9aomqEkBlQK8IgHaJQ&pid=Api&P=0&h=180",
  ]

  return (
    <div >
   <div className='maindiv'>
   <Lottie animationData={lot} loop={true}/>
   <div className='divss'>
    <h1 className='heads'>
      Welcome to Codepect
    </h1>
    <p className='paras'>
      This is a platform where you can learn <br/>about the latest technologies and tools. 
      We provide you with the best<br/> content to learn and grow in the field of technology.
    </p>
    <div className='buttons'>
    <button className='btns'>
      Nightmare
    </button>
    <button className='btns'>
      Practice 
    </button>
    </div>
   </div>
   </div>
      <div className='about'>
        <p>We at</p>
        <h2>Codepect Brings you the Latest Technology that are used in Industry, It let's you create Wonderful Projects .</h2>
      </div>
   </div>
    
  )
}

export default Layout
