import Spinner from 'react-bootstrap/Spinner';

const SpinnerFunction = () => {
  return (
    <Spinner style={{ margin: 'auto', display: 'block'}} size="m" animation="grow" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerFunction