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
import { level, specialization } from '../../utils';
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


  const [modalIsOpen, setIsOpen] = useState(false);

//---------------------------------------------------------------------------------------------------------------------------------------
  const [dadosResume, setDadosResume] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    adress: '',
    linkedin: '',
    specialization: '',
    activities: '',
    objective: '',
    formation: [{ Title: '', School: '', SchoolFrom: '', SchoolTo: '', projects: '' }],
    experience: [{ Company: '', Job: '', JobFrom: '', JobTo: '', activitiesJob: ''}],
    skills:[{skill:'',level:''}],
  });

  
  const addinputButtonSkill = (e) => {
    let currentSkill = [...dadosResume.skills];
    const newLine = {skill:'',level:''};
    currentSkill.push(newLine);
    setDadosResume(prevState => ({ ...prevState, skills: currentSkill }));
  }
  const handleChangeSkill = (event) => {
    const { name, value, type } = event.target;
    const index = event.target.dataset.index;
    let newSkill = [...dadosResume.skills];
    const newValue = (type === 'number') ? value.slice(0,2) : value;
    newSkill[index] = { ...newSkill[index], [name]: newValue };
    setDadosResume(prevState => ({ ...prevState, skills: newSkill }));
  }
  const handleRemoveSkill = (position) => {
    const currentSkill = [...dadosResume.skills];
    const delSkill = currentSkill.filter((_, index) => index !== position);
    setDadosResume(prevState => ({ ...prevState, skills: delSkill }));
  }

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
    const index = event.target.dataset.index;
    let newFormacaoAcademica = [...dadosResume.formation];
    const newValue = (type === 'number') ? value.slice(0,4) : value;
    newFormacaoAcademica[index] = { ...newFormacaoAcademica[index], [name]: newValue };
    setDadosResume(prevState => ({ ...prevState, formation: newFormacaoAcademica }));
  }

  const addJob = () => {
    let actualJob = [...dadosResume.experience];
    const newLine = { Company: '', Job: '', JobFrom: '', JobTo: '', activitiesJob: '' };
    actualJob.push(newLine);
    setDadosResume(prevState => ({ ...prevState, experience: actualJob }));
  };
  const deleteJob = (position) => {
    const actualJob = [...dadosResume.experience];
    const newJob = actualJob.filter((_, index) => index !== position);
    setDadosResume(prevState => ({ ...prevState, experience: newJob }));
  }
  const handleChangeJob = (event) => {
    const { name, value, type } = event.target;
    const index = event.target.dataset.index;
    let newJob = [...dadosResume.experience];
    const newValue = (type === 'number') ? value.slice(0,4) : value;
    newJob[index] = { ...newJob[index], [name]: newValue };
    setDadosResume(prevState => ({ ...prevState, experience: newJob }));
  }




  const handleChangePersonalData = (event) => {
    const { name, value, type } = event.target;
    const newValue = (type === 'number') ? value.slice(0,4) : value;
    setDadosResume(prevState => ({ ...prevState, [name]: newValue }));
    console.log(dadosResume)
  }
//--------------------------------------------------------------------------------------------------------------------------------------------

const forSchema = yup.object().shape({
  Title: yup.string().required("Title required"),
  School: yup.string().required("School required"),
  SchoolFrom: yup.string().required("School From required"),
  SchoolTo: yup.string().required("School To required"),
  projects: yup.string().required("projects required"),
})

const{register, handleSubmit, formState:{errors}} = useForm({
  resolver: yupResolver(forSchema)
});
const handleSubmitFunction = (data) => setForm(data)

