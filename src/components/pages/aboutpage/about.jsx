import React from 'react'
import { Parallax } from 'react-parallax'

import HeaderText from '../../common/headerText'
import HostView from './hostView'

import kashfia from '../../assests/host/kashfia.jpg'
import utsho from '../../assests/host/utsho.jpg'
import sajjad from '../../assests/host/sajjad.jpg'
import hena from '../../assests/host/hena.jpg'
import parallaxImg from '../../assests/parallax_about.jpg'
import historyImg from '../../assests/historyImg.jpg'

class About extends React.Component{
    state = {
        host: [
            {
                name: 'Kashfia Akter',
                post: 'Founder & Chief Executive Officer',
                text: 'Student of Home Economics, Department of Food and Nutrition',
                src: kashfia,
                social: [
                    {
                        site: 'facebook',
                        link: 'https://www.facebook.com/kashfia.akhter.374'
                    },
                    {
                        site: 'instagram',
                        link: 'https://www.instagram.com/akhter.kashfia/'
                    }
                ]
            },
            {
                name: 'ALif Shahriar Utsho',
                post: 'Co-Founder & Chief Technology Officer',
                text: 'Student of AIUB, Department of Computer Science and Engineering',
                src: utsho,
                social: [
                    {
                        site: 'facebook',
                        link: 'https://www.facebook.com/utsho.aiub'
                    },
                    {
                        site: 'instagram',
                        link: 'https://www.instagram.com/alif_utsho/'
                    },
                    {
                        site: 'linkedin',
                        link: 'https://www.linkedin.com/in/md-shahoriar-alif-utsho-014ba817a/'
                    },
                    {
                        site: 'github',
                        link: 'https://github.com/alif-utsho'
                    }
                ]
            },
            {
                name: 'Sajjad Hosain Shojib',
                post: 'Chief Marketing Officer',
                text: 'Student of DIU, Department of Computer Science and Engineering',
                src: sajjad,
                social: [
                    {
                        site: 'facebook',
                        link: 'https://www.facebook.com/sajjad.diu'
                    },
                    {
                        site: 'instagram',
                        link: 'https://www.instagram.com/sajjadhosainshojib/'
                    }
                ]
            },
            {
                name: 'Jannatul Mawa Hena',
                post: 'Chief Financial Officer',
                text: 'Student of DIU, Department of Computer Science and Engineering',
                src: hena,
                social: [
                    {
                        site: 'facebook',
                        link: 'https://www.facebook.com/jannatulmawa.hena.9'
                    },
                    {
                        site: 'instagram',
                        link: 'https://www.instagram.com/jannatul_mawa33/'
                    }
                ]
            }
        ],
        headerText: {
            tittle: 'About Color Dreams',
            text: 'Color Dreams is a page for art lovers and buyers. You can order your own paintings or can purchase from the readymades.'
        },
        history: {
            tittle: 'History of Color Dreams',
            text1: 'Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.',
            text2: 'Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to for additional permissions about our templates. Thank you.',
            src: historyImg
        }
    }

    hostView = () => {
        return this.state.host.map(host => {
            return <HostView key={host.name} host={host}/>
        })
    }


    render() {
        return (
            <>
                <HeaderText
                    key={this.state.headerText.tittle}
                    headerText={this.state.headerText}
                />
                <div className="tm-container-inner tm-persons">
                    <div className="row">
                        {this.hostView()}
                    </div>
                </div>

                <div className="tm-container-inner tm-featured-image">
                    <div className="row">
                        <div className="col-12">
                            <div className="placeholder-2">
                                <div className="parallax-window-2">
                                    <Parallax
                                        bgImage={parallaxImg}
                                        bgImageAlt="the art"
                                        strength={750}
                                    >
                                        <div style={{ height: '220px' }} />
                                    </Parallax>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tm-container-inner tm-history">
                    <div className="row">
                        <div className="col-12">
                            <div className="tm-history-inner">
                                <img src={historyImg} alt="Image" className="img-fluid tm-history-img" />
                                <div className="tm-history-text">
                                    <h4 className="tm-history-title">{ this.state.history.tittle }</h4>
                                    <p className="tm-mb-p">{ this.state.history.text1 }</p>
                                    <p>{ this.state.history.text2 }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default About