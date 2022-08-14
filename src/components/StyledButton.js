const StyledButton = ({ label, onClickHandler, className }) => (
  <button className={className} type="submit" onClick={onClickHandler}>
    {label}
  </button>
);

export default StyledButton;
