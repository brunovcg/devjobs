import { Container } from "./styles";

const Input = ({ error, register, name, setHeight, setWidth, ...rest }) => {
  return (
    <Container
        setHeight={setHeight}
        setWidth={setWidth}
    >
      <input
        // {...register(name)}
        {...rest}
      />
      <div>{error}</div>
    </Container>
  );
};

export default Input;
