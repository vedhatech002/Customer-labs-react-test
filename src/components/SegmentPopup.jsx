import { useContext, useState } from "react";
import appContext from "../utils/appContext";
import SchemasForm from "./SchemasForm";

const SegmentPopup = () => {
  const [segmentName, setSegmentName] = useState("");

  const { isModalOpen, setIsPopupOpen } = useContext(appContext);

  return isModalOpen ? (
    <section className="grid lg:grid-cols-[2fr,1.2fr] sm:grid-cols-[2fr,1.5fr] h-screen w-full absolute top-0 ">
      <div
        className="bg-gray-600 bg-opacity-85 sm:block hidden"
        onClick={() => {
          setIsPopupOpen(false);
        }}
      ></div>
      <div className="bg-white">
        {/* popup header */}
        <div className="py-4 px-8 bg-blue-500 text-white font-Poppins flex items-center gap-2">
          <span
            className="cursor-pointer"
            onClick={() => {
              setIsPopupOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 512 512"
              id="back-arrow"
            >
              <path
                fill="white"
                d="M352 128.4L319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z"
              ></path>
            </svg>
          </span>
          <h1 className="text-lg font-semibold">Add Segment</h1>
        </div>
        {/* popup body */}
        <div className="px-8 mt-6">
          <div className="flex flex-col gap-3">
            <label className="font-Poppins text-sm font-medium">
              Enter The Name of The Segment
            </label>
            <input
              className="text-sm font-Inter border-[1.5px] border-gray-500 px-4 py-2 outline-none focus:border-blue-500"
              type="text"
              placeholder="Name of the segment"
              onChange={(e) => {
                setSegmentName(e.target.value);
              }}
            />
          </div>
          {/* schema area */}
          <div className="font-Inter mt-6">
            <h4 className="font-Poppins text-sm font-medium">
              To save your segment,you need to add the schemas to buid the
              quries
            </h4>
            <SchemasForm segmentName={segmentName} />
          </div>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
};

export default SegmentPopup;
