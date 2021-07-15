import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import Input from "../../Input";
import Button from "../../Button";
import { Container } from "../styles";
import { useResume } from "../../../providers/ResumeDownload";
import TextArea from "../../TextArea";

export const Messages = ({ setModal }) => {
  const userId = localStorage.getItem("@DevJobs:User:Id");

  const { getResumeInfo } = useResume();
  const schema = yup.object().shape({
    message: yup.string().required("Role required"),
    email: yup.string().email().required("Company required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunctionExperience = ({ email, message }) => {
    const infos = {
      email,
      message,
      userId: userId,
    };
    api
      .post(`/message`, infos)
      .then((res) => {
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
      <form onSubmit={handleSubmit(onSubmitFunctionExperience)}>
        <h2>Send Message</h2>
        <Input
          name="email"
          placeholder="What's your email"
          type="text"
          register={register}
          error={errors.email?.message}
          setHeight="60px"
          setWidth="100%"
        />
        <TextArea
          name="message"
          placeholder="Send your message"
          register={register}
          error={errors.message?.message}
          setHeight="100px"
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
