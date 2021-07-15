import { Container, DevInfo } from "./styles";
import Button from "../Button";
import {useResume} from '../../providers/ResumeDownload'
import {useHistory} from 'react-router-dom'

const CardDev = ({userId, name, email, phone, experience }) => {




  const {getResumeInfo} = useResume()

  const history = useHistory()

  const openDetails = ( ) =>{
    localStorage.setItem(
      "@DevJobs:Render:User",
      JSON.stringify(userId))}

  const renderResume = () => {

    
    history.push('/visualizationResume')
  }


  return (
    <Container>
      <Button setClick={openDetails}>{name}</Button>

      <DevInfo>
        <h3>{phone}</h3>
        <h3>{email}</h3>
        <h3>{experience}</h3>
      </DevInfo>

      <button onClick={renderResume}>teste</button>
    </Container>
  );
};

export default CardDev;
