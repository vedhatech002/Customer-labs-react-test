import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import SegmentPopup from "./components/SegmentPopup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <Header />
      <Body />
      <SegmentPopup />
    </>
  );
}

export default App;
