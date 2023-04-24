import { useState } from 'react';
import './Form.css';
import _ from 'lodash';
type Props = {
  onGetNextLength?: ((obj: number) => void) | any ;
  updatedLength: number;
}

export default function Form({updatedLength}: Props) {
  const [length, setLength] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => prevState = event.target.value)
  }
  const handleAddChildren = () => {
    setLength(prevState => (prevState + input.length))
    updatedLength = length
    console.log(updatedLength)
  }
  return (
    <div className='form'>
      <p>Characters in Children = {length}</p>
      <input
        id="input"
        type='text'
        value={input || ''}
        onChange={handleInputChange}
      />
      <div>
        <button className='add--btn' onClick={handleAddChildren}>Add Children</button>
        {/* <button className='del--btn' onClick={handleAddChildren}>Delete Children</button> */}
      </div>
      {length > 0 &&
        <Form updatedLength={updatedLength}/>
      }
    </div>
  )
}