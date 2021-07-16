import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import Input from "../../Input";
import Button from "../../Button";
import { Container } from "../styles";
import { useResume } from "../../../providers/ResumeDownload";
import TextArea from "../../TextArea";
import { toast } from "react-toastify";

export const Messages = ({ setModal, userId }) => {
  const { getResumeInfo } = useResume();
  const schema = yup.object().shape({
    name: yup.string().required("Role required"),
    message: yup.string().required("Role required"),
    companyEmail: yup.string().email().required("Company required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunctionMessage = ({ companyEmail, name, message }) => {
    const infos = {
      companyEmail,
      name,
      message,
      userId: userId,
    };
    api
      .post(`/messages`, infos)
      .then((res) => {
        getResumeInfo(userId);
        reset();
        setModal();
        toast.info("Message delivered");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunctionMessage)}>
        <h2>Send Message</h2>
        <Input
          name="name"
          placeholder="Companies Name"
          type="text"
          register={register}
          error={errors.name?.message}
          setHeight="60px"
          setWidth="100%"
        />
        <Input
          name="companyEmail"
          placeholder="What's your email"
          type="text"
          register={register}
          error={errors.companyEmail?.message}
          setHeight="60px"
          setWidth="100%"
        />
        <TextArea
          name="message"
          placeholder="Send your message"
          register={register}
          error={errors.message?.message}
          setHeight="300px"
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
