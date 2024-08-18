"use client";
import Link from "next/link";
import Image from "next/image";



// Slider styles
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '../globals.css'

import styles from "./slider.module.css";


const Card = ({ name, link, image }) => {
  return (
    <div className={styles.card}>
      <Link href={link}>
        <Image src={image} alt={name} width={1000} height={720} className={styles.img} />
        <p className={styles.par}>{name}</p>
      </Link>

    </div>
    
  );
};

const Slider = ({ name, link, image }) => {
  return (
    
    <Splide
      aria-label="My Favorite Images"
      options={{
        type:'loop', 
        perPage: 3,
        perMove: 1,
        gap:'1rem',
        focus:'center',

      }}
    >
      <SplideSlide>
        <Card name={name[0]} link={link[0]} image={image[0]} />
      </SplideSlide>
      <SplideSlide>
        <Card name={name[1]} link={link[1]} image={image[1]} />
      </SplideSlide>
      <SplideSlide>
        <Card name={name[2]} link={link[2]} image={image[2]} />
      </SplideSlide>
      <SplideSlide>
        <Card name={name[3]} link={link[3]} image={image[3]} />
      </SplideSlide>
      <SplideSlide>
        <Card name={name[4]} link={link[4]} image={image[4]} />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
