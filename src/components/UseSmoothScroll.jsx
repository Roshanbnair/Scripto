import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useSmoothScroll = (offset = 100) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }
  }, [location, offset]);
};

export default useSmoothScroll;
