import { CodeSquare, Calendar2, Person } from 'react-bootstrap-icons';
import DownIcon from "./DownIcon"
import UpIcon from './UpIcon'

import reactjslogo from '../assets/images/React-icon.svg';
import vuejslogo from '../assets/images/Vue.png';
import nodejslogo from '../assets/images/Nodejs_logo.svg';
import golanglogo from '../assets/images/Go_Logo_Blue.svg';
import dockerlogo from '../assets/images/Docker_logo.svg';
import postgreslogo from '../assets/images/Postgresql_elephant.svg';
import phplogo from '../assets/images/php_logo.png';
import flutterlogo from '../assets/images/Google-flutter-logo.svg';
import mongodblogo from '../assets/images/MongoDB_Logo.svg'

export default function Project(){
    const textPrimary = {
        color: "#112D4E"
    }

    const textSecondary = {
        color: "#3F72AF"
    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" id='project'>
            <UpIcon to="#work"/>
            <h1 className="mt-5 mb-3" style={textPrimary}>Project Experience</h1>
            <div className="row mt-3 mb-3">
                <div className='col-6'>
                    <div className="card shadow" style={{width: "25rem", backgroundColor: "#DBE2EF"}}>
                        <div className="card-body">
                            <h5 className="card-title text-center" style={textPrimary}>Web-Based Job Scheduling Application Development</h5>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Calendar2 />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    February - July 2022 (6 Months)
                                </div>
                            </div>
                            <div className='row mb-1 mt-3'>
                                <div className='col-1' style={textSecondary}>
                                    <CodeSquare />
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={reactjslogo} alt="reactjs logo" width="32px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={golanglogo} alt="golang logo" width="32px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={dockerlogo} alt="docker logo" width="48px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={postgreslogo} alt="postgresql logo" width="32px"/>
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Person />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    Frontend Developer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="card shadow" style={{width: "25rem", backgroundColor: "#DBE2EF"}}>
                        <div className="card-body">
                            <h5 className="card-title text-center" style={textPrimary}>Web and Mobile-Based Media Monitoring Application Development</h5>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Calendar2 />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    August - November 2021 (4 Months)
                                </div>
                            </div>
                            <div className='row mb-1 mt-3'>
                                <div className='col-1' style={textSecondary}>
                                    <CodeSquare />
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={flutterlogo} alt="reactjs logo" width="48px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={phplogo} alt="php logo" width="32px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={postgreslogo} alt="postgresql logo" width="32px"/>
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Person />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    Frontend Developer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className='col-6'>
                    <div className="card shadow" style={{width: "25rem", backgroundColor: "#DBE2EF"}}>
                        <div className="card-body">
                            <h5 className="card-title text-center" style={textPrimary}>Enterprise Application Development: Logbook System</h5>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Calendar2 />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    February - July 2021 (6 Months)
                                </div>
                            </div>
                            <div className='row mb-1 mt-3'>
                                <div className='col-1' style={textSecondary}>
                                    <CodeSquare />
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={vuejslogo} alt="vuejs logo" width="32px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={nodejslogo} alt="nodejs logo" width="48px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={mongodblogo} alt="mongodb logo" width="48px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={postgreslogo} alt="postgresql logo" width="32px"/>
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Person />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    Frontend Developer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="card shadow" style={{width: "25rem", backgroundColor: "#DBE2EF"}}>
                        <div className="card-body">
                            <h5 className="card-title text-center" style={textPrimary}>Web-Based News Application Development</h5>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Calendar2 />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    September - December 2020 (4 Months)
                                </div>
                            </div>
                            <div className='row mb-1 mt-3'>
                                <div className='col-1' style={textSecondary}>
                                    <CodeSquare />
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={vuejslogo} alt="vuejs logo" width="32px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={nodejslogo} alt="nodejs logo" width="32px"/>
                                </div>
                                <div className='col-2' style={textSecondary}>
                                    <img src={postgreslogo} alt="postgresql logo" width="32px"/>
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Person />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    Full Stack Developer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DownIcon to="#about" />
        </div>
    )
}