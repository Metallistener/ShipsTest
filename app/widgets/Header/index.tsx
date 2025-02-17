import type { FC } from "react";
import LogoSvg from "~/assets/svg/Logo.svg?react";

export const Header: FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-[60px] flex items-center z-[1] px-[24px] py-[16px]">
      <LogoSvg />
    </div>
  );
};
