import React from 'react'

import HeaderText from '../../common/headerText'

class About extends React.Component{
    state = {
        host: [
            {
                name: 'Kashfia Akter',
                post: 'Founder & CEO',
                text: 'Student of Home Economics\nof Food and Nutrition Department',
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
            }
        ],
        headerText: {
            tittle: 'About Color Dreams',
            text: 'Color Dreams is a page for art lovers and buyers. You can order your own paintings or can purchase from the readymades...'
        }
    }


    render() {
        return (
            <HeaderText headerText={this.state.headerText} />
            
        )
    }
}

export default About