"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const imgRef = useRef(null);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     imgRef.current.style.opacity = 1;
  //   }, 500);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  return (
    <main>
      home
    </main>
  );
}
