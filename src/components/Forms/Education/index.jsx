import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import Input from "../../Input";
import Button from "../../Button";
import { Container } from "../styles";
import { useResume } from "../../../providers/ResumeDownload";
import TextArea from "../../TextArea";

export const Education = ({ setModal }) => {
  const userId = localStorage.getItem("@DevJobs:User:Id");

  const { getResumeInfo } = useResume();
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

  const onSubmitFunctionEducation = ({
    degree,
    school,
    dateFrom,
    dateTo,
    description,
  }) => {
    const infos = {
      degree,
      school,
      dateFrom,
      dateTo,
      description,
      userId: userId,
    };
    api
      .post(`/education`, infos)
      .then((response) => {
        getResumeInfo(userId);
        reset();
        setModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunctionEducation)}>
        <h2>Add Education</h2>
        <Input
          name="degree"
          placeholder="Degree"
          type="text"
          register={register}
          error={errors.degree?.message}
          setHeight="60px"
          setWidth="100%"
        />
        <Input
          name="school"
          placeholder="School"
          type="text"
          register={register}
          error={errors.school?.message}
          setHeight="60px"
          setWidth="100%"
        />
        <Input
          name="dateFrom"
          placeholder="Date From"
          type="text"
          register={register}
          error={errors.dateFrom?.message}
          setHeight="60px"
          setWidth="100%"
        />
        <Input
          name="dateTo"
          placeholder="Date To"
          type="text"
          register={register}
          error={errors.dateTo?.message}
          setHeight="60px"
          setWidth="100%"
        />
        <TextArea
          name="description"
          placeholder="Description"
          register={register}
          error={errors.description?.message}
          setHeight="120px"
          setWidth="100%"
        />
        <div className="buttonBox">
          <Button type="submit" setSize="large" setColor="var(--blue)">
            Submit
          </Button>
          <Button
            setSize="large"
            setColor="var(--red)"
            setClick={() => setModal()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  );
};
