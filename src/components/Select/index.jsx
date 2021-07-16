import { Container } from "./styles";

const Select = ({
  options,
  register,
  error,
  name,
  setHeight,
  setWidth,
  ...rest
}) => {
  return (
    <Container setHeight={setHeight} setWidth={setWidth}>
      <select {...register(name)} {...rest}>
        <option defaultValue hidden>
          {name}
        </option>
        {options &&
          options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
      </select>
      <div>{error}</div>
    </Container>
  );
};
export default Select;
