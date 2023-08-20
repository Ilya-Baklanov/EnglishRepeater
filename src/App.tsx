import { useState } from 'react'
import { Input } from './ui/input'
import { InputValue } from './ui/input/Input';
import { Button } from './ui/button';

import s from './App.module.css';

const WORDS_LIST_KEY = 'wordsList';

function App() {
  const [inputValue, setInputValue] = useState<InputValue>('');
  const wordsList = JSON.parse(localStorage.getItem(WORDS_LIST_KEY) || '[]');
  const [wordsForLearn, setWordsForLearn] = useState<Array<{
    word: string;
    translate: string;
  }>>(wordsList);

  const changeHandler = (value: InputValue) => {
    setInputValue(value);
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setWordsForLearn(prev => [...prev, {
      word: String(inputValue),
      translate: '',
    }])
    setInputValue('')
  }

  return (
    <div>
      <div className={s.list}>
        {wordsForLearn.map(word => (
          <span>
            {`${word.word}: ${word.translate}`}
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
