import { FaBars, FaMapPin, FaPhone, FaClock, FaWhatsapp } from "react-icons/fa6"
import {NavLink} from 'react-router-dom'
export default function Navbar() {
    return (
      <>
        <div className="flex glass flex-row justify-between items-center">
          <div className="flex flex-row ">
            <p className="flex m-2 text-xs items-center">
              <FaMapPin className="m-1 text-primary" /> Bamako, Rue 530
            </p>
            <p className="flex m-2 text-xs items-center">
              <FaClock className="m-1 text-primary" /> Disponible
              aujourd&apos;hui de 9h à 12h30 et de 14h à 19h30
            </p>
          </div>
          <div className="flex flex-row">
            <p className="flex m-2 text-xs items-center">
              <FaPhone className="m-1 text-primary" /> +223 70 00 00 00
            </p>
            <a
              target="_blank"
              href="https://wa.me/905364613555"
              className="btn hidden lg:flex btn-sm btn-primary text-sm"
            >
              <FaWhatsapp className="h-5 w-5" /> Contacter Maitre Hamidou
            </a>
          </div>
        </div>
        <div className="navbar sticky top-0 glass z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <FaBars className="h-5 w-5" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive
                        ? ' bg-primary text-base-100'
                        : isPending
                        ? ' bg-secondary'
                        : ''
                    }
                    to="/"
                  >
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive
                        ? ' bg-primary text-base-100'
                        : isPending
                        ? ' bg-secondary'
                        : ''
                    }
                    to="/team"
                  >
                    Equipe
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive
                        ? ' bg-primary text-base-100'
                        : isPending
                        ? ' bg-secondary'
                        : ''
                    }
                    to="/honoraries"
                  >
                    Honoraires
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive
                        ? ' bg-primary text-base-100'
                        : isPending
                        ? ' bg-secondary'
                        : ''
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to={'/'} className="btn btn-ghost text-xl">
              {' '}
              <img src="/logo.png" width={60} />{' '}
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/"
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/team"
                >
                  Equipe
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/honoraries"
                >
                  Honoraires
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? ' bg-primary text-base-100'
                      : isPending
                      ? ' bg-secondary'
                      : ''
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
}