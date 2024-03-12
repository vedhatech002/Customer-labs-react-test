import { useContext, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import SegmentPopup from "./components/SegmentPopup";
import appContext from "./utils/appContext";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <appContext.Provider value={{ isModalOpen: isPopupOpen, setIsPopupOpen }}>
        <Header />
        <Body />
        <SegmentPopup />
      </appContext.Provider>
    </>
  );
}

export default App;
