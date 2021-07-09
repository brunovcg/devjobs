import Header from "../../components/Header";
import Button from "../../components/Button";

const VisualizationResume = () => {
    return (
        <>
            <Header/>
            <div>
                <Button setSize={"huge"} setColor="var(--dark-grey)" setClick={""}>Contact the Dev</Button>
                <Button setSize={"huge"} setColor="var(--dark-grey)" setClick={""}>PDF</Button>
            </div>
            <div>
                <div>
                    <div>
                        <h2>First Name</h2>
                        <h2>Last Name</h2>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <h4>Phone</h4>
                        <h4>Email</h4>
                        <h4>Linkedin</h4>
                        <h4>Portfolio</h4>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Objective</h2>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing ept. Nunc tortor tellus, 
                                tincidunt vitae finibus in, rhoncus sit amet purus. 
                                Vivamus ultrices mi id vept placerat fermentum. 
                                Phasellus laoreet at sapien at venenatis. Phasellus consectetur eget tortor vitae cursus. 
                                Etiam dictum vulputate porta. Vestibulum ultricies congue sodales. Sed et pgula non.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Education</h2>
                        <div>
                            <p>Degree Title | School</p>
                            <p>Date From - Date To</p>
                            <p>Lorem ipsum dolor sit amet, onsectetur adipiscing ept. Nunc tortor tellus</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Experience</h2>
                        <div>
                            <p>Job Title | Company</p>
                            <p>Data From - Date To</p>
                            <p>Lorem ipsum dolor sit amet, onsectetur adipiscing ept. Nunc tortor tellus</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Skills</h2>
                        <div>
                            <p>Skill</p><p>Skill</p>
                            <p>Skill</p><p>Skill</p>
                            <p>Skill</p><p>Skill</p>
                            <p>Skill</p><p>Skill</p>
                            <p>Skill</p><p>Skill</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Activities</h2>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing ept. Nunc tortor tellus, 
                                tincidunt vitae finibus in
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisualizationResume;