import { useState } from 'react';
import './Form.css';
import _ from 'lodash';


type ChildProps = {
  onInputChange: (obj: React.ChangeEvent<HTMLInputElement>) => void;
  onAddChildren: VoidFunction;
  length: number;
}

export default function Form() {
  const [length, setLength] = useState<number>(0);
  const [input, setInput] = useState<string[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => [...prevState, event.target.value])
  }
  const handleAddChildren = () => {
    let length = 0
    console.log(_.map(input, (item) => length += item.length));
    setLength(input.length);

  }
  return (
    <div className='form'>
      <p>Characters in Children = {length}</p>
      <input
        id="input"
        type='text'
        onChange={handleInputChange}
      />
      <div>
        <button className='add--btn' onClick={handleAddChildren}>Add Children</button>
        {/* <button className='del--btn' onClick={handleAddChildren}>Delete Children</button> */}
      </div>
      {length > 0 &&
        <ChildForm onInputChange={handleInputChange} onAddChildren={handleAddChildren} length = {length}/>
      }
    </div>
  )
}

function ChildForm(props: ChildProps) {
  const { onInputChange, onAddChildren, length } = props;
  return (
    <div className='form'>
      <p>Characters in Children = {length}</p>
      <input
        id="input"
        type='text'
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onInputChange(event)}
      />
      <div>
        <button className='add--btn' onClick={onAddChildren}>Add Children</button>
        {/* <button className='del--btn' onClick={handleAddChildren}>Delete Children</button> */}
      </div>
    </div>
  );
}