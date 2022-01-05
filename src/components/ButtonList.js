import Button from "./Button";

function ButtonList(propsss) {
  const { onClick, buttonText } = propsss;
  const n = 10;
  return [...Array(n)].map((index) => (
    <Button key={index} onClick={onClick} buttonText={buttonText} />
  ));
}

export default ButtonList;
