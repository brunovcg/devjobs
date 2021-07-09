import {messages} from "../../assets/email.png"
import {resume} from "../../assets/resume.png"
import {ContainerPage, ContainerOptions, ContainerTitleImg} from "./styles";

const Dashboard = () => {
    return (
        <ContainerPage>
            <ContainerOptions>
                <ContainerTitleImg>
                    <h2>Messages</h2>
                    <img src={messages} alt="Messages"/>
                </ContainerTitleImg>
                <div>
                    <h2>Resume</h2>
                    <img src={resume} alt="Resume"/>
                </div>
            </ContainerOptions>
        </ContainerPage>
    )
}

export default Dashboard;