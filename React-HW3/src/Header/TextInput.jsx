/* eslint-disable react/prop-types */
export const TextInput = (props) => {
    return (
        <>
            <input onChange={props.inputValue} className='textInput' type='number' placeholder='введіть номер юзера' />
        </>
    );
};
