import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      if (cursor.classList.contains('hover')) {
        cursor.setAttribute(
          'style',
          `top: ${e.pageY - 57}px; left: ${e.pageX - 57}px;`
        );
      } else {
        cursor.setAttribute(
          'style',
          `top: ${e.pageY - 27}px; left: ${e.pageX - 27}px;`
        );
      }
    });

    // CURSOR EXPAND EFFECT ON CLICK
    document.addEventListener('click', () => {
      cursor.classList.add('expand');

      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    });

    // CURSOR HOVER EFFECT ON LINK
    const cursorHoverLinks = document.querySelectorAll('.cursor-hover-link');
    cursorHoverLinks.forEach((link) => {
      link.addEventListener('mouseover', (e) => {
        cursor.classList.add('hover');
      });
      link.addEventListener('mouseout', () => {
        cursor.classList.remove('hover');
      });
    });
  }, []);

  return (
    <div className="cursor"></div>
  );
};

export { CustomCursor };
