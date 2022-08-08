import Spinner from 'react-bootstrap/Spinner';

const SpinnerFunction = () => {
  return (
    <Spinner style={{ position: "fixed", top: "40%", left: "50%", width: "80px", height: "80px" }} size="l" animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerFunction