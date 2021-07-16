import { Link, useHistory } from "react-router-dom";
import { FormStyled, Container, Text, Page, Box } from "./styles";
import { useToken } from "../../providers/TokenProvider";
import Button from "../../components/Button";
import api from "../../services/api";
import Input from "../../components/Input";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import { useResume } from "../../providers/ResumeDownload";

const Register = () => {
  const PasswordStrength =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
  const NameValidation = /^[a-z][a-z\s]*$/i;
  const PhoneValidation = /\(?([0-9]{2})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  const { setUserToken } = useToken();

  const { getResumeInfo } = useResume();

  const schema = yup.object().shape({
    firstName: yup.string().required("Required field").matches(NameValidation),
    lastName: yup.string().required("Required field").matches(NameValidation),
    email: yup.string().email("Invalid e-mail").required("Required field"),
    birthDate: yup
      .date()
      .typeError("Must be a valid date")
      .required("Required field"),
    password: yup
      .string()
      .min(6, "Minimum 6 digits")
      .required("Required field")
      .matches(
        PasswordStrength,
        "Use lowercase, uppercase, numbers and symbols."
      ),
    linkedinProfile: yup.string(),
    address: yup.string(),
    phone: yup
      .string()
      .required("Required field")
      .matches(PhoneValidation, "(xx)xxxxx-xxxx"),
    confirmPassword: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Passwords don't match"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    firstName,
    lastName,
    email,
    password,
    birthDate,
    linkedinProfile,
    address,
    phone,
  }) => {
    const user = {
      firstName,
      lastName,
      email,
      password,
      birthDate,
      linkedinProfile,
      address,
      phone,
    };

    api
      .post("/register", user)
      .then((response) => {
        toast.info("Account created successfully");

        const { accessToken } = response.data;
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
        toast.error(
          "An error has occurred, try again using a different e-mail."
        );
      });
  };
  return (
    <Box>
      <Header />
      <Page>
        <Container>
          <h2>Register</h2>

          <FormStyled>
            <Input
              placeholder="First Name*"
              register={register}
              name="firstName"
              error={errors.firstName?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Input
              placeholder="Last Name*"
              register={register}
              name="lastName"
              error={errors.lastName?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Input
              placeholder="E-mail*"
              register={register}
              name="email"
              error={errors.email?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Input
              placeholder="Address"
              register={register}
              name="address"
              error={errors.address?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Input
              placeholder="Birth Date*"
              type="date"
              register={register}
              name="birthDate"
              error={errors.birthDate?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Input
              placeholder="Linkedin Profile"
              register={register}
              name="linkedinProfile"
              error={errors.linkedinProfile?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Input
              placeholder="Phone"
              register={register}
              name="phone"
              error={errors.phone?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Input
              placeholder="Password*"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Input
              placeholder="Confirm Password*"
              type="password"
              register={register}
              name="confirmPassword"
              error={errors.passwordConfirm?.message}
              setHeight="70px"
              setWidth="100%"
            />

            <Button
              setClick={handleSubmit(onSubmitFunction)}
              setColor="var(--blue)"
              setSize="large"
            >
              Sign Up
            </Button>
          </FormStyled>
        </Container>

        <Text>
          If you already have an account, <Link to="/login">sign in here.</Link>
        </Text>
        <Text>*Required field.</Text>
      </Page>
    </Box>
  );
};

export default Register;
