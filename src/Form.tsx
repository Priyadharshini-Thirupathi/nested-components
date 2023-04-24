import { useState } from "react";
import "./Form.css";
import _ from "lodash";

type ChildProps = {
  level: number;
  inputs: string[];
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onAddChildren: (obj: number) => void;
  onDeleteChildren: (obj: number) => void;
};

export default function Form() {
  const [inputs, setInputs] = useState<string[]>([""]);
  const [clicked, setClicked] = useState<boolean>();
  const handleAdd = (level: number) => {
    setClicked(true);
    setInputs((prevState) => {
      const newArray = [...prevState];
      newArray.splice(level + 1, 0, "");
      return newArray;
    });
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    level: number
  ) => {
    setInputs((prevState) => {
      const newArray = [...prevState];
      newArray[level] = event.target.value;
      return newArray;
    });
  };

  const handleDelete = (level: number) => {
    setInputs((prevState) => {
      const newArray = [...prevState];
      newArray.splice(level, 1);
      return newArray;
    });
  };
  return (
    <div className="form">
      {/* <p>Characters in Children = {text.length}</p> */}
      <input
        id="input"
        type="text"
        value={inputs[0]}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 0)
        }
      />
      <div>
        <button className="add--btn" onClick={() => handleAdd(0)}>
          Add Children
        </button>
      </div>
      {inputs[1] !== undefined && (
        <ChildForm
          level={1}
          inputs={inputs}
          onInputChange={handleInputChange}
          onAddChildren={handleAdd}
          onDeleteChildren={handleDelete}
        />
      )}
    </div>
  );
}

function ChildForm(props: ChildProps) {
  const { level, inputs, onAddChildren, onDeleteChildren, onInputChange } =
    props;
  return (
    <div className="form">
      {/* <p>Characters in Children = {length}</p> */}
      <input
        id="input"
        type="text"
        value={inputs[level]}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onInputChange(event, level)
        }
      />
      <div>
        <button className="add--btn" onClick={() => onAddChildren(level)}>
          Add Children
        </button>
        <button className="del--btn" onClick={() => onDeleteChildren(level)}>
          Delete Children
        </button>
      </div>
      {inputs[level + 1] !== undefined && (
        <ChildForm
          level={level + 1}
          inputs={inputs}
          onInputChange={onInputChange}
          onAddChildren={onAddChildren}
          onDeleteChildren={onDeleteChildren}
        />
      )}
    </div>
  );
}
