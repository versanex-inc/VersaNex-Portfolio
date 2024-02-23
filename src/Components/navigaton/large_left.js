import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LargeLeft = () => {
  return (
    <div className="large_left">
    <div className="logo_copyright">
          <div className="nav_logo cursor-hover-link">
            <Link className="cursor_hover_link" href={"/"}>
              <Image src="/imgs/bgimg1.png" alt="logo" width={40} height={40} />
            </Link>
          </div>
          {/* ===== COPYRIGHT ===== */}
          <div className="home_copyright">
            <p>&copy; VersaNex</p>
          </div>
        </div>
        </div>
  )
}

export default LargeLeft