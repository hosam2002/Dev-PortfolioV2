import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiNpm } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiIllustrator } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { MdOutlinePhonelink } from "react-icons/md";

import LT from './LangAndTool'
import './Techniques.css'

const Techniques = () => {

    return (

        <div className="techniques section">

            <div className="techniques__item"> <LT name="html" img={<FaHtml5 className="lt__img" />}/> </div>
            <div className="techniques__item"> <LT name="css" img={<FaCss3Alt className="lt__img" />}/> </div>
            <div className="techniques__item"> <LT name="javaccript" img={<IoLogoJavascript className="lt__img" />}/> </div>
            <div className="techniques__item"> <LT name="node js" img={<FaNodeJs className="lt__img" />}/> </div>
            <div className="techniques__item"> <LT name="react js" img={<FaReact className="lt__img" />}/> </div>
            <div className="techniques__item"> <LT name="sass" img={<FaSass className="lt__img" />}/> </div>
            <div className="techniques__item"> <LT name="npm" img={<SiNpm className="lt__img" />}/> </div>
            <div className="techniques__item"> <LT name="git commands" img={<FaGitAlt className="lt__img"/>} /> </div>

            <div className="techniques__item"> 
            <LT name="responsive design" img={<MdOutlinePhonelink className="lt__img" />} /> 
            </div>

            <div className="techniques__item"> <LT name="illustartor" img={<DiIllustrator className="lt__img" />}/> </div>
            
        </div>
    )
}

export default Techniques