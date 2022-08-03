import React, { createContext, ReactNode, useContext, useState } from 'react';

type appContextType = {
  showModal: boolean;
  isOnSubmit: boolean;
  loading: boolean;
  disabled: boolean;
  cookieAccept: boolean;
  openSideBar: boolean;
  setCookieIsAccept: (state: boolean) => void;
  CloseModal: () => void;
  OpenModal: () => void;
  handlerOnSubmit: () => void;
  handlerLoading: () => void;
  setDisabledFields: (state: boolean) => void;
  toggleDrawer: (open: boolean) => void;
};

const defaultValues: appContextType = {
  disabled: false,
  showModal: false,
  isOnSubmit: false,
  loading: false,
  cookieAccept: false,
  openSideBar: false,
  setCookieIsAccept: () => false,
  handlerLoading: () => null,
  CloseModal: () => null,
  OpenModal: () => null,
  handlerOnSubmit: () => null,
  setDisabledFields: () => false,
  toggleDrawer: () => null,
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
  const [disabled, setDisabled] = useState(false);
  const [cookieAccept, setCookieAccept] = useState(false);
  function CloseModal() {
    setShowModal(false);
  }

  function OpenModal() {
    setShowModal(true);
  }

  function handlerOnSubmit() {
    setIsOnSubmit((state) => !state);
  }
  function handlerLoading() {
    setLoading((state) => !state);
  }

  function setDisabledFields(state: any) {
    setDisabled(state);
  }

  function setCookieIsAccept(state: any) {
    setCookieAccept(state);
  }
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleDrawer = (open: boolean) => {
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
    };
    setOpenSideBar(open);
  };

  return (
    <appContext.Provider
      value={{
        toggleDrawer,
        openSideBar,
        loading,
        showModal,
        disabled,
        isOnSubmit,
        setCookieIsAccept,
        cookieAccept,
        handlerLoading,
        setDisabledFields,
        CloseModal,
        OpenModal,
        handlerOnSubmit,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
