import React from 'react'

import Gallery from './gallery'

import nature1 from '../../assests/img/n1.jpg'
import nature2 from '../../assests/img/n2.jpg'
import nature3 from '../../assests/img/n3.jpg'
import nature4 from '../../assests/img/n4.jpg'
import nature5 from '../../assests/img/n5.jpg'
import nature6 from '../../assests/img/n6.jpg'
import nature7 from '../../assests/img/n7.jpg'
import nature8 from '../../assests/img/n8.jpg'
import nature9 from '../../assests/img/n9.jpg'




class Homepage extends React.Component{

    state = {
        images: [
            {
                id: 'nat1',
                tittle: 'The Yards',
                catagory: 'nature',
                src: nature1,
            },
            {
                id: 'nat2',
                tittle: 'The Yards',
                catagory: 'nature',
                src: nature2
            }
         ],
        id: 'nature1',
        tittle: 'The yards',
        catagory: 'nature',
        src: nature1
    }
    

    render() {
        return (
            <main>
                <header class="row tm-welcome-section">
                    <h2 class="col-12 text-center tm-section-title">Welcome to Simple House</h2>
                    <p class="col-12 text-center">Color Dreams is a page for art lovers and buyers. You can order your own paintings or can purchase from the readymades...</p>
                </header>

                <div class="tm-paging-links">
                    <nav>
                        <ul>
                            <li class="tm-paging-item"><a href="" class="tm-paging-link active">Nature</a></li>
                            <li class="tm-paging-item"><a href="" class="tm-paging-link">Sketch</a></li>
                            <li class="tm-paging-item"><a href="" class="tm-paging-link">Canvas</a></li>
                        </ul>
                    </nav>
                </div>

                
                <div className="row">

                    <Gallery
                        images={this.state}
                    />

                </div>
            </main>
        )
    }
}

export default Homepage