

import "./IconText.css"

const IconText = ({icon, text}) => {
    return(
        <div class="item">
            <div class="icon">{icon}</div>
            <div class="values">{text}</div>
        </div>
    )
}

export default IconText