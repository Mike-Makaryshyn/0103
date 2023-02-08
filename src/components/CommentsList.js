function CommentsList ({ recentComments }) {
   const commentsItems = recentComments.map((comment, i) => 
      <div className="reviews-item" key={i}>
         <div className="reviewer-data">
            <span className="post-user">{comment.userName}</span> 
            <span className="post-date">{comment.commentDate}</span>
         </div>
         <div className="reviewer-comment">
            {comment.msg}
         </div>
      </div>
   )

   return (
      <>
         <div className="reviews-content">
            <div className="reviews-items">
                  {commentsItems}
            </div>
         </div>
      </>
   )
}

export default CommentsList;