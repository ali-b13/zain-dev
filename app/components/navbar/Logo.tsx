import Image from "next/image";
import React from "react";
import logoSrc from "@/public/zain-logo.png";
const WebsiteLogo = ({ className }: { className: string }) => {
  return (
    <div className={`flex justify-center items-center gap-2 ${className}`}>
      <Image
        width={30}
        height={30}
        className="w-10 h-10"
        alt="شعار الشركة"
        src={logoSrc}
      />
      <span className="font-extrabold  text-xl ">زين التنموية</span>
    </div>
  );
};

export default WebsiteLogo;
