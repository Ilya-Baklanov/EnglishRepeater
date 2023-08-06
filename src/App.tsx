import { useState } from 'react'
import { Input } from './ui/input'
import { InputValue } from './ui/input/Input';
import { Button } from './ui/button';

import s from './App.module.css';

function App() {
  const [inputValue, setInputValue] = useState<InputValue>('');
  const [wordsForLearn, setWordsForLearn] = useState<InputValue[]>([]);

  const changeHandler = (value: InputValue) => {
    setInputValue(value);
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setWordsForLearn(prev => [...prev, inputValue])
    setInputValue('')
  }

  return (
    <div>
      <div className={s.list}>
        {wordsForLearn.map(word => (
          <span>
            {word}
          </span>
        ))}
      </div>
<form onSubmit={onSubmit}>
      <Input defaultValue={''} value={inputValue} onChange={changeHandler} placeholder='type new word' />
      <Button buttonText='Submit' type="submit" />
    </form>
    </div>
  )
}

export default App
