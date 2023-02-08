import likeImg from '../assets/like.svg';
import commentImg from '../assets/comment.svg';

function ReviewsInfo () {
   return (
      <>
         <div className="reviews-info">
            <div className="reviews-info-left">
               <span>Latest reviews</span>
               <a href="/#">All reviews</a>
            </div>
            <div className="reviews-info-right">
               <div className="amount-of-likes">
                  <img src={likeImg} alt="" />
                  <span>131</span>
               </div>
               <div className="amount-of-comments">
                  <img src={commentImg} alt="" />
                  <span>14</span>
               </div>
            </div>
         </div>
      </>
   )
}

export default ReviewsInfo;