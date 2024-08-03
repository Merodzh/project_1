import './style_link.css'

export default function Link({text, scroll}){
    return (
        <>
        <li className="menu-item">
          <a href={scroll} data-link="why">{text}</a>
        </li>
        </>
    )
    
}