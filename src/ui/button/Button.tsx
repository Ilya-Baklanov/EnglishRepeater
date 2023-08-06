interface ButtonProps {
    buttonText?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    form?: string;
}

const Button = ({buttonText, onClick, type, form}: ButtonProps) => {


    return (
        <button onClick={onClick} type={type} form={form}>
            {buttonText}
        </button>
    )
}

export default Button;
