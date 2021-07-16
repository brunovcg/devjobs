import { FormStyled, Page, Text, Box } from "./styles";
import { useToken } from "../../providers/TokenProvider";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { useResume } from "../../providers/ResumeDownload";

const UserLogin = () => {
  const { setUserToken } = useToken();

  const schema = yup.object().shape({
    email: yup.string().email("Invalid e-mail").required("Required field"),
    password: yup.string().min(6).required("Required field"),
  });
  const { getResumeInfo } = useResume();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { accessToken } = response.data;
        toast.info("Welcome!");
        localStorage.setItem(
          "@DevJobs:Token:User",
          JSON.stringify(accessToken)
        );
        setUserToken(accessToken);
        const decoded = jwt_decode(accessToken);
        const { sub } = decoded;
        localStorage.setItem("@DevJobs:User:Id", sub);
        getResumeInfo(sub);
        return history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Invalid e-mail or password");
      });
  };

  return (
    <Box>
      <Header />
      <Page>
        <FormStyled>
          <h2>Login</h2>
          <Input
            placeholder="E-mail"
            register={register}
            name="email"
            error={errors.email?.message}
            setHeight="70px"
            setWidth="100%"
          />

          <Input
            placeholder="Password"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
            setHeight="70px"
            setWidth="100%"
          />

          <Button
            setClick={handleSubmit(onSubmitFunction)}
            setSize="large"
            setColor="var(--blue)"
          >
            Sign In
          </Button>
        </FormStyled>

        <Text>
          If you don't have an account already,{" "}
          <Link to="/register">sign up here.</Link>
        </Text>
      </Page>
    </Box>
  );
};

export default UserLogin;
