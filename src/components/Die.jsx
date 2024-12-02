import "../styles/Die.css";

function Die({ value, isHeld, handleClick }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#ffffff",
  };

  return (
    <button
      onClick={handleClick}
      style={styles}
      aria-label={`Die with value ${value}, 
    ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
}

export default Die;
