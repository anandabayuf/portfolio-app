import UpIcon from './UpIcon'
import { Person, GeoAlt, Calendar2, Envelope, Telephone, GenderAmbiguous, GenderMale, Map } from 'react-bootstrap-icons';

import fotobayu from '../assets/images/foto_bayu_cropped.jpg'
import linelogo from '../assets/images/LINE_logo.svg'
import walogo from '../assets/images/WhatsApp.svg'
import iglogo from '../assets/images/Instagram_logo_2022.png'

export default function About(){
    const textPrimary = {
        color: "#112D4E"
    }

    const textSecondary = {
        color: "#3F72AF"
    }

    return (
        <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center" id="about">
            <UpIcon to="#project"/>
            <h1 class="mb-3" style={textPrimary}>About Me</h1>
            <div className="row">
                <div className='col-7'>
                    <div className="card shadow" style={{width: "28rem", backgroundColor: "#DBE2EF"}}>
                        <div className="card-body">
                            <h5 className="card-title text-center" style={textPrimary}>Bayu</h5>
                            <div className='row mb-1 mt-3'>
                                <div className='col-1' style={textSecondary}>
                                    <Person />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    Ananda Bayu Fauzan
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Calendar2 />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    January 23, 2000
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <GeoAlt />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    Bandung
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <GenderAmbiguous />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    <span>Male  <GenderMale /></span>
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Map />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    Jalan Sukalaksana, RT 004/RW 011, Kelurahan Cicaheum, Kecamatan Kiaracondong, Kota Bandung, Jawa Barat 40282
                                </div>
                            </div>
                            <hr />
                            <h6>Contact</h6>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Envelope />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    anandabayu090@gmail.com
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <Telephone />
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    +62-812-2172-2798
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <img src={walogo} alt="wa logo" width="18px"/>
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    <a href="http://wa.me/6281221723798">+62-812-2172-2798</a>
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <img src={linelogo} alt="line logo" width="18px"/>
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    @ananda.bayu
                                </div>
                            </div>
                            <div className='row mb-1'>
                                <div className='col-1' style={textSecondary}>
                                    <img src={iglogo} alt="instagram logo" width="18px"/>
                                </div>
                                <div className='col-11' style={textSecondary}>
                                    <a href="https://www.instagram.com/ananda.bayu/">ananda.bayu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-5'>
                    <img src={fotobayu} alt="fotobayu" width="300px" className='shadow rounded'/>
                </div>
            </div>
        </div>
    )
}