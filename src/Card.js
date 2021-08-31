import Person from "./Person";
import Contact from "./Contact";

const Card = ({ users }) => {
  const jobs = [
    "FrontEnd Developer",
    "Full Stack Developer",
    "BackEnd Developer",
    "UX/UI Designer",
    "CTO",
    "CEO",
    "Project Manager",
    "Database Administrator",
    "Data Analyst",
    "Data Scientist",
    "QA Tester",
    "CIO",
    "Junior Data Scientist",
    "Network Administrator",
    "IT Manager",
    "Devops Engineer",
  ];

  const JobName = () => {
    const random = Math.floor(Math.random() * jobs.length);
    return <p className="text-lg font-bold">{jobs[random]}</p>;
  };

  return (
    <div className="border-4 border-red-500 rounded-lg main__wrapper">
      {users.map((user) => (
        <div
          className="justify-between gap-2 lg:flex card"
          key={user.login.md5}
        >
          <Person
            firstName={user.name.first}
            lastName={user.name.last}
            pic={user.picture.large}
            dob={user.dob.date}
            age={user.dob.age}
            gender={user.gender}
            job={<JobName />}
          />
          <div className="w-full h-2 my-2 bg-white lg:my-0 lg:h-full lg:w-2 "></div>
          <Contact
            mail={user.email}
            phone={user.phone}
            country={user.location.country}
            city={user.location.city}
          />
        </div>
      ))}
    </div>
  );
};
export default Card;
