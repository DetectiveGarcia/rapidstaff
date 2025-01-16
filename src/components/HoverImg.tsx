import { motion } from "framer-motion";

interface HoverImgProps {
  img: string;
  children: string;
}
export const HoverImg = ({ children, img }: HoverImgProps) => {
  return (
    <>
      <div className="w-80 h-80 flex items-center justify-center overflow-hidden relative z-0 shadow-md rounded-lg ">
        <motion.img
          src={img}
          alt=""
          initial={{ opacity: 0.8 }}
          className="object-cover w-full h-full -z-10 absolute "
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <p>{children}</p>
      </div>
    </>
  );
};
