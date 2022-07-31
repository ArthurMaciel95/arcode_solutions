import { createContext, ReactNode, useContext, useState } from 'react';

type appContextType = {
  showModal: boolean;
  isOnSubmit: boolean;
  loading: boolean;
  handlerCloseModal: () => void;
  handlerOpenModal: () => void;
  handlerOnSubmit: () => void;
  handlerLoading: () => void;
};

const defaultValues: appContextType = {
  showModal: false,
  isOnSubmit: false,
  loading: false,
  handlerLoading: () => null,
  handlerCloseModal: () => null,
  handlerOpenModal: () => null,
  handlerOnSubmit: () => null,
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
  const [loading, setLoading] = useState(false);
  function handlerCloseModal() {
    setShowModal(false);
  }

  function handlerOpenModal() {
    setShowModal(true);
  }

  function handlerOnSubmit() {
    setIsOnSubmit((state) => !state);
  }
  function handlerLoading() {
    setLoading((state) => !state);
  }

  return (
    <appContext.Provider
      value={{
        handlerLoading,
        loading,
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
