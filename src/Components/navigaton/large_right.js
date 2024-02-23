import React from 'react'
import Link from 'next/link'

const LargeRight = () => {
  return (
    <div className="large_right">
    <div className="navigation">
          <div className="nav_links link_profile">
            <Link
              className="nav_link cursor-hover-link"
              href={"/about"}
            >
              ABOUT
            </Link>
          </div>
          <div className="nav_links link_wroks">
            <Link
              className="nav_link cursor-hover-link"
              href={"/projects"}
            >
              PROJECTS
            </Link>
          </div>
          <div className="nav_links link_contactme">
            <Link
              className="nav_link cursor-hover-link"
              href={"/contact"}
            >
              CONTACT
            </Link>
          </div>
        </div>
        </div>
  )
}

export default LargeRight