export const CardBtn = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <button onClick={props.func} className='cardBtn'>
            Click Me
        </button>
    );
};
