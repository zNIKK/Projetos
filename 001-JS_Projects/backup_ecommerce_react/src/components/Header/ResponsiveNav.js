import { useContext } from "react";
import { Context } from "../contexts/Context";

export default function ResponsiveNav() {
  const { showNavbar, setShowNavbar } = useContext(Context);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = (e) => {
    console.log(e.target.id);
    if (!e.target.id) {
      setShowNavbar(false);
    }
    // if (e.target)
  };

  return (
    <nav>
      <button
        className="responsiveButton"
        onClick={handleShowNavbar}
        type="button"
      >
        {showNavbar ? (
          <img src="./assets/images/icon-close.svg" alt="" />
        ) : (
          <img src="./assets/images/icon-menu.svg" alt="" />
        )}
      </button>
      <img src="/assets/images/logo.svg" alt="logo" />
      <div
        role="button"
        onClick={(e) => closeNavbar(e)}
        tabIndex={0}
        onKeyDown={() => {}}
        className={showNavbar ? "show" : ""}
      >
        <ul id="nav">
          <a href="*">
            <li>Collections</li>
          </a>
          <a href="*">
            <li>Men</li>
          </a>
          <a href="*">
            <li>Women</li>
          </a>
          <a href="*">
            <li>About</li>
          </a>
          <a href="*">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
