const Profile2 = () => {
  const users = {
    firstName: "Bandi",
    lastName: "Hajdu",
  };

  const { firstName, lastName } = users;
  return (
    <div>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3>
    </div>
  );
};

export default Profile2;
