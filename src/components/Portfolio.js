import React, { Component } from 'react'

import base from '../base'
import RenderCard from './RenderCard';

class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolio: {},
            loadForm: false
        }

        base.syncState('portfolio', {
            context: this,
            state: 'portfolio',
            asArray: false
        })

        this.handleClickNewItem = this.handleClickNewItem.bind(this)
        this.saveItem = this.saveItem.bind(this)
    }

    componentDidMount() {
        console.log('estou aqui')
    }

    handleClickNewItem() {
        this.setState({
            loadForm: true
        })
    }

    saveItem() {
        const timestamp = new Date()
        console.log(timestamp)
        const param = {
                [timestamp]: {
                title: this.refs.title.value,
                subTitle: this.refs.subTitle.value
                }
        }
        this.setState({
            portfolio: param,
            loadForm: false
        })
        this.refs.title.value = ''
        this.refs.subTitle.value = ''

    }

    render() {
        return (
            <div>

                <div id='portfolio' className='container-fluid text-center bg-grey'>
                    {
                        this.state.loadForm && 
                        <div>
                            Title: <input type='text' ref='title' placeholder='title' /> <br />
                            SubTitle: <input type='text' ref='subTitle' placeholder='type a subTitle' /> <br />
                            <button onClick={() => this.saveItem()}>Save</button>
                        </div>
                }
                    <h2>Portfolio</h2><br />
                    <button onClick={() => this.handleClickNewItem()} className='btn btn-primary'>New Item</button>
                    <h4>What we have created</h4>
                    <div className='row text-center '>

                        {

                            Object.keys(this.state.portfolio)
                                .map(key => {
                                    return <RenderCard key={key} content={this.state.portfolio[key]} />
                                })
                        }

                    </div><br />

                    <h2>What our customers say</h2>
                    <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>

                        <div className='carousel-inner' role='listbox'>
                            <div className='item active'>
                                <h4>'This company is the best. I am so happy with the result!'<br /><span>Michael Roe, Vice President, Comment Box</span></h4>
                            </div>
                            <div className='item'>
                                <h4>'One word... WOW!!'<br /><span>John Doe, Salesman, Rep Inc</span></h4>
                            </div>
                            <div className='item'>
                                <h4>'Could I... BE any more happy with this company?'<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
                            </div>
                        </div>

                        {/*  Left and right controls */}
                        <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                            <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                            <span className='sr-only'>Previous</span>
                        </a>
                        <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                            <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                            <span className='sr-only'>Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}




        
   

export default Portfolio