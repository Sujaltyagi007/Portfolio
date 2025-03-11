import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseFollowAnimation = () => {
  const circleRef = useRef(null);
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(circleRef.current, {
        duration: 0.4,
        x: mouseX - 20 ,
        y: mouseY - 20 ,
      });
    };
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className=' z-50'
      style={{
        position: 'fixed',
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(252, 186, 3, 0.8)',
        borderRadius: '50%',
        pointerEvents: 'none', 
      }}
    ></div>
  );
};

export default MouseFollowAnimation;
