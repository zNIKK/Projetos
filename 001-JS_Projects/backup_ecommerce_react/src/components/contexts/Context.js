import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";

export const Context = createContext();

export default function ProductContext({ children }) {
  const [arr, setArr] = useState([]);
  const [isHide, setIsHide] = useState(false);
  const [img, setImg] = useState(1);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const newArray = [];
    for (let num = 1; num <= 4; num += 1) {
      const obj = { img: num, marked: false };
      newArray.push(obj);
      newArray[0].marked = true;
    }
    setArr([...newArray]);
  }, []);

  const value = useMemo(
    () => ({
      showNavbar,
      setShowNavbar,
      img,
      setImg,
      isHide,
      setIsHide,
      arr,
      setArr,
    }),
    [arr, isHide, img, showNavbar]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

ProductContext.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
