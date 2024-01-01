const Winner = ({ winner }) => {
  return (
    <div className="mt-5 flex">Your Game winner is {winner ? winner : ""}</div>
  );
};

export default Winner;
