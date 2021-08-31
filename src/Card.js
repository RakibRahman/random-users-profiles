import {
  PhoneIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/react/solid";

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

  const Person = ({ firstName, lastName, dob, pic, age, gender }) => {
    return (
      <div className="info">
        <img className="profilePic" src={pic} alt="profile pic" />

        <div className="flex flex-col">
          <p className="text-4xl font-black">
            {firstName} {lastName}
          </p>
          <JobName />

          <p>
            {firstName} is {age} years old. {gender === "male" ? "He " : "She "}
            was born on {dob.slice(0, 10)}.
          </p>
        </div>
      </div>
    );
  };
  const Contact = ({ mail, phone, city, country }) => {
    return (
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="contact">
          <PhoneIcon className="iconStyle" /> {phone}
        </p>
        <p className="contact">
          <LocationMarkerIcon className="iconStyle" />
          {city},{country}
        </p>
        <p className="contact">
          <MailIcon className="iconStyle" /> {mail}
        </p>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap w-11/12 gap-3 border-2">
      {users.map((user) => (
        <div className="card" key={user.login.md5}>
          <Person
            firstName={user.name.first}
            lastName={user.name.last}
            pic={user.picture.large}
            dob={user.dob.date}
            age={user.dob.age}
            gender={user.gender}
          />
          <div className="w-full h-1 my-2 bg-white border-2"></div>
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
