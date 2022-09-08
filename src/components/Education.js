// timeline-step source: https://www.bootdey.com/snippets/view/timeline-steps#html

import './Education.css'
import DownIcon from "./DownIcon"
import UpIcon from './UpIcon'

export default function Education(){
    const textPrimary = {
        color: "#112D4E"
    }

    const textSecondary = {
        color: "#3F72AF"
    }

    return (
        <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center" id='education'>
            <UpIcon to="#home"/>
            <h1 class="mt-5 mb-5" style={textPrimary}>Education</h1>
            <div class="row mt-5 mb-5">
                <div class="col">
                    <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                        <div class="timeline-step">
                            <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                <div class="inner-circle"></div>
                                <h6 class="mt-3 mb-1" style={textPrimary}>2006</h6>
                                <h6 class="mb-0 mb-lg-0" style={textSecondary}>SD Negeri Sukalaksana 1 Bandung</h6>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                <div class="inner-circle"></div>
                                <h6 class="mt-3 mb-1" style={textPrimary}>2012</h6>
                                <h6 class="mb-0 mb-lg-0" style={textSecondary}>SMP Negeri 5 Bandung</h6>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                <div class="inner-circle"></div>
                                <h6 class="mt-3 mb-1" style={textPrimary}>2015</h6>
                                <h6 class="mb-0 mb-lg-0" style={textSecondary}>SMA Kartika XIX-1 Bandung</h6>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                <div class="inner-circle"></div>
                                <h6 class="mt-3 mb-1" style={textPrimary}>2018</h6>
                                <h6 class="mb-0 mb-lg-0" style={textSecondary}>Politeknik Negeri Bandung</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DownIcon to="#work" />
        </div>
    )
}