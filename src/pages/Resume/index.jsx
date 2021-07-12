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
  ContainerSkills,
  ContainerModal
} from "./styles";
import { useState } from 'react';
import Modal from 'react-modal';
import Header from "../../components/Header";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import { specialization } from '../../utils';
import Select from '../../components/Select';
import Input from '../../components/Input';
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

  const [formActivities, setFormActivities] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false);

  const [skills, setSkills] = useState([''])
//---------------------------------------------------------------------------------------------------------------------------------------
  const [dadosResume, setDadosResume] = useState({
    nome: '',
    contato: '',
    email: '',
    nacionalidade: 'brasileiro(a)',
    estadoCivil: '',
    idade: '',
    endereco: '',
    cidade: '',
    estado: '',
    objetivo: '',
    formation: [{ Title: '', School: '', SchoolFrom: '', SchoolTo: '', projects: '' }],
    experiencia: [{ empresa: '', cargo: '', anoEntrada: '', anoSaida: '', atividades: '', empregoAtual: false }],
    qualificacao: [{ qualificacao: '' }]
  });

  const addFormacao = () => {
    let actualFormacao = [...dadosResume.formation];
    const newLine = { Title: '', School: '', SchoolFrom: '', SchoolTo: '', projects: '' };
    actualFormacao.push(newLine);
    setDadosResume(prevState => ({ ...prevState, formation: actualFormacao }));
  };
  const deleteFormacao = (position) => {
    const actualFormacao = [...dadosResume.formation];
    const newFormacao = actualFormacao.filter((_, index) => index !== position);
    setDadosResume(prevState => ({ ...prevState, formation: newFormacao }));
  }
  const handleChangeFormacaoAcademica = (event) => {
    const { name, value, type } = event.target;
    console.log(dadosResume.formation)
    const index = event.target.dataset.index;
    let newFormacaoAcademica = [...dadosResume.formation];
    const newValue = (type === 'number') ? value.slice(0,4) : value;
    newFormacaoAcademica[index] = { ...newFormacaoAcademica[index], [name]: newValue };
    setDadosResume(prevState => ({ ...prevState, formation: newFormacaoAcademica }));
  }



