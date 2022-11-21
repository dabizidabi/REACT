const Button = ({counter, minus, plus}) => {
    const togle = document.querySelector('h1');
    togle.addEventListener('scroll', test);
    console.log(togle);
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </>
    );
}

export default Button;