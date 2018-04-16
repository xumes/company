import React from 'react'


const Home = props => {
    return (
        <div className='App'>

            <div className='jumbotron text-center'>
                <h1>Company</h1>
                <p>We specialize in blablabla</p>
                <form>
                    <div className='input-group'>
                        <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                        <div className='input-group-btn'>
                            <button type='button' className='btn btn-danger'>Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className='container-fluid bg-grey'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-globe logo '></span>
                    </div>
                    <div className='col-sm-8'>
                        <h2>Our Values</h2><br />
                        <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                        <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            

            {/*  Container (Portfolio Section) */}
            

            {/*  Container (Pricing Section) */}
            <div id='pricing' className='container-fluid'>
                <div className='text-center'>
                    <h2>Pricing</h2>
                    <h4>Choose a payment plan that works for you</h4>
                </div>
                <div className='row '>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>Basic</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>20</strong> Lorem</p>
                                <p><strong>15</strong> Ipsum</p>
                                <p><strong>5</strong> Dolor</p>
                                <p><strong>2</strong> Sit</p>
                                <p><strong>Endless</strong> Amet</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>$19</h3>
                                <h4>per month</h4>
                                <button className='btn btn-lg'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>Pro</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>50</strong> Lorem</p>
                                <p><strong>25</strong> Ipsum</p>
                                <p><strong>10</strong> Dolor</p>
                                <p><strong>5</strong> Sit</p>
                                <p><strong>Endless</strong> Amet</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>$29</h3>
                                <h4>per month</h4>
                                <button className='btn btn-lg'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 col-xs-12'>
                        <div className='panel panel-default text-center'>
                            <div className='panel-heading'>
                                <h1>Premium</h1>
                            </div>
                            <div className='panel-body'>
                                <p><strong>100</strong> Lorem</p>
                                <p><strong>50</strong> Ipsum</p>
                                <p><strong>25</strong> Dolor</p>
                                <p><strong>10</strong> Sit</p>
                                <p><strong>Endless</strong> Amet</p>
                            </div>
                            <div className='panel-footer'>
                                <h3>$49</h3>
                                <h4>per month</h4>
                                <button className='btn btn-lg'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container (Contact Section) */}
            <div id='contact' className='container-fluid bg-grey'>
                <h2 className='text-center'>CONTACT</h2>
                <div className='row'>
                    <div className='col-sm-5'>
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><span className='glyphicon glyphicon-map-marker'></span> Chicago, US</p>
                        <p><span className='glyphicon glyphicon-phone'></span> +00 1515151515</p>
                        <p><span className='glyphicon glyphicon-envelope'></span> myemail@something.com</p>
                    </div>
                    <div className='col-sm-7 '>
                        <div className='row'>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='name' name='name' placeholder='Name' type='text' required />
                            </div>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                            </div>
                        </div>
                        <textarea className='form-control' id='comments' name='comments' placeholder='Comment' rows='5'></textarea><br />
                        <div className='row'>
                            <div className='col-sm-12 form-group'>
                                <button className='btn btn-default pull-right' type='submit'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home