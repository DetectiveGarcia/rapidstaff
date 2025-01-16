import React from "react";


interface SectionProps {
  img?: string;
  children: React.ReactNode;
  
}

const Section: React.FC<SectionProps> = ({ children, img }) => {

  const bgImg = () => {
    return img ? {backgroundImage: `url(${img})`, backgroundPosition: '50% 50%', boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.1)"} : {};
  }

  return (
    <section className="text-lg flex flex-col items-center bg-stone-100 py-20 " style={bgImg()}>
      <div className="max-w-4xl px-3 ">{children}</div>
    </section>
  );
};

export default Section;
