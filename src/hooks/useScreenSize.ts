import { useResponsive } from "./useResponsive";

const useScreenSize = () => {
  const isExtraSmallScreen = useResponsive("xs");
  const isSmallScreen = useResponsive("sm");
  const isMediumScreen = useResponsive("md");
  const isLargeScreen = useResponsive("lg");
  const isExtraLargeScreen = useResponsive("xl");

  return {
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isExtraLargeScreen,
  };
};

export default useScreenSize;
