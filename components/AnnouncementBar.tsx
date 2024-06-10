// components/AnnouncementBar.tsx
import Image from "next/image";
import React from "react";
import LaptopIcon from "../public/laptpop.svg";


interface AnnouncementBarProps {
  message: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ message }) => {
  return (
    <div
      style={{
        zIndex: 1,
        backgroundColor: "#3B82F6", // Tailwind's blue-500
        color: "white",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "100vw",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div
        style={{
          display: 'inline-block',
          paddingLeft: "100%",
          animation: "marquee 20s linear infinite",
        }}
      >
       📢 {message} 💻
      </div>
      <style jsx>{`
      
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
