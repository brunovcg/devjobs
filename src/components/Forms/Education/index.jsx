import customStyles from "../../../utils/customStyles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useToken } from "../../../providers/TokenProvider/";
import api from "../../../services/api";
import Input from "../../Input";
import Button from "../../Button";
import { Container } from "../styles";

export const Education = () => {
  const { userId } = useToken();

  const schema = yup.object().shape({
    degree: yup.string().required("Degree required"),
    school: yup.string().required("School required"),
    dateFrom: yup.string().required("Starting data required"),
    dateTo: yup.string().required("Finish data required"),
    description: yup.string().required("Description required"),
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
        <h2>Add Education</h2>
        <Input
          name="degree"
          placeHolder="Degree"
          type="text"
          register={register}
          error={errors.degree?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="school"
          placeHolder="School"
          type="text"
          register={register}
          error={errors.school?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="dateFrom"
          placeHolder="Date From"
          type="text"
          register={register}
          error={errors.dateFrom?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="dateTo"
          placeHolder="Date To"
          type="text"
          register={register}
          error={errors.dateTo?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Input
          name="description"
          placeHolder="Description"
          type="text"
          register={register}
          error={errors.description?.message}
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
