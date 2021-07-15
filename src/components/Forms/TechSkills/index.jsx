import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import Input from "../../Input";
import Button from "../../Button";
import { Container } from "../styles";
import { useResume } from "../../../providers/ResumeDownload";
import Select from "../../Select";
import { languages,levelSkills } from "../../../utils";

export const TechSkills = ({ setModal }) => {
  const userId = localStorage.getItem("@DevJobs:User:Id");

  const { getResumeInfo } = useResume();

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

  const onSubmitFunctionTechSkills = ({ description, level }) => {
    const info = { description, level, userId: userId };
    api
      .post(`/techSkills`, info)
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
      <form onSubmit={handleSubmit(onSubmitFunctionTechSkills)}>
        <h2>Add Tech Skills</h2>
        <Select
          name="description"
          options={languages}
          register={register}
          error={errors.description?.message}
          setHeight="60px"
          setWidth="70%"
        />
        <Select
          name="level"
          options={levelSkills}
          register={register}
          error={errors.level?.message}
          setHeight="60px"
          setWidth="70%"
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
