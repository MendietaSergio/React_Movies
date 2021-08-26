import './Input.css'

const Input = ({
    type,
    className="",
    name,
    placeholder,
    label,
    defaultValue,
    register,
    validation,
    error
}) => {

    return (
        <div className={`mb-3 ${className}`}>
            <label className ="form-label w-100">
                {label && label} {/* condicionales */}
                <input type={type}
                name={name}
                label= {label}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={`form-control ${error ? 'input-error' : ''}`}
                {...register(name,validation)}
                autoComplete="off"
                autoCorrect="off"
                />            
            </label>
            {error ? <p className="text-danger">{error.message}</p> : null}
        </div>
    )


}

export default Input;