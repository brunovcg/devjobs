import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FormStyled, Page, Text, Box } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../services/api";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";

const CompanyRegister = () => {
  const schema = yup.object().shape({
    companyName: yup.string().required("Required field"),
    email: yup.string().email("Invalid e-mail").required("Required field"),
    password: yup
      .string()
      .min(6, "Minimum 6 digits")
      .required("Required field"),
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

  const onSubmitFunction = ({ companyName, email, password }) => {
    const company = { companyName, email, password };

    api
      .post("/companies", company)
      .then((response) => {
        toast.success("Account created successfully");

        const newCompany = response.data;
        localStorage.setItem("@DevJobs:Company", JSON.stringify(newCompany));

        return history.push("/search");
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
        <FormStyled>
          <h2>Company Register</h2>
          <Input
            placeholder="Company Name"
            register={register}
            name="companyName"
            error={errors.companyName?.message}
            setHeight="70px"
            setWidth="100%"
          />

          <Input
            placeholder="Email"
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

          <Input
            placeholder="Confirm Password"
            type="password"
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword?.message}
            setHeight="70px"
            setWidth="100%"
          />

          <Button
            setClick={handleSubmit(onSubmitFunction)}
            setSize="large"
            setColor="var(--blue)"
          >
            Sign Up
          </Button>
        </FormStyled>

        <Text>
          If you already have an account,{" "}
          <Link to="/companyLogin">sign in here.</Link>
        </Text>
      </Page>
    </Box>
  );
};

export default CompanyRegister;
