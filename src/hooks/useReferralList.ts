import { useContext } from "react";
import { ReferralBuilderContext } from "../store/ReferralBuilderContext";

export const useReferralList = () => {
  const context = useContext(ReferralBuilderContext);
  if (!context) {
    throw new Error("useReferralList must be within a ReferralListProvider");
  }
  return context;
};
