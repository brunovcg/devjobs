import customStyles from "../../../utils/customStyles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useToken } from "../../../providers/TokenProvider/";
import api from "../../../services/api";
import Input from "../../Input";
import Button from "../../Button";
import { Container } from "../styles";

export const Objective = () => {
  const { userId } = useToken();

  const schema = yup.object().shape({
    objective: yup.string().required("Degree required"),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFunction = () => {};

  return (
    <Container>
      <form>
        <h2>Objective</h2>
        <Input
          name="objective"
          placeHolder="Describe your Objective"
          type="text"
          register={register}
          error={errors.degree?.message}
          setHeight="200px"
          setWidth="70%"
        />
       
        <div className="buttonBox">
          <Button
            type="submit"
            setSize="large"
            setColor="var(--blue)"
            setClick={handleSubmit(submitFunction)}
          >
            Submit
          </Button>
          <Button setSize="large" setColor="var(--red)" setClick={""}>
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  );
};
