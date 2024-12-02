
function InputError({ errorMessage }) {
    return (
        errorMessage && <p className="text-red-500 my-3 text-sm">{errorMessage}</p>
    )
}

export default InputError