import { useEffect  } from "react";
//recibe proops
const Message =({
    show,
    setShow,
    message,
    variant = "warning",
    time
}) =>{
    useEffect(() =>{
        //si show es true y si existe time, le da un tiempo al Alert y 'show' se vuelve false
        if(show && time){
            setTimeout(() =>{
                setShow(false)
            }, time)
        }
    },[message,show,setShow, time])

    return (
        <>
        {/* condicional, envio un div con el mensaje.
        si 'show' es true lo muestra */}
        {show && message ? (
            <div
            className={`alert alert-${variant} alert-dismissible fade show`}
            role ="alert"
            >
                {message}
                <button
                 className="btn-close"
                 type="button"
                 data-bs-dismiss="alert"
                 aria-label="Close"
                 onClick={()=> setShow(false)}//setea el estado a false
                >
                </button>
            </div>
        ) : null}        
        </>
    )
}

export default Message;