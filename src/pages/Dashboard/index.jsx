import {messages} from "../../assets/email.png"
import {resume} from "../../assets/resume.png"

const Dashboard = () => {
    return (
        <>
            <div>
                <div>
                    <h2>Messages</h2>
                    <img src={messages} alt="Messages"/>
                </div>
                <div>
                    <h2>Resume</h2>
                    <img src={resume} alt="Resume"/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;