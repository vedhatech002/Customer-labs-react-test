import { useState, useEffect, useRef, useContext } from "react";
import initialSchemaOpt from "../utils/schemaOptions.json";
import appContext from "../utils/appContext";

const SchemasForm = ({ segmentName }) => {
  const [availOpt, setAvailOpt] = useState(initialSchemaOpt);
  const [newSchemaItem, setNewSchemaItem] = useState("");
  const [schemaItems, setSchemaItems] = useState([]);

  //To modify popup state
  const { setIsPopupOpen } = useContext(appContext);

  useEffect(() => {
    // Update availOpt whenever schema items change
    const updatedOpt = initialSchemaOpt.filter(
      (option) => !schemaItems.includes(option.Value)
    );
    setAvailOpt(updatedOpt);
  }, [schemaItems]);

  const formRef = useRef();

  //To Add new Schema to schemaItems
  const handleaddNewSchema = () => {
    if (newSchemaItem) {
      console.log(newSchemaItem);
      setSchemaItems((pre) => [...pre, newSchemaItem]);
      setNewSchemaItem("");
    }
  };

  //To change schemaItems whenever selected schema value changes
  const handleSchemaChange = (index, value) => {
    const updatedSchemaItems = [...schemaItems];
    updatedSchemaItems[index] = value;
    setSchemaItems(updatedSchemaItems);
  };

  //To handle form data
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const data = Object.fromEntries(formData);
    const schema = Object.keys(data);
    const segment_Name = segmentName.trim().replaceAll(" ", "_");

    if (segmentName) {
      if (schema.length > 0) {
        const segmentdata = {
          segment_name: segment_Name,
          schema: schema,
        };
        sendDataTOServer(segmentdata);
        console.log(segmentdata);
        setIsPopupOpen(false);
      } else alert("please add Schema to Save the segmet");
    } else {
      alert("please provide segment name");
    }
  };

  //To send segment data to the server with fetchApi
  const sendDataTOServer = async (segment) => {
    try {
      const response = await fetch(
        "https://webhook.site/0ef44baf-96aa-42e0-a404-a50328fec69a",
        {
          method: "POST",
          body: JSON.stringify(segment),
          headers: {
            "sec-fetch-mode": "cors",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="mt-6 w-full" ref={formRef} onSubmit={handleForm}>
      {schemaItems.length > 0 ? (
        <div>
          <h1 className="text-sm font-Poppins font-medium">Selected Schemas</h1>
          <div className="mt-2 mb-6 py-8 border-[2px] px-3 border-blue-500 space-y-6 h-[28vh] overflow-y-auto">
            {schemaItems.map((schema, index) => {
              const selectedOpt = initialSchemaOpt.find(
                (opt) => opt.Value === schema
              );

              return (
                <select
                  key={index}
                  name={selectedOpt.Label}
                  value={schema}
                  className="text-sm font-Inter border-[1.5px] border-gray-500 px-4 py-2 outline-none focus:border-blue-500 w-full "
                  onChange={(e) => handleSchemaChange(index, e.target.value)}
                >
                  <option value={schema}>{selectedOpt.Label}</option>
                  {availOpt.map((option, index) => (
                    <option key={index} value={option.Value}>
                      {option.Label}
                    </option>
                  ))}
                </select>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      {/* add shema to segment  */}
      <div className="w-full flex flex-col gap-4 ">
        <select
          value={newSchemaItem}
          className="text-sm font-Inter border-[1.5px] border-gray-500 px-4 py-2 outline-none focus:border-blue-500 w-full "
          onChange={(e) => {
            setNewSchemaItem(e.target.value);
          }}
        >
          <option className="" value="">
            Add schema to segment
          </option>
          {availOpt.map((option, index) => (
            <option key={index} value={option.Value}>
              {option.Label}
            </option>
          ))}
        </select>
        <a
          className="cursor-pointer text-sm underline underline-offset-2 text-green-800 font-semibold select-none"
          onClick={handleaddNewSchema}
        >
          + Add new schema
        </a>
      </div>
      <button className="bg-green-500 text-white px-4 py-1.5 text-semibold rounded-sm absolute bottom-4">
        save the segment
      </button>
    </form>
  );
};

export default SchemasForm;
