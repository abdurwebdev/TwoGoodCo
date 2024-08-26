import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import '../styles/loco.css'
import gsap from 'gsap';
const PageOne = () => {
    const imageRef = useRef();
    const elemOneRef = useRef();
    const elemTwoRef = useRef();
    const elemThreeRef = useRef();
    const elemFourRef = useRef();
    useEffect(() => {
      const handleMouseMove = (events) =>{
        gsap.to(".cursor",{
          x:events.clientX,
          y:events.clientY
        })
      }
      const image=imageRef.current;
      image.addEventListener("mousemove",handleMouseMove);
      return () => {
        image.removeEventListener("mousemove",handleMouseMove);
      }
    }, [])
    
    useEffect(() => {
        const scroll = new LocomotiveScroll({
          el: document.querySelector('#pageTwo'),
          smooth: true,
        });
    
        return () => {
          if (scroll) scroll.destroy();
        };
      }, []);
     useEffect(() => {
       const handleMouseEnter = () =>{
        gsap.to(".cursorOne",{
          opacity:1,
          scale:1
        })
       
        
       
       }
       const handleMouseEnterTwo = () =>{
        gsap.to(".cursorTwo",{
          opacity:1,
          scale:1
        })
       }
       const handleMouseEnterThree = () =>{
        gsap.to(".cursorThree",{
          opacity:1,
          scale:1
        })
       }
       const handleMouseEnterFour = () =>{
        gsap.to(".cursorFour",{
          opacity:1,
          scale:1
        })
       }
       const handleMouseLeave = () =>{
        gsap.to(".cursorOne",{
          opacity:0,
          scale:0
        })
       
        
       
       }
       const handleMouseLeaveTwo = () =>{
        gsap.to(".cursorTwo",{
          opacity:0,
          scale:0
        })
       }
       const handleMouseLeaveThree = () =>{
        gsap.to(".cursorThree",{
          opacity:0,
          scale:0
        })
       }
       const handleMouseLeaveFour = () =>{
        gsap.to(".cursorFour",{
          opacity:0,
          scale:0
        })
       }
       const handleMouseMove = (events) =>{
        gsap.to(".cursorOne",{
          x:events.clientX-100,
          y:events.clientY-300
        })
       }
       const handleMouseMoveTwo = (events) =>{
        gsap.to(".cursorTwo",{
          x:events.clientX-750,
          y:events.clientY-300
        })
       }
       const handleMouseMoveThree = (events) =>{
        gsap.to(".cursorThree",{
          x:events.clientX-150,
          y:events.clientY-300
        })
       }
       const handleMouseMoveFour = (events) =>{
        gsap.to(".cursorFour",{
          x:events.clientX-720,
          y:events.clientY-300
        })
       }
       const elemOne=elemOneRef.current;
       const elemTwo=elemTwoRef.current;
       const elemThree=elemThreeRef.current;
       const elemFour=elemFourRef.current;
       elemOne.addEventListener("mouseenter",handleMouseEnter);
       elemTwo.addEventListener("mouseenter",handleMouseEnterTwo);
       elemThree.addEventListener("mouseenter",handleMouseEnterThree);
       elemFour.addEventListener("mouseenter",handleMouseEnterFour);
       elemOne.addEventListener("mouseleave",handleMouseLeave);
       elemTwo.addEventListener("mouseleave",handleMouseLeaveTwo);
       elemThree.addEventListener("mouseleave",handleMouseLeaveThree);
       elemFour.addEventListener("mouseleave",handleMouseLeaveFour);
       elemOne.addEventListener("mousemove",handleMouseMove);
       elemTwo.addEventListener("mousemove",handleMouseMoveTwo);
       elemThree.addEventListener("mousemove",handleMouseMoveThree);
       elemFour.addEventListener("mousemove",handleMouseMoveFour);
       return () => {
        elemOne.removeEventListener("mouseenter",handleMouseEnter);
        elemTwo.removeEventListener("mouseenter",handleMouseEnterTwo);
        elemThree.removeEventListener("mouseenter",handleMouseEnterThree);
        elemFour.removeEventListener("mouseenter",handleMouseEnterFour);
        elemOne.addEventListener("mouseleave",handleMouseLeave);
       elemTwo.addEventListener("mouseleave",handleMouseLeaveTwo);
       elemThree.addEventListener("mouseleave",handleMouseLeaveThree);
       elemFour.addEventListener("mouseleave",handleMouseLeaveFour);
        elemOne.removeEventListener("mousemove",handleMouseMove);
        elemTwo.removeEventListener("mousemove",handleMouseMoveTwo);
        elemThree.removeEventListener("mousemove",handleMouseMoveThree);
        elemFour.removeEventListener("mousemove",handleMouseMoveFour);
       }
     }, [])
     
  return (
    <main >
      <div id="pageOne" className="page-one w-full py-32 relative h-screen bg-white" >
        <h1 className="text-[14vw] tracking-tighter leading-[15vw]" >CHANGE</h1>
        <h1 className="text-[14vw] tracking-tighter leading-[15vw]" >THE COURSE</h1>
      </div>

      <div id="pageTwo" className="w-full px-5 relative h-screen bg-white" >
        <div className="w-20 cursor  absolute h-20 text-white bg-black flex items-center justify-center rounded-full">
          <h1>PLAY</h1>
        </div>
        <img
          ref={imageRef}
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div id="pageThree" className="relative w-full h-screen flex items-center justify-evenly" >
        <div className="box w-96 h-[90vh] bg-blue-400">
          <div data-scroll data-scroll-speed={0.2} className="inner absolute top-72 left-32 w-48 h-7 rounded-full bg-red-300"></div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/9032e317a6741221ae543fdae5d05160819f9a44-1500x2250.jpg/DSC0079_Dexter%20Kim.jpg?rect=0,0,1500,2008&fp-x=0.47794117647058826&fp-y=0.4461323529411765&w=640&h=1067&fit=crop&crop=focalpoint&auto=format"
            alt=""
          />
        </div>

        <div className="box w-96 h-[90vh] relative bg-yellow-200" >
          <div data-scroll data-scroll-speed={0.2} className="inner absolute top-64 left-32 w-48 h-7 rounded-full bg-red-300"></div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=276,0,4952,8256&w=640&h=1067&fit=min&auto=format"
            alt=""
          />
        </div>

        <div className="box w-96 h-[90vh] bg-purple-400 relative" >
          <div data-scroll data-scroll-speed={0.2} className="inner w-48 h-7 absolute top-64 left-32 rounded-full bg-red-300"></div>
          <img
            className="w-full h-full object-cover"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
            alt=""
          />
        </div>
      </div>

      <div id="pageFour" className="relative overflow-hidden w-full h-[150vh] " >
        <div className='flex items-center mb-10 justify-evenly'>
          <div ref={elemOneRef}  className='w-[600px] h-96 flex items-center justify-center relative'>
            <img className='w-96 z-50 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format" alt="" />
            <div  className='cursorOne z-0 w-56 scale-0 opacity-0 h-56 absolute bg-red-900 rounded-full'></div>
          </div>
          <div ref={elemTwoRef} className='w-[600px] h-96 flex items-center justify-center relative '>
          <img className='w-96 z-50 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format" alt="" />
          <div  className='cursorTwo w-56 scale-0 opacity-0 h-56 absolute bg-red-800 rounded-full'></div>
          </div>
        </div>
        <div className='flex items-center justify-evenly '>
          <div ref={elemThreeRef} className='w-[600px] h-96 flex items-center justify-center relative '>
          <img className='w-96 z-50 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format" alt="" />
          <div  className='cursorThree w-56 h-56 scale-0 opacity-0 absolute bg-red-400 rounded-full'></div>
          </div>
          <div ref={elemFourRef} className='w-[600px] h-96 flex items-center justify-center relative '>
          <img className='w-96 z-50 h-96 object-cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format" alt="" />
          <div  className='cursorFour w-56 h-56 scale-0 opacity-0 absolute bg-red-100 rounded-full'></div>
          </div>
        </div>
      </div>

      <div id="pageFive" className='w-full h-screen bg-[#111] flex items-center justify-center text-white'>
        <h1>Footer</h1>
      </div>
    </main>
  );
};

export default PageOne;
