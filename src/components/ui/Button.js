

export const Button = (props) => {
    const {onClick,  className,  text, } = props
    return(
        <button className= {`${className} primary_bg text-white p-4 rounded`} onClick={onClick}>
            {text}
        </button>
    )
};


