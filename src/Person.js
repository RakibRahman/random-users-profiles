const Person = ({ firstName, lastName, dob, pic, age, gender, job }) => {
  return (
    <div className="info">
      <img className="profilePic" src={pic} alt="profile pic" />

      <div className="flex flex-col">
        <p className="text-4xl font-black text-white">
          {firstName} {lastName}
        </p>

        {job}

        <p>
          {firstName} is {age} years old. {gender === "male" ? "He " : "She "}
          was born on {dob.slice(0, 10)}.
        </p>
      </div>
    </div>
  );
};
export default Person;
