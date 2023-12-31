const Winner = ({ winner }) => {
  return (
    <div className="flex mt-5">Your Game winner is {winner ? winner : ""}</div>
  );
};

export default Winner;
