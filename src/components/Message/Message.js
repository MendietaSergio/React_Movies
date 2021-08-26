import { useEffect  } from "react";

const Message =({
    show,
    setShow,
    message,
    variant = "warning",
    time
}) =>{
    useEffect(() =>{
        if(show && time){
            setTimeout(() =>{
                setShow(false)
            }, time)
        }
    },[message,show,setShow, time])

    return (
        <>
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
                 onClick={()=> setShow(false)}
                >
                </button>
            </div>
        ) : null}        
        </>
    )
}

export default Message;