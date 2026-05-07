import React from 'react'

const Teamcard = (props) => {


  return (
    <div class="col-md-3 col-sm-6">
            <div class="profile-card">
                <div class="profile-img">
                    <img src={props.image} alt="image"/>
                    <div class="over-layer">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div class="profile-content">
                    <h3 class="title">{props.name}<span></span></h3>
                    <h3 class="title"><span>{props.role}</span></h3>
                    <ul class="social-link">
                        <li><a href="" class="fa fa-facebook"></a></li>
                        <li><a href="" class="fa fa-twitter"></a></li>
                        <li><a href="" class="fa fa-youtube"></a></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Teamcard
