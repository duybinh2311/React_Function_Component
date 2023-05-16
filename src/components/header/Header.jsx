import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="nav p-3 bg-dark text-white">
      {/* Home */}
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={''}
      >
        Home
      </NavLink>
      {/* Login */}
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/login'}
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/usestate'}
      >
        Use State
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/useeffect'}
      >
        Use Effect
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/usecallback'}
      >
        Use CallBack
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/usememo'}
      >
        Use Memo
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
        }
        to={'/useref'}
      >
        Use Ref
      </NavLink>
      {/* Dropdown Menu */}
      {/* <div className="dropdown">
        <button
          className="nav-link text-white dropdown-toggle"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Redux
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <NavLink className="dropdown-item" to={'/api'}>
            API State
          </NavLink>
          <NavLink className="dropdown-item" to={'/api-redux'}>
            API - Redux State
          </NavLink>
        </div>
      </div> */}
    </nav>
  )
}
