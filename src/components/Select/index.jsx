import { Container } from "./styles";

const Select = ({options, register}) => {
  return (
    <Container>
      <select name="lingua" {...register}>
        {options.map((option)=>
          <option value={option}>{option}</option>)}
      </select>
    </Container>
  );
};
export default Select;