const [form, setForm] = useState(true)
//--------------------------------------------------------------------------------------------------------------------------------------------
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
                    
                <ContainerSumary>
                  <input placeholder='First Name' value={dadosResume.firstName} name='firstName' type='text' onChange={(e)=>handleChangePersonalData(e)}/>
                  <input placeholder='Last Name' value={dadosResume.lastName} name='lastName' type='text' onChange={(e)=>handleChangePersonalData(e)}/>
                  <input placeholder='Phone' value={dadosResume.phone} name='phone' type='text' onChange={(e)=>handleChangePersonalData(e)}/>
                  <input placeholder='Email' value={dadosResume.email} name='email' type='text' onChange={(e)=>handleChangePersonalData(e)}/>
                  <input placeholder='Adress' value={dadosResume.adress} name='adress' type='text' onChange={(e)=>handleChangePersonalData(e)}/>
                  <input placeholder='Linkedin' value={dadosResume.linkedin} name='linkedin' type='text' onChange={(e)=>handleChangePersonalData(e)}/>
                  <select value={dadosResume.specialization} name='specialization' type='text' onChange={(e)=>handleChangePersonalData(e)}>
                    {specialization.map((specialization)=>
                      <option>{specialization}</option>
                    )}
                    
                    
                  </select>
                </ContainerSumary>

                <ContainerSumary>
                  <input placeholder='Objective' value={dadosResume.objective} name='objective' type='text' onChange={(e)=>handleChangePersonalData(e)}/>
                </ContainerSumary>
                <ContainerSumary>
                  <input placeholder='Activities' value={dadosResume.activities} name='activities' type='text' onChange={(e)=>handleChangePersonalData(e)}/>
                </ContainerSumary>

                <h3>Form Education</h3>
                  <Button setColor="var(--dark-grey)" setClick={addFormacao}>Add Formation</Button>
                  {dadosResume.formation.map((formation, index)=>
                  <ContainerName>
                  <form onSubmit={handleSubmit(handleSubmitFunction)} className="form">
                    <input data-index={index} {...register("Title")} placeholder='Title' value={formation.Title} name='Title' type='text' onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                    <input data-index={index} {...register("School")} placeholder='School' name='School' type='text' value={formation.School} onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                    <input data-index={index} {...register("SchoolFrom")} placeholder='School From' name='SchoolFrom' type='date' value={formation.SchoolFrom} onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                    <input data-index={index} {...register("SchoolTo")} placeholder='School To' name='SchoolTo' type='date' value={formation.SchoolTo} onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                    <input data-index={index} {...register("projects")} placeholder='School projects' name='projects' type='text' value={formation.projects} onChange={(e)=>handleChangeFormacaoAcademica(e)}/>
                    <Button setColor="var(--dark-grey)" setClick={()=>deleteFormacao(index)}>Del</Button>
                    <button type="submit">Enviar</button>
                  </form>
                  </ContainerName>
                )}

                <h3>Form Jobs</h3>
                  <Button setColor="var(--dark-grey)" setClick={addJob}>Add Formation</Button>
                  {dadosResume.experience.map((experience, index)=>
                  <ContainerName>
                    <input data-index={index} placeholder='Company' value={experience.Company} name='Company' type='text' onChange={(e)=>handleChangeJob(e)}/>
                    <input data-index={index} placeholder='Job' name='Job' type='text' value={experience.Job} onChange={(e)=>handleChangeJob(e)}/>
                    <input data-index={index} placeholder='Job To' name='JobTo' type='date' value={experience.JobTo} onChange={(e)=>handleChangeJob(e)}/>
                    <input data-index={index} placeholder='Job From' name='JobFrom' type='date' value={experience.JobFrom} onChange={(e)=>handleChangeJob(e)}/>
                    <input data-index={index} placeholder='Activities Job' name='activitiesJob' type='text' value={experience.activitiesJob} onChange={(e)=>handleChangeJob(e)}/>
                    <Button setColor="var(--dark-grey)" setClick={()=>deleteJob(index)}>Del</Button>
                  </ContainerName>
                  )}


                
                <h3>Form Skills</h3>

                <Button setColor="var(--dark-grey)" setClick={addinputButtonSkill}>Add Skill</Button>
                {dadosResume.skills.map((skill, index)=>
                  <ContainerName>
                    <input data-index={index} placeholder='Skill' name='skill' type='text' value={skill.skill} onChange={(e)=>handleChangeSkill(e)}/>
                    <select data-index={index} placeholder='Level' value={skill.level} name='level' type='number' onChange={(e)=>handleChangeSkill(e)}>
                      {level.map((level)=>
                        <option>{level}</option>
                      )}
                    </select>

                    <Button setColor="var(--dark-grey)" setClick={()=>handleRemoveSkill(index)}>Del</Button>
                  </ContainerName>
                )}
                <Button setColor="var(--red)" setClick={closeModal}>Exit</Button>
        
              </Modal>
              {dadosResume.firstName===''?
                <>
                  <h2>First Name</h2>
                  <h2>Last Name</h2>
                </>:
                <>
                  <h2>{dadosResume.firstName}</h2>
                  <h2>{dadosResume.lastName}</h2>                  
                </>
              }
            </ContainerName>
            
            {dadosResume.firstName===''?
                <ContainerAddress>
                  <h4>Address</h4>
                  <h4>Phone</h4>
                  <h4>Email</h4>
                  <h4>Linkedin</h4>
                  <h4>Specialization</h4>
                </ContainerAddress>:
                <ContainerAddress>
                  <h4>{dadosResume.adress}</h4>
                  <h4>{dadosResume.phone}</h4>
                  <h4>{dadosResume.email}</h4>
                  <h4>{dadosResume.linkedin}</h4>
                  <h4>{dadosResume.specialization}</h4>               
                </ContainerAddress>
            }
            
        </ContainerSumary>
        <ContainerInfos>
            <ContainerCard>
                <h2>Objective</h2>
                <ContainerDescription>

                {dadosResume.objective===''?
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
                  <p>{dadosResume.objective}</p>                 
                </>
              }
                    
                </ContainerDescription>
            </ContainerCard>
        </ContainerInfos>
        <ContainerInfos>
            <ContainerCard>
                <h2>Education</h2>
                <ContainerDescription>
                {dadosResume.firstName===true?
                <>
                  <p>Degree Title | School</p>
                  <p>Date From - Date To</p>
                  <p>Lorem ipsum dolor sit amet, onsectetur adipiscing ept. Nunc tortor tellus</p>
                </>:
                <>
                  <p>{dadosResume.formation.Title} | {dadosResume.formation.School}</p>
                  <p>{dadosResume.formation.SchoolFrom} | {dadosResume.formation.SchoolTo}</p>
                  <p>{dadosResume.formation.projects}</p>                  
                </>}
                   
                </ContainerDescription>
            </ContainerCard>
        </ContainerInfos>
        <ContainerInfos>
            <ContainerCard>
                <h2>Experience</h2>
                
                {dadosResume.firstName===true?
                <ContainerDescription>
                  <p>Job Title | Company</p>
                  <p>Data From - Date To</p>
                  <p>Lorem ipsum dolor sit amet, onsectetur adipiscing ept. Nunc tortor tellus</p>
                </ContainerDescription>:
                  
                  <>  
                {dadosResume.experience.map((experience)=>
                  <ContainerDescription>
                    <p>{experience.Job} | {experience.Company}</p>
                    <p>{experience.JobFrom} | {experience.JobTo}</p>
                    <p>{experience.activitiesJob}</p>
                  </ContainerDescription>
                  
                )}
                  </>
                }
                    
                
            </ContainerCard>
        </ContainerInfos>
        <ContainerInfos>
        <ContainerCard>
            <h2>Skills</h2>
            {dadosResume.skills[0].skill===''?<ContainerSkills><p>Skill | Level</p><p>Skill | Level</p><p>Skill | Level</p>
                                       <p>Skill | Level</p><p>Skill | Level</p><p>Skill | Level</p>
                                       <p>Skill | Level</p><p>Skill | Level</p><p>Skill | Level</p>
                                       <p>Skill | Level</p><p>Skill | Level</p><p>Skill | Level</p>
                                      </ContainerSkills>:
                                      <ContainerSkills>
                                        {dadosResume.skills.map((skill)=> <p>{skill.skill} | {skill.level}</p>)}
                                      </ContainerSkills>
                                       }
            
        </ContainerCard>
    </ContainerInfos>
    <ContainerInfos>
        <ContainerCard>
            <h2>Activities</h2>
            <ContainerDescription>
              {dadosResume.activities===''?
                <>
                  <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing ept. Nunc tortor tellus, 
                    tincidunt vitae finibus in
                </p>
                </>:
                <>
                  <p>{dadosResume.activities}</p>   
                </>}
               
            </ContainerDescription>
        </ContainerCard>
    </ContainerInfos>

      </ContainerPage>
  </>

    
  );
}
export default Resume;