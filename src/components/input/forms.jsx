import "./style.css"

export default function Form({placeholder, get}){
    return(
        <>
        <div className="order-form-input">
              <input ref={get} type="text" placeholder={placeholder} id="burger" />
        </div>
        </>
    )
}