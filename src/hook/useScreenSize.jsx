import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateScreenSize } from "../features/modal/ScreenSizeSlice";

const useScreenSize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateScreenSize());

    const handleResize = () => {
      dispatch(calculateScreenSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const isSmallScreen = useSelector((state) => state.screenSize.isSmallScreen);

  return { isSmallScreen };
};

export default useScreenSize;
