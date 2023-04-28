import { useState } from "react";
import "./Form.css";
import _ from "lodash";
import ChildForm from "./ChildForm";
import Button from "./Button";
import {getTotalLength} from './utills';

export default function Form() {
  const level = 0;
  const [inputs, setInputs] = useState<string[]>([""]);
  const handleAdd = (level: number) => {
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
  const totalLength = getTotalLength(inputs);
  const backgroundColor = level % 2 !== 0 ? "white" : "ecececf1";

  return (
    <div className="form" style={{ background: backgroundColor }}>
      <p>Characters in Children = {inputs[level] && totalLength || 0}</p>
      <input
        id="input"
        type="text"
        value={inputs[level]}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, level)
        }
      />
      <div>
        <Button label="Add Child" type="add" onClick={() => handleAdd(0)} />
      </div>
      {inputs[1] !== undefined && (
        <ChildForm
          key={1}
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
