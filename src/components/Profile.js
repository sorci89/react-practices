const Profile = () => {
  const users = ["Rihard", "Flora", "Aron", "Betti", "Johnny"];

  //const userA = users[0];
  //const userB = users[1];

  const [userA, , userB] = users;

  return (
    <div>
      <h2>{userA}</h2>
      <h2>{userB}</h2>
    </div>
  );
};

export default Profile;
