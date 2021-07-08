import Button from '../../components/Button';
import { Sumary, Name, Adress, Resum, ContainerCard, Box, Container, BoxSkill} from './styles';

export const Resume = () => {
  return (
    <Resum>
      <Sumary>
        <Name>
          <h2>[First Name]</h2>
          <h2>[Last Name]</h2>
        </Name>
        <Adress>
          <h4>[Addres]</h4>
          <h4>[Phone]</h4>
          <h4>[Email]</h4>
          <h4>[Linkedin]</h4>
          <h4>[Portfolio]</h4>
        </Adress>
      </Sumary>
      <Container>
        <ContainerCard>
          <h2>Objective</h2>
          <Box>
          <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing ept. Nunc tortor tellus, 
            tincidunt vitae finibus in, rhoncus sit amet purus. 
            Vivamus ultrices mi id vept placerat fermentum. 
            Phasellus laoreet at sapien at venenatis. Phasellus consectetur eget tortor vitae cursus. 
            Etiam dictum vulputate porta. Vestibulum ultricies congue sodales. Sed et pgula non.</p>
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
