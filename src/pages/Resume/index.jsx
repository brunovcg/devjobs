import Button from '../../components/Button';
import { Sumary, Name, Adress, Resum, ContainerCard, Box, Container, BoxSkill} from './styles';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
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

export const Resume = () => {
  const [name, setName] = useState("[First Name]");
  const [lastName, setLastName] = useState("[Last Name]");
  const [adress, setAdress] = useState("[Adress]");
  const [phone, setPhone] = useState("[Phone]");
  const [email, setEmail] = useState("[Email]");
  const [linkedin, setLinkedin] = useState("[Linkedin]");
  const [portfolio, setPortfolio] = useState("[Portfolio]");
  const [objective, setObjective] = useState('Lorem ipsum dolor sit amet');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skils, setSkils] = useState('');
  const [activities, setActivities] = useState('');

  
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  

  function openModal() {
    modalIsOpen?setIsOpen(false):setIsOpen(true)
  }




  return (
    <Resum>
      <Sumary>
        <Modal
           isOpen={modalIsOpen}
           style={customStyles}
           contentLabel="Example Modal"
           onRequestClose={openModal}
        >

          <Input value={name} onChange={e => setName(e.target.value)}/>
          <Input value={lastName} onChange={e => setLastName(e.target.value)}/>
          <Input value={adress} onChange={e => setAdress(e.target.value)}/>
          <Input value={phone} onChange={e => setPhone(e.target.value)}/>
          <Input value={email} onChange={e => setEmail(e.target.value)}/>
          <Input value={portfolio} onChange={e => setPortfolio(e.target.value)}/>
          <Input value={objective} onChange={e => setObjective(e.target.value)}/>
          <Input value={education} onChange={e => setEducation(e.target.value)}/>
          <Input value={experience} onChange={e => setExperience(e.target.value)}/>
          <Input value={skils} onChange={e => setSkils(e.target.value)}/>
          <Input value={activities} onChange={e => setActivities(e.target.value)}/>
          

        </Modal>
        <Name onClick={openModal}>
          <h2>{name}</h2>
          <h2>{lastName}</h2>
        </Name>
        <Adress>
          <h4>{adress}</h4>
          <h4>{phone}</h4>
          <h4>{email}</h4>
          <h4>{linkedin}</h4>
          <h4>{portfolio}</h4>
        </Adress>
      </Sumary>
      <Container>
        <ContainerCard>
          <h2>Objective</h2>
          <Box>
          <p>{objective}</p>
          </Box>
        </ContainerCard>
      </Container>
    
      <Container>
        <ContainerCard>
          <h2>Education</h2>
          <Box>
            <p>[Degree Title] | [Scholl]</p>  
            <p>[Dates From] - [TO]</p>
            <p>[Lorem ipsum dolor sit amet, consectetur adipiscing ept. Nunc tortor tellus, tincidunt vitae finibus in]</p>
          </Box>
        </ContainerCard>
      </Container>

      <Container>
        <ContainerCard>
          <h2>Experience</h2>
          <Box>
          <p>[Job Title] [Company]</p>
          <p>[Dates From] - [TO]</p> 
          <p>[Lorem ipsum dolor sit amet, consectetur adipiscing ept. Nunc tortor tellus, tincidunt vitae finibus in]</p>
          </Box>
        </ContainerCard>
      </Container>

      <Container>
        <ContainerCard>
          <h2>Skils</h2>
          <BoxSkill>
                <p>-[Skill]</p> <p>-[Skill]</p>
                <p>-[Skill]</p> <p>-[Skill]</p>
                <p>-[Skill]</p> <p>-[Skill]</p>
                <p>-[Skill]</p> <p>-[Skill]</p>
                <p>-[Skill]</p> <p>-[Skill]</p>
                <p>-[Skill]</p> <p>-[Skill]</p>           
          </BoxSkill>
        </ContainerCard>
      </Container>

      <Container>
        <ContainerCard>
          <h2>Activities</h2>
          <Box>
          <p>[Lorem ipsum dolor sit amet, 
            consectetur adipiscing ept. Nunc tortor tellus, 
            tincidunt vitae finibus in]</p>
          </Box>
        </ContainerCard>
      </Container>
      <Button setColor="red" size="large">Export PDF</Button>
    </Resum>
    
  );
};
