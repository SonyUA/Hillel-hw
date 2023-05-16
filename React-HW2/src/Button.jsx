/* eslint-disable react/prop-types */
export const Button = (props) => {
    const { onClick, children } = props;
    return (
        <>
            <button className='btn' onClick={onClick}>
                {children}
            </button>
        </>
    );
};
