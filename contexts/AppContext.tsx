import { createContext, ReactNode, useContext, useState } from 'react';

type appContextType = {
  showModal: boolean;
  handlerCloseModal: () => void;
  handlerOpenModal: () => void;
  isOnSubmit: boolean;
  handlerOnSubmit: () => void;
};

const defaultValues: appContextType = {
  showModal: false,
  handlerCloseModal: () => null,
  handlerOpenModal: () => null,
  handlerOnSubmit: () => null,
  isOnSubmit: false,
};

const appContext = createContext<appContextType>(defaultValues);

export const useAppContext = () => {
  return useContext(appContext);
};

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [isOnSubmit, setIsOnSubmit] = useState(false);
  function handlerCloseModal() {
    setShowModal(false);
  }

  function handlerOpenModal() {
    setShowModal(true);
  }

  function handlerOnSubmit() {
    setIsOnSubmit((state) => !state);
  }

  return (
    <appContext.Provider
      value={{
        showModal,
        handlerCloseModal,
        handlerOpenModal,
        isOnSubmit,
        handlerOnSubmit,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
