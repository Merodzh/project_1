import './style.css'
export default function Why({src, title, text}){
    return(
        <>
        <div class="why-item">
            <img src={src} alt="burger" class="why-item-image" />
            
            <div class="why-item-title">{title}</div>
            <div class="why-item-text">
              {text}
            </div>
          </div>
        </>
    )
}