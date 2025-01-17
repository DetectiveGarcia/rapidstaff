import React, { useEffect } from "react";
import ReactPortal from "./ReactPortal";
interface ContactModalProps {
  showModal: boolean;
  children: React.ReactNode;
  handleCloseModal: () => void;
}

const ContactModal = ({
  showModal,
  handleCloseModal,
  children,
}: ContactModalProps) => {
  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      e.key === "Escape" ? handleCloseModal() : null;
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [handleCloseModal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <ReactPortal wrapperId="modal-root">
      <>
      <div className="fixed top-0 left-0 w-screen h-screen  bg-neutral-800 opacity-50" />
        <div 
        className="fixed rounded flex flex-col box-border min-w-fit overflow-hidden p-5 bg-zinc-800 inset-y-32 inset-x-10 "
        >
          <button
            onClick={() => handleCloseModal()}
            className="py-2 px-8 self-end font-bold hover:bg-yellow-500 border rounded-lg border-yellow-500 text-stone-50 hover:text-black hover:border-white"
          >
            Stäng
          </button>
          <div className="box-border h-5/6 text-stone-50 flex flex-col" >{children}</div>
        </div>
      </>
    </ReactPortal>
  );
};

export default ContactModal;