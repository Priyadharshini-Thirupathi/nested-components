import { useState } from "react";
import "./Form.css";
import _ from "lodash";
import ChildForm from "./ChildForm";
import Button from "./Button";

export default function Form() {
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
  const totalLength =
    inputs[1] !== undefined &&
    _.reduce(
      _.slice(
        _.map(inputs, (input) => input.length),
        0,
        inputs.length
      ),
      (sum, n) => sum + n
    );
  return (
    <div className="form">
      <p>Characters in Children = {(inputs[0] && totalLength) || 0}</p>
      <input
        id="input"
        type="text"
        value={inputs[0]}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event, 0)
        }
      />
      <div>
        <Button label="Add Children" type="add" onClick={() => handleAdd(0)} />
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
