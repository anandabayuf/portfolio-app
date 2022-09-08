import { Building, Calendar2, Person } from 'react-bootstrap-icons';
import DownIcon from "./DownIcon"
import UpIcon from './UpIcon'

export default function Work(){
    const textPrimary = {
        color: "#112D4E"
    }

    const textSecondary = {
        color: "#3F72AF"
    }

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" id='work'>
            <UpIcon to="#education"/>
            <h1 className="mt-5 mb-5" style={textPrimary}>Work Experience</h1>
            <div className="row mt-5 mb-5">
                <div className='col-6'>
                    <div className="card shadow" style={{width: "25rem", backgroundColor: "#DBE2EF"}}>
                        <div className="card-body">
                            <h5 className="card-title text-center" style={textPrimary}>Internship</h5>
                            <div className='row mb-1 mt-3'>
                                <div className='col-1' style={textSecondary}>
                                    <Building />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    PT Kerjaku Inti Sejahtera
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Calendar2 />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    August 2021 - November 2021 (4 Months)
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Person />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    Frontend Developer &amp; Product Owner
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="card shadow" style={{width: "25rem", backgroundColor: "#DBE2EF"}}>
                        <div className="card-body">
                            <h5 className="card-title text-center" style={textPrimary}>IT Development Program</h5>
                            <div className='row mb-1 mt-3'>
                                <div className='col-1' style={textSecondary}>
                                    <Building />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    PT Inti Corpora Teknologi
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Calendar2 />
                                </div>
                                <div className='col-10' style={textSecondary}>
                                    August 2022 - Now (Current)
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
            <DownIcon to="#project" />
        </div>
    )
}