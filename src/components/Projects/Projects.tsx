import data from './Data'
import './Projects.css'

const Project = () => {

    return (

        <>

            <div className="projects section">

                <img className="projects__img" src="./background.svg" alt="" />
                <div className="projects__heading"> <h1> Recent Projects </h1> </div>

                <div className="projects__grid">

                    {data.map((el) => (

                        <div className="projects__brief">

                            <div className="projects__title"> {el.title} </div>
                            <div className="projects__desc"> {el.desc} </div>

                        </div>

                    ))}

                </div>

            </div>

            <div className="projects__footer"> <img src="down-shape.svg" /> </div>

        </>
    )
}

export default Project