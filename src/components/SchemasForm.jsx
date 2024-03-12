import { useState, useEffect } from "react";
import initialSchemaOpt from "../utils/schemaOptions.json";

const SchemasForm = () => {
  const [availOpt, setAvailOpt] = useState(initialSchemaOpt);
  const [newSchemaItem, setNewSchemaItem] = useState("");
  const [schemaItems, setSchemaItems] = useState([]);

  useEffect(() => {
    // Update availOpt whenever schema items change
    const updatedOpt = initialSchemaOpt.filter(
      (option) => !schemaItems.includes(option.Value)
    );
    setAvailOpt(updatedOpt);
  }, [schemaItems]);

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

  return (
    <form className="mt-6 w-full">
      {schemaItems.length > 0 ? (
        <div>
          <h1 className="text-sm font-Poppins font-medium">Selected Schemas</h1>
          <div className="mt-2 mb-6 py-8 border-[2px] px-3 border-blue-500 space-y-6">
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
    </form>
  );
};

export default SchemasForm;
