import customStyles from "../../../utils/customStyles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useToken } from "../../../providers/TokenProvider/";
import api from "../../../services/api";
import Input from "../../Input";
import Button from "../../Button";
import { Container } from "../styles";
import Select from "../../Select";

export const OtherSkills = () => {
  const { userId } = useToken();

  const schema = yup.object().shape({
    description: yup.string().required("Description required"),
    level: yup.string().required("Level required"),
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
        <h2>Add Other Skills</h2>
        <Input
          name="description"
          placeHolder="Degree"
          type="text"
          register={register}
          error={errors.description?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="what level?"
          placeHolder="level"
          type="text"
          register={register}
          error={errors.level?.message}
          setHeight="60px"
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
