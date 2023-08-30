

export const Button = (props) => {
    const {onClick, isLoading, isDisabled, className, outline, icon, text, full} = props
    return(
        <button className= {`${className} primary_bg text-white p-4 rounded`} onClick={onClick}>
            {text}
        </button>
    )
};


