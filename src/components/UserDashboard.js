import { useState } from 'react';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';
import ReviewsInfo from './ReviewsInfo';
import UserInfo from './UserInfo';


function UserDaashboard() {
   const recentCommentsData = [
      {userName: 'Samuel Jackson', commentDate: '13 Apr 2022', msg: `Hey Eva! You're cool. Nice pic!`},
      {userName: 'Angela Deimon', commentDate: '10 Apr 2022', msg: `Thanks for your services! We really liked the ocean view room. 
      We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.`},
      {userName: 'Ronald Harris', commentDate: '08 Apr 2022', msg: `Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?`},
   ]

   const [recentComments, setRecentComments] = useState(recentCommentsData);

   return (
      <>
         <div className='user-dashboard__wrapper container'>
            <UserInfo />

            <div className="reviews">
               <ReviewsInfo />
               <CommentsList recentComments={recentComments}/>
            </div>
            
         </div>
         <div className="send-answer__block container">
            <NewCommentForm 
                  recentComments={recentComments} 
                  setRecentComments={setRecentComments} 
            />
         </div>
      </>
   );
}

export default UserDaashboard;
