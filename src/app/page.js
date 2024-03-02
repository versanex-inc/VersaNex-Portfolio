"use client";
import { CustomCursor } from "@/Components/customCursor";
import LargeLeft from "@/Components/navigaton/large_left";
import LargeRight from "@/Components/navigaton/large_right";
import NavSmall from "@/Components/navigaton/nav_small";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const imgRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      imgRef.current.style.opacity = 1;
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className={styles.home}>
      <CustomCursor />
      <LargeLeft />
      <LargeRight />
      <NavSmall />
      <div className={styles.home_content}>
        <div className={styles.home_info}>
          <div className={styles.row_one}>
            <p className={styles.text_one}>PROGRAMMING & GFX DESIGNING</p>
            <p className={styles.text_two}>
              <span className={styles.bracket}>&#x7B;</span> BASED-IN-PAKISTAN{" "}
              <span className={styles.bracket}>&#125;</span>
            </p>
          </div>
          <div className={styles.row_two_bg}>
          <div ref={imgRef} className={styles.home_bg_img}>
              <Image
                src="/imgs/bgimg1.png"
                alt="background image"
                width={1200}
                height={840}
              />
            </div>
            <div className={styles.row_two}>
            <p className={styles.text_three}>VersaNex</p>
            <p className={styles.text_four}>
              <span className={styles.bracket}>&#x7B;</span> PORTFOLIO{" "}
              <span className={styles.bracket}>&#125;</span>
            </p>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
