import Button2 from "./Button2";

const ButtonListWithFor = () => {
  const tenButton = [];
  for (let i = 0; i < 10; i++) {
    tenButton.push(<Button2 key={i} />);
  }
  return <div>{tenButton}</div>;
};

export default ButtonListWithFor;
