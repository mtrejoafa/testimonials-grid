import "./Card.css";

export const Card = ({id,name,job,testimonial,experience,img,bgColor,textColor}) => {
    return (
        <div className="card" key={id} style={{backgroundColor: bgColor, color: textColor}}>
            <div className="card-header">
                <img src={img} alt="img" className="card-img"/>
                <div className="card-header-text">
                    <h3 className="card-name">{name}</h3>
                    <p className="card-job">{job}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-testimonial">{testimonial}</p>
                <p className="card-experience">{experience}</p>
            </div>
        </div>
    )
}