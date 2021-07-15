import { Container } from "./styles";

const TextArea = ({ error, register, name, setHeight, setWidth, ...rest }) => {
  return (
    <Container setHeight={setHeight} setWidth={setWidth}>
      <textarea {...register(name)} {...rest} />
      <div>{error}</div>
    </Container>
  );
};

export default TextArea;
