import { createContext } from "react";

const appContext = createContext({
  isModalOpen: false,
});

export default appContext;
