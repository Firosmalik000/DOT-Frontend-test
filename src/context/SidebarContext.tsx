import { useState, createContext, ReactNode } from 'react';

interface SidebarContextProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleClose: () => void;
}

interface ChildProps {
  children: ReactNode;
}

export const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  handleClose: () => {},
});

const SidebarProvider = ({ children }: ChildProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
