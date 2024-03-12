import { useContext } from "react";
import appContext from "../utils/appContext";

const Body = () => {
  const { setIsPopupOpen } = useContext(appContext);

  return (
    <main className="px-8 py-12 font-Poppins">
      <button
        onClick={() => {
          setIsPopupOpen(true);
        }}
        className="px-4 py-2 border-[1.5px] text-sm border-blue-500 hover:bg-blue-500 hover:text-white hover:font-semibold font-normal"
      >
        Save segment
      </button>
    </main>
  );
};

export default Body;
