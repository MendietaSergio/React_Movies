const Input = ({
    type,
    className="",
    name,
    placeholder,
    label,
    defaultValue,
    register,
    error
}) => {

    return (
        <div className={`mb-3 ${className}`}>
            <label className ="form-label w-100">
                {label && label} {/* condicionales */}
                <input type={type}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                />            
            </label>
            {error ? <p className="text-danger">{error.message}</p> : null}
        </div>
    )


}

export default Input;