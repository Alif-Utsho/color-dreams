import React from 'react'

import Gallery from './gallery'
import Details from './details'
import HeaderText from '../../common/headerText'

import nature1 from '../../assests/img/n1.jpg'
import nature2 from '../../assests/img/n2.jpg'
import nature3 from '../../assests/img/n3.jpg'
import nature4 from '../../assests/img/n4.jpg'
import nature5 from '../../assests/img/n5.jpg'
import nature6 from '../../assests/img/n6.jpg'
import nature7 from '../../assests/img/n7.jpg'
import nature8 from '../../assests/img/n8.jpg'

import sketch1 from '../../assests/img/s1.jpg'
import sketch2 from '../../assests/img/s2.jpg'
import sketch3 from '../../assests/img/s3.jpg'
import sketch4 from '../../assests/img/s4.jpg'
import sketch5 from '../../assests/img/s5.jpg'
import sketch6 from '../../assests/img/s6.jpg'

import canvas1 from '../../assests/img/c1.jpg'
import canvas2 from '../../assests/img/c2.jpg'
import canvas3 from '../../assests/img/c3.jpg'

import details1 from '../../assests/details1.jpg'


class Homepage extends React.Component {

    state = {
        images: [
            {
                id: 'nat1',
                tittle: 'The Yards',
                catagory: 'nature',
                price: 2500,
                src: nature1,
            },
            {
                id: 'nat2',
                tittle: 'Mountains',
                catagory: 'nature',
                price: 2900,
                src: nature2
            },
            {
                id: 'nat3',
                tittle: 'Lonely',
                catagory: 'nature',
                price: 4000,
                src: nature3
            },
            {
                id: 'nat4',
                tittle: 'Walking',
                catagory: 'nature',
                price: 2200,
                src: nature4
            },
            {
                id: 'nat5',
                tittle: 'The Sky',
                catagory: 'nature',
                price: 2000,
                src: nature5
            },
            {
                id: 'nat6',
                tittle: 'Rickshaw puller',
                catagory: 'nature',
                price: 4500,
                src: nature6
            },
            {
                id: 'nat7',
                tittle: 'Forest',
                catagory: 'nature',
                price: 3000,
                src: nature7
            },
            {
                id: 'nat8',
                tittle: 'Raining',
                catagory: 'nature',
                price: 2300,
                src: nature8
            },
            {
                id: 'skt1',
                tittle: 'Red Water',
                price: 1200,
                catagory: 'sketch',
                src: sketch1
            },
            {
                id: 'skt2',
                tittle: 'Poched',
                price: 1000,
                catagory: 'sketch',
                src: sketch2
            },
            {
                id: 'skt3',
                tittle: 'Five Hundred',
                price: 500,
                catagory: 'sketch',
                src: sketch3
            },
            {
                id: 'skt4',
                tittle: 'Logan',
                price: 1200,
                catagory: 'sketch',
                src: sketch4
            },
            {
                id: 'skt5',
                tittle: 'Portrait',
                price: 3000,
                catagory: 'sketch',
                src: sketch5
            },
            {
                id: 'skt6',
                tittle: 'Portrait',
                price: 3200,
                catagory: 'sketch',
                src: sketch6
            },
            {
                id: 'can1',
                tittle: 'Canvas 1',
                price: 1500,
                catagory: 'canvas',
                src: canvas1
            },
            {
                id: 'can2',
                tittle: 'Canvas 2',
                price: 1500,
                catagory: 'canvas',
                src: canvas2
            },
            {
                id: 'can3',
                tittle: 'Canvas 3',
                price: 2500,
                catagory: 'canvas',
                src: canvas3
            }
        ],
        details: [
            {
                id: 'dts1',
                tittle: 'Color your Dreams',
                text: 'Color Dreams is a page for art lovers and buyers. You can order your own paintings or can purchase from the readymades.',
                src: details1
            }
        ],
        headerText: {
            tittle: 'Welcome to Color Dreams',
            text: 'Color Dreams is a page for art lovers and buyers. You can order your own paintings or can purchase from the readymades.'
        },
        filter: 'nature'
    }
    
    filterImages = catagory => {
        this.setState({
            filter: catagory
        })
    }

    getView = () => {
        let catagory = this.state.filter
        let images = this.state.images.filter(img => catagory === img.catagory)
        return images.map(img => {
            return <Gallery
                key={img.id}
                images={img}
            />
        })
    }

    getDetails = () => {
        return this.state.details.map(dts => {
            return <Details
                key={dts.id}
                details={dts}
            />
        })
    }

    render() {
        return (
            <main>
                
                <HeaderText
                    headerText={this.state.headerText}
                />

                <div className="tm-paging-links">
                    <nav>
                        <ul>
                            <li className="tm-paging-item">
                                <button
                                    className={this.state.filter==='nature' ? "btn tm-paging-link active" : "btn tm-paging-link"}
                                    onClick={() => this.filterImages('nature')}
                                >Nature
                                </button>
                            </li>
                            
                            <li className="tm-paging-item">
                                <button
                                    className={this.state.filter === 'sketch' ? "btn tm-paging-link active" : "btn tm-paging-link"}
                                    onClick={() => this.filterImages('sketch')}
                                >Sketch
                                </button></li>
                            
                            <li className="tm-paging-item">
                                <button
                                    className={this.state.filter === 'canvas' ? "btn tm-paging-link active" : "btn tm-paging-link"}
                                    onClick={() => this.filterImages('canvas')}
                                >Canvas
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                
                <div className="row">
                    {this.getView()}
                </div>

                <div>{this.getDetails()}</div>
                
            </main>
        )
    }
}

export default Homepage