import { useState } from 'react';

function NewCommentForm ({recentComments, setRecentComments}) {
   
  const [currentComment, setCurrentComment] = useState('');

  function setComment(e) {
   setCurrentComment(e.target.value);
  }

  function addComment(e) {
   e.preventDefault();
   
   const curComment = {
      userName: 'Eva Jonson',
      commentDate: getDateInNeededFormat(),
      msg: currentComment,
   }

   setRecentComments([...recentComments, curComment]);
   setCurrentComment('');
  }

  function getDateInNeededFormat () {
   const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "November", "Dec"];
   
   const today = new Date();
   const year = today.getFullYear();
   let month = monthNames[today.getMonth()];
   let day = today.getDate();
   let isTransformedDay = day < 10 ? `0${day}` : ``;
  

   return `${isTransformedDay} ${month} ${year}`;
  }

  function addCommentOnKeyPress(e) {
      if (e.ctrlKey && e.keyCode === 13 && e.target.value.length > 0) {
         e.preventDefault();
         addComment(e);
      }
   }     

   return (
      <form onSubmit={addComment} className="send-comment-form" action="#">
            <textarea value={currentComment} onKeyDown={addCommentOnKeyPress} onChange={setComment} required name="textarea" id="comment-textarea"></textarea>
            <button className="submit-btn" type="submit">Send a message</button>
         </form>
   )
}

export default NewCommentForm;