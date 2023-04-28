import Button from "./Button";
import "./Form.css";
import _ from "lodash";
import { getTotalLength } from "./utills";

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

export default function ChildForm(props: ChildProps) {
  const { level, inputs, onAddChildren, onDeleteChildren, onInputChange } =
    props;

  const totalLength = getTotalLength(inputs, level);

  const backgroundColor = level % 2 !== 0 ? "white" : "ecececf1";

  return (
    <div className="form" style={{ background: backgroundColor }}>
      <p>Characters in Children = {(inputs[level] && totalLength) || 0}</p>
      <input
        id="input"
        type="text"
        value={inputs[level]}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onInputChange(event, level)
        }
      />
      <div>
        <Button
          label="Add Child"
          type="add"
          onClick={() => onAddChildren(level)}
        />
        <Button
          label="Delete Children"
          type="delete"
          onClick={() => onDeleteChildren(level)}
        />
      </div>
      {inputs[level + 1] !== undefined && (
        <ChildForm
          key={level + 1}
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
