import React, { createContext, useState } from "react";

type ModalContextType = {
  isOneModalOpen: boolean;
  changeToFalseIsOneModalOpen: () => void;
  changeToTrueIsOneModalOpen: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOneModalOpen, setIsOneModalOpen] = useState(false);

  const changeToFalseIsOneModalOpen = () => {
    setIsOneModalOpen(false);
  };

  const changeToTrueIsOneModalOpen = () => {
    setIsOneModalOpen(true);
  };
  return (
    <ModalContext.Provider
      value={{
        isOneModalOpen,
        changeToFalseIsOneModalOpen,
        changeToTrueIsOneModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
