'use client'

//IMPORTS REACT/NEXT:
import {useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
//IMPORTS DEPENDENCIES:
//IMPORTS CONTEXT:
//IMPORTS HOOKS:
//IMPORTS COMPONENTS:
//IMPORTS IMAGES:
//IMPORTS STYLES:


const BeatportLogo = ({ width, height }) => (
    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 686.7 200.6" width={width} height={height}>
      <g id="Layer_1" data-name="Layer 1">
        <path className="cls-1" d="M227.8,75.7c10.6,0,18.9,2.2,24.8,6.7,5.9,4.4,8.8,10.6,8.8,18.6,0,5.8-1.5,10.6-4.6,14.4-3.1,3.7-7.6,6.3-13.4,7.6,14.5,2.5,21.8,10.1,21.8,22.9,0,8.4-3.1,15-9.4,19.8-6.2,4.8-15.1,7.2-26.7,7.2h-36.9v-97.1h35.6v-.1ZM208.1,116.9h20.1c5.5,0,9.7-1.2,12.7-3.7s4.5-5.9,4.5-10.3-1.5-7.7-4.5-10.2-7.2-3.7-12.7-3.7h-20.1v27.9h0ZM208.1,159.4h21.1c6.3,0,11.1-1.3,14.5-3.8s5.1-6.1,5.1-10.6-1.7-8.4-5.1-11c-3.4-2.6-8.2-3.9-14.4-3.9h-21.1v29.3h-.1Z"/>
        <path className="cls-1" d="M271.8,118.2c2.9-5.5,7-9.8,12.2-12.8s11.2-4.5,18-4.5,12.9,1.4,18.1,4.2,9.3,6.7,12.3,11.8,4.6,11.1,4.6,17.9c0,1.9-.1,3.7-.4,5.7h-53.6v.8c.4,6.2,2.3,11.1,5.8,14.7,3.5,3.6,8.2,5.4,14,5.4,4.6,0,8.5-1.1,11.7-3.3,3.1-2.2,5.2-5.2,6.2-9.2h15c-1.3,7.2-4.8,13.1-10.5,17.8-5.7,4.6-12.8,6.9-21.3,6.9-7.4,0-13.9-1.5-19.4-4.5s-9.8-7.2-12.8-12.7-4.5-11.8-4.5-19c.3-7.2,1.7-13.7,4.6-19.2h0ZM321.9,129.6c-.6-5.2-2.7-9.2-6.2-12.1-3.5-2.9-7.8-4.4-13.1-4.4-4.9,0-9.1,1.5-12.7,4.5-3.6,3-5.6,7-6.2,12h38.2Z"/>
        <path className="cls-1" d="M411.6,159.8v13h-7.9c-4.6,0-8-1-10-2.9s-3-4.8-3-8.5c-5.4,8.1-13.2,12.2-23.4,12.2-8,0-14.3-1.8-19.1-5.5s-7.2-8.8-7.2-15.3c0-7.3,2.6-12.9,7.8-16.9,5.2-3.9,12.7-5.9,22.6-5.9h17.9v-4.3c0-4-1.4-7.1-4.2-9.4-2.8-2.3-6.6-3.4-11.5-3.4-4.3,0-7.9,1-10.8,2.8-2.8,1.9-4.5,4.4-5.1,7.6h-14.7c.7-7.1,3.9-12.6,9.4-16.6,5.5-3.9,12.8-5.9,21.8-5.9,9.5,0,16.9,2.2,22.1,6.7,5.2,4.4,7.8,10.8,7.8,19.1v28c0,3.3,1.6,5,4.7,5l2.8.2h0ZM389.1,141.2h-18.6c-4.6,0-8.2.9-10.7,2.7s-3.7,4.5-3.7,8c0,3.1,1.2,5.5,3.5,7.4,2.4,1.9,5.6,2.8,9.6,2.8,6.2,0,11-1.7,14.5-5s5.2-7.8,5.3-13.3v-2.6h.1Z"/>
        <path className="cls-1" d="M418.8,115h-12.3v-13.2h12.3v-19.8h15.1v19.8h17.1v13.2h-17.1v37c0,2.8.6,4.7,1.7,5.9,1.1,1.2,3,1.7,5.7,1.7h11.4v13.2h-14.4c-6.8,0-11.7-1.6-14.8-4.7-3.1-3.1-4.6-8-4.6-14.6l-.1-38.5h0Z"/>
        <path className="cls-1" d="M513.3,105.3c5.1,2.9,9.1,7.1,11.9,12.6,2.9,5.5,4.3,12,4.3,19.4s-1.4,13.6-4.3,19.1-6.8,9.8-11.9,12.8-10.9,4.5-17.3,4.5c-5.3,0-9.8-1-13.7-2.9-3.9-1.9-7-4.6-9.3-7.9v37.7h-15v-98.8h13l1.8,10.5c5.7-7.6,13.5-11.4,23.2-11.4,6.4.1,12.2,1.5,17.3,4.4ZM508.5,154.4c3.8-4.4,5.8-10.1,5.8-17.1s-1.9-12.7-5.8-17.1c-3.8-4.3-8.9-6.5-15.1-6.5s-11.2,2.1-15,6.5c-3.8,4.3-5.7,9.9-5.7,16.9s1.9,12.9,5.7,17.3c3.8,4.4,8.8,6.7,15,6.7,6.3-.1,11.3-2.3,15.1-6.7Z"/>
        <path className="cls-1" d="M550.7,169.2c-5.5-3-9.8-7.3-12.8-12.8s-4.5-11.9-4.5-19.1,1.5-13.4,4.5-18.9,7.3-9.8,12.8-12.8,11.8-4.6,18.9-4.6,13.4,1.5,18.9,4.6c5.5,3,9.8,7.3,12.8,12.8s4.5,11.8,4.5,18.9-1.5,13.6-4.5,19.1-7.3,9.8-12.8,12.8-11.8,4.5-18.9,4.5-13.4-1.5-18.9-4.5ZM584.8,154.3c3.8-4.4,5.8-10.1,5.8-17s-1.9-12.6-5.8-17c-3.8-4.4-8.9-6.6-15.2-6.6s-11.3,2.2-15.1,6.6c-3.8,4.4-5.7,10.1-5.7,17s1.9,12.6,5.7,17,8.8,6.6,15.1,6.6,11.4-2.2,15.2-6.6Z"/>
        <path className="cls-1" d="M648.8,101.8v14h-6.7c-6.2,0-10.7,2-13.5,6s-4.2,9.1-4.2,15.3v35.7h-15v-71h13.3l1.7,10.7c2-3.3,4.7-5.9,7.9-7.8,3.2-1.9,7.6-2.8,13-2.8l3.5-.1h0Z"/>
        <path className="cls-1" d="M652.9,82h15v19.8h17.2v13.2h-17.2v37c0,2.8.6,4.7,1.7,5.9s3,1.7,5.7,1.7h11.4v13.2h-14.4c-6.8,0-11.7-1.6-14.7-4.7-3.1-3.1-4.6-8-4.6-14.6l-.1-71.5h0Z"/>
        <path className="cls-1" d="M141.2,124.1c0,28.1-22.5,50.8-51.1,50.8s-50.8-22.2-50.8-50.8c0-13.5,5.1-25.4,13.3-34.4l-34.5,34.4L0,106.1l38.9-38.4c5.3-5.3,8-12.1,8-19.6V0h25.5v48.1c0,14.8-5.3,27.3-15.5,37.5l-1.1,1.1c9-8.2,21.3-13.2,34.4-13.2,29,.1,51.1,23,51,50.6h0ZM118.1,124.1c0-15.1-12.6-27.3-28-27.3s-27.7,12.8-27.7,27.3,12.3,27.6,27.7,27.6c15.5,0,28-12.9,28-27.6Z"/>
      </g>
    </svg>
  );
  
  export default BeatportLogo;