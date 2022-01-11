import React from "react";
import { useScreenFixedProvider } from "../../contexts/ScreenFixedProvider";
import { useMediaQuery } from "react-responsive";
import { headerData } from "./Helper";

const Header = () => {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  return (
    <>
      <section className="d-flex w-100 navbar-wrapper justify-content-center">
        <Desktop>
          <div className="d-flex align-items-center justify-content-center">
            {headerData.map((item, index) => {
              return (
                <>
                  <li
                    key={index}
                    className={`mx-3 nav-list-items p-2 d-inline-block ${
                      index == 0 ? "active" : ""
                    }`}
                  >
                    <a href={`#${item.url}`}>{item.title}</a>
                  </li>
                  {index == 2 && (
                    <li key={index} className="mx-3 p-2 d-inline-block">
                      <h1>Logo</h1>
                    </li>
                  )}
                </>
              );
            })}
          </div>
        </Desktop>

        {/* OVERLAY HERE  THIS CODE RUN BEFORE 992PX*/}
        <BeforeDesktop>
          <div className={`${showOverlay ? "overlay-active" : ""} overlay-nav`}>
            <div className="nav-bg-light h-screen d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column text-center ">
                <ul className="p-0">
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a className="nav-link fs-2 text-white text-decoration-none">
                        Home
                      </a>
                    </span>
                  </li>
                  <li className=" transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#story"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Story
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#upgrader"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Upgrader
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#roadmap"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Roadmap
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#faq"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        FAQs
                      </a>
                    </span>
                  </li>
                  <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                    <span
                      className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      onClick={() => setShowOverlay(false)}
                    >
                      <a
                        href="#team"
                        className="nav-link fs-2 text-white text-decoration-none"
                      >
                        Team
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <nav className="navbar h-86 navbar-expand-lg navbar-light p-3 w-100">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <h1>Logo</h1>

              <div
                className={`${
                  showOverlay ? "animate" : ""
                } position-relative navbarwrapper  hamburger-icon d-flex flex-column d-lg-none`}
                onClick={() => setShowOverlay(!showOverlay)}
              >
                <span className="first d-inline-block"></span>
                <span className="second d-inline-block"></span>
                <span className="third d-inline-block"></span>
              </div>
            </div>
          </nav>
        </BeforeDesktop>
      </section>
    </>
  );
};

export default Header;
