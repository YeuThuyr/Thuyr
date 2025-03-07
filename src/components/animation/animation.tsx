'use client';
import { useEffect } from 'react';
import styles from './page.module.css';


const ScrollingAnimation = () => {
  return (
    useEffect(() => {
      (
        async () => {
          const Lenis = (await import('lenis')).default;
          const lenis = new Lenis();
        }
      )()
    },[])
  )
}
export default ScrollingAnimation;