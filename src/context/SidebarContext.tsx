import { useState, createContext } from 'react';
interface childProps {
  children: React.ReactNode;
}
export const SidebarContext = createContext();
const SidebarProvider = ({ children }: childProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
