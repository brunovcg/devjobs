import Button from '../../components/Button';
import {
  ContainerButtons, 
  ContainerPage, 
  ContainerSumary,
  ContainerName,
  ContainerAddress,
  ContainerCard,
  ContainerDescription,
  ContainerInfos,
  ContainerSkills
} from "./styles";
import { useState } from 'react';
import Modal from 'react-modal';
import Header from "../../components/Header";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import { specialization } from '../../utils';
import Select from '../../components/Select';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '90vw',
    height: '60vh',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

 const Resume = () => {
  const [formName, setFormName] = useState(true)
  const [formObjective, setFormObjective] = useState(true)
  const [formEducation, setFormEducation] = useState(true)
  const [formExperience, setFormExperience] = useState(true)
  const [formSkils, setFormSkils] = useState(true)
  const [formActivities, setFormActivities] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false);

  const forSchemaName = yup.object().shape({
    FirstName: yup.string().required("FirstName"),
    LastName: yup.string().required("LastName"),
    Email: yup.string().required("Email Obrigatótio").email("Email Inválido"),
    Phone: yup.string().required("Telefone Obrigatótio"),
    Adress: yup.string().required("Endereço Obrigatótio"),
    Linkedin: yup.string().required("Linkedin"),
    Specialization: yup.string().required("Specialization"),
  })
  const forSchemaObjective = yup.object().shape({
    Objective: yup.string().required("Objective"),
  })
  const forSchemaEducation = yup.object().shape({
    Title: yup.string().required("Title"),
    School: yup.string().required("School"),
    From: yup.string().required("From"),
    To: yup.string().required("To"),
    projects: yup.string().required("projects"),
  })
  const forSchemaExperience = yup.object().shape({
    Company: yup.string().required("Company"),
    Job: yup.string().required("Job"),
    JobTo: yup.string().required("JobTo"),
    JobFrom: yup.string().required("JobFrom"),
    activitiesJob: yup.string().required("activitiesJob"),
  })
  const forSchemaActivities = yup.object().shape({
    Activities: yup.string(),
  })
  const{register, handleSubmit, formState:{errors}} = useForm({
      resolverName: yupResolver(forSchemaName),
      resolverObjective: yupResolver(forSchemaObjective),
      resolverEducation: yupResolver(forSchemaEducation),
      resolverExperience: yupResolver(forSchemaExperience),
      resolverActivities: yupResolver(forSchemaActivities),
  });
  const handleSubmitFunctionName = (data) => {
    setFormName(data)
  }
  const handleSubmitFunctionObjective = (data) => {
    setFormObjective(data)
  }
  const handleSubmitFunctionEducation = (data) => {
    setFormEducation(data)
  }
  const handleSubmitFunctionExperience = (data) => {
    setFormExperience(data)
  }
  const handleSubmitFunctionActivities = (data) => {
    setFormActivities(data)
  }







  

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
    <Header/>
    <ContainerPage>
        <ContainerButtons>
            <Button setSize={"huge"} setColor="var(--dark-grey)" setClick={""}>Contact the Dev</Button>
            <Button setSize={"huge"} setColor="var(--dark-grey)" setClick={""}>PDF</Button>
            <Button setSize={"huge"} setColor="var(--dark-grey)" setClick={openModal}>Edit Resume</Button>
        </ContainerButtons>
        <ContainerSumary>
            <ContainerName>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
                onRequestClose={openModal}
                
              >
                
                <h3>Formulário</h3>
                    <form onSubmit={handleSubmit(handleSubmitFunctionName)} className="form">
                      <h3>Form Name</h3>
                      <p>First Name</p>
                      <input placeholder="First Name" {...register("FirstName")}/>
                      {errors.FirstName?.message}
                      <p>Last Name</p>
                      <input placeholder="Last Name" {...register("LastName")}/>
                      {errors.LastName?.message}
                      <p>Email</p>
                      <input placeholder="Email" {...register("Email")}/>
                      {errors.Email?.message}
                      <p>Phone</p>
                      <input placeholder="Phone" {...register("Phone")}/>
                      {errors.Phone?.message}
                      <p>Adress</p>
                      <input placeholder="Adress" {...register("Adress")}/>
                      {errors.Adress?.message}
                      <p>Linkedin</p>
                      <input placeholder="Adress" {...register("Linkedin")}/>
                      {errors.Linkedin?.message}
                      <p>Specialization</p>

                      
                      <Select options={specialization} register={register("Specialization")}>
                      </Select>


                      <button type="submit">Enviar</button>
                    </form>


                    <form onSubmit={handleSubmit(handleSubmitFunctionObjective)} className="form">
                    <h3>Form Objective</h3>
                      <p>Objective</p>
                      <input placeholder="Objective" {...register("Objective")}/>
                      {errors.Objective?.message}
                      <button type="submit">Enviar</button>
                    </form>
                    <form onSubmit={handleSubmit(handleSubmitFunctionEducation)} className="form">
                    <h3>Form Education</h3>
                      <p>School Title</p>
                      <input placeholder="Title" {...register("Title")}/>
                      {errors.Title?.message}
                      <p>School</p>
                      <input placeholder="School" {...register("School")}/>
                      {errors.School?.message}
                      <p>School From</p>
                      <input type="date" placeholder="School From" {...register("From")}/>
                      {errors.From?.message}
                      <p>School To</p>
                      <input type="date" placeholder="School To" {...register("To")}/>
                      {errors.To?.message}
                      <p>Projects</p>
                      <input placeholder="School projects" {...register("projects")}/>
                      {errors.projects?.message}
                      <button type="submit">Enviar</button>
                      </form>
                    <form onSubmit={handleSubmit(handleSubmitFunctionExperience)} className="form">
                      <h3>Form Projects</h3>
                      <p>Company</p>
                      <input placeholder="Company" {...register("Company")}/>
                      {errors.Company?.message}
                      <p>Job</p>
                      <input placeholder="Job" {...register("Job")}/>
                      {errors.Job?.message}
                      <p>Job To</p>
                      <input type="date" placeholder="Job" {...register("JobTo")}/>
                      {errors.JobTo?.message}
                      <p>Job From</p>
                      <input type="date" placeholder="Objective" {...register("JobFrom")}/>
                      {errors.JobFrom?.message}
                      <p>Activities Job</p>
                      <input placeholder="Activities Job" {...register("activitiesJob")}/>
                      {errors.activitiesJob?.message}
                      <button type="submit">Enviar</button>
                      </form>
                    <form onSubmit={handleSubmit(handleSubmitFunctionActivities)} className="form">
                      <h3>Form Activities</h3>
                      <p>Activities</p>
                      <input placeholder="Activities" {...register("Activities")}/>
                      {errors.Activities?.message}
                      <button type="submit">Enviar</button>
                    </form>
                    <button onClick={closeModal}>Close</button>
              </Modal>
              {formName===true?
                <>
                  <h2>First Name</h2>
                  <h2>Last Name</h2>
                </>:
                <>
                  <h2>{formName.FirstName}</h2>
                  <h2>{formName.LastName}</h2>                  
                </>
              }
            </ContainerName>
            <ContainerAddress>
            {formName===true?
                <>
                  <h4>Address</h4>
                  <h4>Phone</h4>
                  <h4>Email</h4>
                  <h4>Linkedin</h4>
                  <h4>Specialization</h4>
                </>:
                <>
                  <h4>{formName.Adress}</h4>
                  <h4>{formName.Phone}</h4>
                  <h4>{formName.Email}</h4>
                  <h4>{formName.Linkedin}</h4>
                  <h4>{formName.Specialization}</h4>               
                </>
            }
            </ContainerAddress>
        </ContainerSumary>
        <ContainerInfos>
            <ContainerCard>
                <h2>Objective</h2>
                <ContainerDescription>

                {formObjective===true?
                <>
                 <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing ept. Nunc tortor tellus, 
                        tincidunt vitae finibus in, rhoncus sit amet purus. 
                        Vivamus ultrices mi id vept placerat fermentum. 
                        Phasellus laoreet at sapien at venenatis. Phasellus consectetur eget tortor vitae cursus. 
                        Etiam dictum vulputate porta. Vestibulum ultricies congue sodales. Sed et pgula non.
                  </p>
                </>:
                <>
                  <p>{formObjective.Objective}</p>                 
                </>
              }
                    
                </ContainerDescription>
            </ContainerCard>
        </ContainerInfos>
        <ContainerInfos>
            <ContainerCard>
                <h2>Education</h2>
                <ContainerDescription>
                {formEducation===true?
                <>
                  <p>Degree Title | School</p>
                  <p>Date From - Date To</p>
                  <p>Lorem ipsum dolor sit amet, onsectetur adipiscing ept. Nunc tortor tellus</p>
                </>:
                <>
                  <p>{formEducation.Title} | {formName.School}</p>
                  <p>{formEducation.From} | {formName.To}</p>
                  <p>{formEducation.projects}</p>                  
                </>}
                   
                </ContainerDescription>
            </ContainerCard>
        </ContainerInfos>
        <ContainerInfos>
            <ContainerCard>
                <h2>Experience</h2>
                <ContainerDescription>
                {formExperience===true?
                <>
                  <p>Job Title | Company</p>
                  <p>Data From - Date To</p>
                  <p>Lorem ipsum dolor sit amet, onsectetur adipiscing ept. Nunc tortor tellus</p>
                </>:
                <>
                  <p>{formExperience.Job} | {formExperience.Company}</p>
                  <p>{formExperience.JobFrom} | {formExperience.JobTo}</p>
                  <p>{formExperience.activitiesJob}</p>                  
                </>}
                    
                </ContainerDescription>
            </ContainerCard>
        </ContainerInfos>
        <ContainerInfos>
        <ContainerCard>
            <h2>Skills</h2>
            <ContainerSkills>
              
                <p>Skill</p><p>Skill</p>
                <p>Skill</p><p>Skill</p>
                <p>Skill</p><p>Skill</p>
                <p>Skill</p><p>Skill</p>
                <p>Skill</p><p>Skill</p>
            </ContainerSkills>
        </ContainerCard>
    </ContainerInfos>
    <ContainerInfos>
        <ContainerCard>
            <h2>Activities</h2>
            <ContainerDescription>
              {formActivities===true?
                <>
                  <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing ept. Nunc tortor tellus, 
                    tincidunt vitae finibus in
                </p>
                </>:
                <>
                  <p>{formActivities.Activities}</p>   
                </>}
               
            </ContainerDescription>
        </ContainerCard>
    </ContainerInfos>

      </ContainerPage>
  </>

    
  );
}
export default Resume;