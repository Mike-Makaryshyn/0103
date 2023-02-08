import avatarImg from '../assets/avatar.png';

function UserInfo () {

   return (
      <>
         <div className="user-info">
            <div className="avatar-wrapper">
               <img className="avatar-img" src={avatarImg} alt="" />
            </div>

            <div className="user-text__wrapper">
               <h3 className="user-name title">
                  Eva Jonson
               </h3>
               <h4 className="user-position">
                  Sales Manager
               </h4>
               <div className="user-inspiration__text">
                  <p>I will find the best offers for you. </p>
                  <p>My services are absolutely free.</p>
               </div>

               <div className="user-services">
                  <span className="services-title">Services</span>

                  <div className="services">
                     <div className="services-item">
                        <span className="booking-service service-bg">Manual tour booking</span>
                        <span>11</span>
                     </div>
                     <div className="services-item">
                        <span className="package-service service-bg">Package tours</span> 
                        <span>3</span>
                     </div>
                     <div className="services-item">
                        <span className="hotels-service service-bg" >Hotels</span>
                        <span>1</span>
                     </div>
                  </div>

                  <div className="total-services">
                     <div className="total-title">Total</div>
                     <div className="total-amount">15</div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default UserInfo;