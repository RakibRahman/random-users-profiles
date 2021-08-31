const Card = ({ users }) => {
  return (
    <div className="wrapper flex bg-red-500">
      {users.map((user) => (
        <div className="card" key={user.login.md5}>
          <img src={user.picture.large} alt="profile pic" />
          <h3>
            Name:
            {user.name.title} {user.name.first} {user.name.last}
          </h3>
          <h3>Gender: {user.gender}</h3>
          <h3>Age: {user.dob.age}</h3>
          <h3>DOB: {user.dob.date.slice(0, 10)}</h3>
          <h3>
            Address: {user.location.city} ,{user.location.country}
          </h3>
          <h3>Email: {user.email}</h3>
          <h3>Phone: {user.phone}</h3>
        </div>
      ))}
    </div>
  );
};
export default Card;
