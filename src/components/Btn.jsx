import "../styles/Btn.css";

function Btn({ handleClick, btnText }) {
  return (
    <button
      onClick={handleClick}
      className="btn"
      type="submit"
      aria-label="roll the numbers"
    >
      {btnText}
    </button>
  );
}

export default Btn;
