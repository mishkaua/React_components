import { useState } from "react";
import data from "./data";
import "./styles.css";
import { FaChevronDown } from "react-icons/fa6";

//single-select Accordion
export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelect(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  console.log(selected, multiple);

  //multi-select Accordion
  function handleMultiSelect(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <h2 className="flex justify-center text-4xl font-medium">FAQs</h2>
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable multi-selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelect(dataItem.id)
                    : () => handleSingleSelect(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{<FaChevronDown size={16} />}</span>
              </div>
              {enableMultiSelect
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div> No data found! </div>
        )}
      </div>
    </div>
  );
}
