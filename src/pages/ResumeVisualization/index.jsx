import Header from "../../components/Header";
import Button from "../../components/Button";
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

const VisualizationResume = () => {
    return (
        <>
            <Header/>
            <ContainerPage>
                <ContainerButtons>
                    <Button setSize={"huge"} setColor="var(--dark-grey)" setClick={""}>Contact the Dev</Button>
                    <Button setSize={"huge"} setColor="var(--dark-grey)" setClick={""}>PDF</Button>
                </ContainerButtons>
                <ContainerSumary>
                    <ContainerName>
                        <h2>First Name</h2>
                        <h2>Last Name</h2>
                    </ContainerName>
                    <ContainerAddress>
                        <h4>Address</h4>
                        <h4>Phone</h4>
                        <h4>Email</h4>
                        <h4>Linkedin</h4>
                        <h4>Portfolio</h4>
                    </ContainerAddress>
                </ContainerSumary>
                <ContainerInfos>
                    <ContainerCard>
                        <h2>Objective</h2>
                        <ContainerDescription>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing ept. Nunc tortor tellus, 
                                tincidunt vitae finibus in, rhoncus sit amet purus. 
                                Vivamus ultrices mi id vept placerat fermentum. 
                                Phasellus laoreet at sapien at venenatis. Phasellus consectetur eget tortor vitae cursus. 
                                Etiam dictum vulputate porta. Vestibulum ultricies congue sodales. Sed et pgula non.
                            </p>
                        </ContainerDescription>
                    </ContainerCard>
                </ContainerInfos>
                <ContainerInfos>
                    <ContainerCard>
                        <h2>Education</h2>
                        <ContainerDescription>
                            <p>Degree Title | School</p>
                            <p>Date From - Date To</p>
                            <p>Lorem ipsum dolor sit amet, onsectetur adipiscing ept. Nunc tortor tellus</p>
                        </ContainerDescription>
                    </ContainerCard>
                </ContainerInfos>
                <ContainerInfos>
                    <ContainerCard>
                        <h2>Experience</h2>
                        <ContainerDescription>
                            <p>Job Title | Company</p>
                            <p>Data From - Date To</p>
                            <p>Lorem ipsum dolor sit amet, onsectetur adipiscing ept. Nunc tortor tellus</p>
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
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing ept. Nunc tortor tellus, 
                                tincidunt vitae finibus in
                            </p>
                        </ContainerDescription>
                    </ContainerCard>
                </ContainerInfos>
            </ContainerPage>
        </>
    )
}

export default VisualizationResume;