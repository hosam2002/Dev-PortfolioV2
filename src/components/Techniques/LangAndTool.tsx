import { ReactElement } from "react";

interface Prop {

    name: string,
    img: ReactElement
}

const LT = ({name, img}: Prop) => {

    return (

        <div className="lt">

            <div className="lt__logo"> {img} </div>
            <div className="lt__name"> {name} </div>

        </div>
    )
}

export default LT