export const Card = (props) => {

    return (

        <div className="card">
            <div className="up">
            <div className="top">
                <img src={props.logo} alt="" />
                <button>Save<i className="ri-bookmark-line"></i></button>
            </div>
            <div className="center">
                <div className="head" ><h3>{props.company}</h3><span>{props.posted}</span></div>
                <h3>{props.role}</h3>
                <div className="tag">
                    <h4>{props.type1}</h4>
                    <h4>{props.type2}</h4>
                </div>
            </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>{props.salary}</h4>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
  )
}
