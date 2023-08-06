export type InputValue = string | number;

interface InputProps {
    placeholder?: string;
    defaultValue?: InputValue;
    onChange?: (value: InputValue) => void;
    value?: InputValue;
}

const Input = ({placeholder, defaultValue, value, onChange}: InputProps) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.currentTarget.value);
    }

    return (
        <input value={defaultValue || value} onChange={changeHandler} placeholder={placeholder} />
    )
}

export default Input;