//--------------------------------------------------------------------------------------------------------------------------------------------




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
  const forSchemaSkills = yup.object().shape({
    Skill: yup.string(),
  })
  const{register, handleSubmit, formState:{errors}} = useForm({
      resolverName: yupResolver(forSchemaName),
      resolverObjective: yupResolver(forSchemaObjective),
      resolverEducation: yupResolver(forSchemaEducation),
      resolverExperience: yupResolver(forSchemaExperience),
      resolverActivities: yupResolver(forSchemaActivities),
      resolverSkills: yupResolver(forSchemaSkills),
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
  const handleSubmitFunctionSkill = (data) => {
    setFormActivities(data)
  }




  const addinputButtonSkill = (e) => {
    e.preventDefault();
    setSkills([...skills, ''])
  }
  const handleChangeSkill = (e, index) => {
    skills[index] = e.target.value;
    setSkills([...skills])
  }
  const handleRemoveSkill = (position) => {
    setSkills([...skills.filter((_,index)=> index !== position)])
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
                    <form onSubmit={handleSubmit(handleSubmitFunctionName)} className="form">
                    <ContainerSumary>
                      <ContainerName>
                      <h3>Form Name</h3>
                        <p>First Name</p>
                        <Input placeholder="First Name" register={register} name={"FirstName"}/>
                        {errors.FirstName?.message}
                        <p>Last Name</p>
                        <Input placeholder="Last Name" register={register} name={"LastName"} />
                        {errors.LastName?.message}
                        <p>Email</p>
                        <Input placeholder="Email" register={register} name={"Email"} />
                        {errors.Email?.message}
                        <Button setColor="var(--dark-grey)" type="submit">Enviar</Button>
                        </ContainerName>
                        <ContainerName>
                        <p>Phone</p>
                        <Input placeholder="Phone" register={register} name={"Phone"} />
                        {errors.Phone?.message}
                        <p>Adress</p>
                        <Input placeholder="Adress" register={register} name={"Adress"} />
                        {errors.Adress?.message}
                        <p>Linkedin</p>
                        <Input placeholder="Adress" register={register} name={"Linkedin"} />
                        {errors.Linkedin?.message}
                        <p>Specialization</p>
                        <Select options={specialization} register={register("Specialization")}/>
                      </ContainerName>
                    </ContainerSumary>
                    </form>

                  <ContainerSumary>
                    <form onSubmit={handleSubmit(handleSubmitFunctionObjective)} className="form">
                    <h3>Form Objective</h3>
                      <p>Objective</p>
                      <Input setHeight={'50%'} placeholder="Objective" register={register} name={"Objective"}/>
                      {errors.Objective?.message}
                      <Button setColor="var(--dark-grey)" type="submit">Enviar</Button>
                    </form>
                  </ContainerSumary>

                    <ContainerSumary>
                      <ContainerName>
                        <form onSubmit={handleSubmit(handleSubmitFunctionEducation)} className="form">
                        <h3>Form Education</h3>
                        <Button setColor="var(--dark-grey)" setClick={addFormacao}>Add Formation</Button>
                        {dadosResume.formation.map((formation, index)=>
                      <>
                         <ContainerSumary>
                          <input data-index={index} placeholder='Title' value={formation.Title} name='Title' type='text' onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                          <input data-index={index} placeholder='School' name='School' type='text' value={formation.School} onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                          <input data-index={index} placeholder='School From' name='SchoolFrom' type='number' value={formation.SchoolFrom} onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                          <input data-index={index} placeholder='School To' name='instituicao' type='number' value={formation.SchoolTo} onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                          <input data-index={index} placeholder='School projects' name='projects' type='text' value={formation.projects} onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                          <Button setColor="var(--dark-grey)" setClick={()=>deleteFormacao(index)}>Del</Button>
                        </ContainerSumary>
                        </>
                      )}
                          <p>School Title</p>
                          <Input placeholder="Title" register={register} name={"Title"}/>
                          {errors.Title?.message}
                          <p>School</p>
                          <Input placeholder="School" register={register} name={"School"}/>
                          {errors.School?.message}
                          <p>School From</p>
                          <Input type="date" placeholder="School From" register={register} name={"From"}/>
                          {errors.From?.message}
                          <p>School To</p>
                          <Input type="date" placeholder="School To" register={register} name={"To"}/>
                          {errors.To?.message}
                          <p>Projects</p>
                          <Input placeholder="School projects" register={register} name={"projects"}/>
                          {errors.projects?.message}
                          <Button setColor="var(--dark-grey)" type="submit">Enviar</Button>
                        </form>
                        </ContainerName>
{/* 
                        <ContainerName>
                      <h3>Skills</h3>
                      <Button setColor="var(--dark-grey)" setClick={addinputButtonSkill}>Add Skill</Button>
                      
                      {skills.map((skill, index)=>
                      <>
                        <ContainerSumary>
                          <Input placeholder={ `Skill ${index+1}` } value={skill} register={register} name={"Skill"} onChange={(e)=>handleChangeSkill(e,index)}/>
                          <Button setColor="var(--dark-grey)" setClick={()=>handleRemoveSkill(index)}>Del</Button>
                        </ContainerSumary>
                        </>
                      )}
                      
                      <Button setColor="var(--dark-grey)" type="submit">Enviar</Button>
                      </ContainerName>
                    </form>
                    </ContainerSumary>
 */}




                        
                        <ContainerName>
                        <form onSubmit={handleSubmit(handleSubmitFunctionExperience)} className="form">
                          <h3>Form Projects</h3>
                          <p>Company</p>
                          <Input placeholder="Company" register={register} name={"Company"} placeholder=""/>
                          {errors.Company?.message}
                          <p>Job</p>
                          <Input placeholder="Job" register={register} name={"Job"} placeholder=""/>
                          {errors.Job?.message}
                          <p>Job To</p>
                          <Input placeholder="Job To" register={register} name={"JobTo"} type="date"/>
                          {errors.JobTo?.message}
                          <p>Job From</p>
                          <Input placeholder="Job From" register={register} name={"JobFrom"} type="date"/>
                          {errors.JobFrom?.message}
                          <p>Activities Job</p>
                          <Input placeholder="Activities Job" register={register} name={"activitiesJob"}/>
                          {errors.activitiesJob?.message}
                          <Button setColor="var(--dark-grey)" type="submit">Enviar</Button>
                        </form>
                      </ContainerName>
                    </ContainerSumary>
                    <ContainerSumary>
                    <form onSubmit={handleSubmit(handleSubmitFunctionSkill)} className="form">
                    <ContainerName>
                      <h3>Skills</h3>
                      <Button setColor="var(--dark-grey)" setClick={addinputButtonSkill}>Add Skill</Button>
                      
                      {skills.map((skill, index)=>
                      <>
                        <ContainerSumary>
                          <Input placeholder={ `Skill ${index+1}` } value={skill} register={register} name={"Skill"} onChange={(e)=>handleChangeSkill(e,index)}/>
                          <Button setColor="var(--dark-grey)" setClick={()=>handleRemoveSkill(index)}>Del</Button>
                        </ContainerSumary>
                        </>
                      )}
                      
                      <Button setColor="var(--dark-grey)" type="submit">Enviar</Button>
                      </ContainerName>
                    </form>
                    </ContainerSumary>

                    <ContainerSumary>
                      <ContainerName>
                      <form onSubmit={handleSubmit(handleSubmitFunctionActivities)} className="form">
                        <h3>Form Activities</h3>
                        <p>Activities</p>
                        <Input  placeholder="Activities" register={register} name={"Activities"}/>
                        {errors.Activities?.message}
                        <Button setColor="var(--dark-grey)" type="submit">Enviar</Button>
                      </form>
                      <Button setColor="var(--red)" setClick={closeModal}>Close</Button>
                      </ContainerName>
                    </ContainerSumary>
                    
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
                  <p>{formEducation.Title} | {formEducation.School}</p>
                  <p>{formEducation.From} | {formEducation.To}</p>
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
              {skills.map((skill)=> <p>{skill}</p>)}
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