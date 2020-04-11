import React from 'react'
import img1 from './img/car01.png'
import img2 from './img/car02.jpg'
import img3 from './img/car03.jpg'
import img4 from './img/car04.jpg'
import img5 from './img/car05.jpg'
import './contactcss.css'

const Home = () => {
    return (
        <div className="img">
            <div class="text-middle">
                <h1 class="cover-heading">Trust is what we ask for .</h1>
                <p class="lead">Create an account, profile/portfolio and post and let get you connected to developers .</p>
                <p class="lead">

                    <a class="btn btn-primary btn-lg" href="/login">Login</a>
                    <a class="btn btn-lg btn btn-light" href="/register">Sign Up</a>
                </p>
            </div>
        </div>


    )
}
export default Home;