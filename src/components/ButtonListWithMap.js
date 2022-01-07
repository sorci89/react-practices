import Button2 from "./Button2";

const ButtonListWithMap = (userName) => {
  /*
  const tenButton = [];
  for (let i = 0; i < 10; i++) {
    tenButton.push(<Button2 key={i} />);
  }
  return <div>{tenButton}</div>;
  */
  const users = ["Rihard", "Flora", "Aron", "Betti", "Johnny"];
  return (
    <div>
      {users.map((userName, i) => (
        <Button2 key={i} userName={userName} />
      ))}
    </div>
  );
};

export default ButtonListWithMap;
