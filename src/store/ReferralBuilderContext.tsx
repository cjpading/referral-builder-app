import { createContext, ReactNode, useState } from "react";
import ReferralBuilder from "../types/request/ReferralBuilder";

interface ReferralContext {
  referralDataList: ReferralBuilder[];
  setReferralDataList: (referralBuilder: ReferralBuilder[]) => void;
}

interface ReferralProviderProps {
  children: ReactNode;
}

export const ReferralBuilderContext = createContext<
  ReferralContext | undefined
>(undefined);

export const ReferralBuilderProvider: React.FC<ReferralProviderProps> = ({
  children,
}) => {
  const [referralDataList, setReferralDataList] = useState<ReferralBuilder[]>(
    []
  );

  return (
    <ReferralBuilderContext.Provider
      value={{ referralDataList, setReferralDataList }}
    >
      {children}
    </ReferralBuilderContext.Provider>
  );
};
