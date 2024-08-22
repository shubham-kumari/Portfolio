import React from 'react'
import circle from '../assets/images/Ellipse.svg'
import star from '../assets/images/Group 1.svg'
import ellipse from '../assets/images/Ellipse 4.svg'
import line from '../assets/images/Line 1.svg'
import github from '../assets/images/Github.svg'
import linkdien from '../assets/images/Vector.svg'

const Cv = () => {
    return (
        <>
            <div>
                <h1>CV</h1>
                <img src={circle} alt="Circle" />
                <img src={star} alt="Star" />
                <div>
                    <div>
                        <div>
                            <p>Work Experience</p>
                            <div>
                                <div>
                                    <img src={ellipse} alt="Circle" />
                                    <img src={line} alt="Line" />
                                    <img src={ellipse} alt="Circle" />
                                </div>
                                <div>
                                    <div>
                                        <p>UI/UX Designer</p>
                                        <p>Pixel Bharat | Jan’24 - Apr’24</p>
                                    </div>
                                    <div>
                                        <p>Frontend Developer - Intern</p>
                                        <p>Department of Holistic Education | Jan’24 - Apr’24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Education</p>
                            <div>
                                <div>
                                    <img src={ellipse} alt="Circle" />
                                    <img src={line} alt="Line" />
                                    <img src={ellipse} alt="Circle" />
                                </div>
                                <div>
                                    <div>
                                        <p>UI/UX Designer</p>
                                        <p>Pixel Bharat | Jan’24 - Apr’24</p>
                                    </div>
                                    <div>
                                        <p>Frontend Developer - Intern</p>
                                        <p>Department of Holistic Education | Jan’24 - Apr’24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Contacts</p>
                            <div>

                                <div>
                                    <p>kumarishubham273@gmail.com</p>
                                    <p>+91 7482049954</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <img src={github} alt="GitHub" />
                                    <img src={linkdien} alt="LinkedIn" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Competences</p>
                        <div>
                            <div>
                                <div>
                                    <img src={ellipse} alt="Circle" />
                                    <img src={line} alt="Line" />

                                </div>
                                <div>
                                    <p>Industry Knowledge</p>
                                    <div>
                                        <div>
                                            <p>Prototyping</p>
                                            <p>Design System</p>
                                            <p>Responsive Design</p>
                                            <p>Mobile Design</p>
                                            <p>Web Design</p>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={line} alt="Line" />
                                            </div>
                                            <div>
                                                <p>User Flow</p>
                                                <p>User Experience</p>
                                                <p>Wireframing</p>
                                                <p>Usability Testing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={ellipse} alt="Circle" />
                                    <img src={line} alt="Line" />

                                </div>
                                <div>
                                    <p>Instruments</p>
                                    <div>
                                        <div>
                                            <p>Figma</p>
                                            <p>Adobe Photoshop</p>
                                            <p>Adobe Illustrator</p>
                                            <p>HTML, CSS, Java Script</p>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={line} alt="Line" />
                                            </div>
                                            <div>
                                                <p>React JS</p>
                                                <p>Tailwind CSS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cv