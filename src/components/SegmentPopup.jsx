import { useState } from "react";

const SegmentPopup = () => {
  const [segmentName, setSegmentName] = useState("");
  console.log(segmentName);
  return (
    <section className="grid grid-cols-[2fr,1fr] h-screen w-full absolute top-0">
      <div className="bg-gray-600 bg-opacity-85"></div>
      <div className="bg-white">
        {/* popup header */}
        <div className="py-4 px-4 bg-blue-500 text-white font-Poppins flex items-center gap-2">
          <span className="cursor-pointer">
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
        <div className="px-4 mt-6">
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
        </div>
      </div>
    </section>
  );
};

export default SegmentPopup;
