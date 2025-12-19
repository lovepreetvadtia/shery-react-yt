import { Card } from "./card.jsx";


function App() {

const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://www.citypng.com/public/uploads/preview/official-hq-amazon-a-letter-symbol-logo-icon-70175169479214184uavt0v1m.png",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type1:"Part-time",
    type2: "Senior level",
    salary: "$120/hr",
    location: "San Francisco, CA",
  },
  {
    
    id: 2,
    company: "Google",
    logo: "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg",
    posted: "30 days ago",
    role: "Graphic Designer",
    type1: "Full-time",type2: "Flexible schedule",
    salary: "$150k - $220k",
    location: "Mountain View, CA",
  },
  {
    id: 3,
    company: "Dribbble",
    logo: "https://cdn.simpleicons.org/dribbble",
    posted: "18 days ago",
    role: "Senior Motion Designer",
    type1: "Contract",type2: "Remote",
    salary: "$85/hr",
    location: "San Francisco, CA",
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://cdn.simpleicons.org/meta/000000",
    posted: "3 months ago",
    role: "UX Designer",
    type1:"Full-time", type2:"In office",
    salary: "$200k - $250k",
    location: "New York, NY",
  },
  {
    id: 5,
    company: "Airbnb",
    logo: "https://cdn.simpleicons.org/airbnb",
    posted: "1 day ago",
    role: "Junior UX/UI Designer",
    type1: "Contract",type2: "Remote",
    salary: "$100/hr",
    location: "San Francisco, CA",
  },
  {
    id: 6,
    company: "Apple",
    logo: "https://cdn.simpleicons.org/apple/000000",
    posted: "6 days ago",
    role: "Graphic Designer",
    type1: "Full-time",type2: "Flexible schedule",
    salary: "$85k - $120k",
    location: "Cupertino, CA",
  }
];


  return (
    <div className="parent">
    {jobs.map(function(elem,idx){
      return <div key={idx}>
        < Card logo={elem.logo}  company={elem.company} posted={elem.posted} role={elem.role} 
        type1={elem.type1} type2={elem.type2} salary={elem.salary} location={elem.location} />
      </div>
    })}
    
    </div>
    
  )
}

export default App





