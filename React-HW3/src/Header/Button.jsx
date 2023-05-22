/* eslint-disable react/prop-types */
export const Button = (props) => {
    return (
        <button className='btn' onClick={props.onClick}>
            {props.text}
        </button>
    );
};
