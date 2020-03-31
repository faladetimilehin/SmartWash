import React from 'react'
import img1 from './img/car01.png'
import img2 from './img/car02.jpg'
import img3 from './img/car03.jpg'
import img4 from './img/car04.jpg'
import img5 from './img/car05.jpg'
const Home = () => {
    return (
        <div id="main">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                
                    <img class="first-slide" src={img2} alt="First slide" width="100%" height="540"></img>
                    <div class="container">
                        <div class="carousel-caption text-left">
                            <h1>Example headline.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id el0it non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="second-slide" src={img3} alt="Second slide" width="100%" height="540"></img>
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="third-slide" src={img4} alt="Third slide" width="100%" height="540"></img>
                    <div class="container">
                        <div class="carousel-caption text-right">
                            <h1>One more for good measure.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="container marketing">

            <div class="row">
            <div class="tap-app-ride">

<div class="tap-app-ride-inner">

    <h2>Get Your Car Washed When You Want To – Not When There Is A Slot In A Long Queue</h2>

    <p>No one deserves to wait for a grooming treatment, not even your car. That is why we have included that unspoken member of your family to get a wash, wax or any other service that it requires. Your vehicle gets a 5 star treatment wherever it is.</p>
   

</div>

</div>
                <div class="col-lg-4">
                    <img class="rounded-circle" src={img2} alt="Generic placeholder " width="140" height="140"></img>
                    <h2>Highly Professional And Economical</h2>
                    <p>Our professional car washers know exactly what your vehicle needs and they will make sure that they deliver the service efficiently.</p>
                    <p>Economical on the pocket, they will leave your car gleaming just like new. Tap on the app and give your car the wash it desperately needs. Do not worry about being present to make the payment – it will be done automatically once the job is complete.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <img class="rounded-circle" src={img5} alt="Generic placeholder " width="140" height="140"></img>
                    <h2>Select Your Service, And Let Your Vehicle Experience The Pampering</h2>
                    <p>Waxing, washing, or vacuum cleaning, tyre cleaning or car polishing we give your vehicle a pampering of its lifetime, this time and every time. When you next get into it, you will sense the happiness emanating from your vehicle, feel its smile and inhale its fragrance.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <img class="rounded-circle" src={img2} alt="Generic placeholder" width="140" height="140"></img>
                    <h2>World class experience that only we can give A special treatment just for your car</h2>
                    <p>Give your vehicle the ultimate clean; leaving it shiny and feeling like it is new. Like any other family member, it too deserves some tender loving care, so that wash you treat it too will go a long way. Get your car waited upon today and see it transformed to one that you cannot recognize as yours.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
            </div>

            <hr class="featurette-divider"></hr>

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">Giving a glamorous meaning to “mobile” cleaning <span class="text-muted">your 4-wheeled beauty needs washing!</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-fluid mx-auto" src={img2} alt="Generic placeholder "></img>
                </div>
            </div>

            <hr class="featurette-divider"></hr>

            <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img class="featurette-image img-fluid mx-auto" src={img4 } alt="Generic placeholder "></img>
                </div>
            </div>

            <hr class="featurette-divider"></hr>

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-fluid mx-auto" src={img3} alt="Generic placeholder image"></img>
                </div>
            </div>

            <hr class="featurette-divider"></hr>
        </div>
        </div>
    
    )
}
export default Home;