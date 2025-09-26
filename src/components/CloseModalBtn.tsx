import { X } from "lucide-react";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

interface CloseModalBtnProps {
  closeModalOpen: () => any;
}

export default function CloseModalBtn({ closeModalOpen }: CloseModalBtnProps) {
  const modal = useContext(ModalContext);

  return (
    <button
      onClick={() => {
        modal?.changeToFalseIsOneModalOpen();
        closeModalOpen();
      }}
    >
      <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
    </button>
  );
}
