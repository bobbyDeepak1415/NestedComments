import React from 'react'

const CommentBox1 = ({data}) => {
  return data.map((comment,index)=>(

    <div key={index}>
        <img src="https://i.redd.it/snoovatar/avatars/97a48e43-58a6-4dcc-b5d2-771bb374872b.png"/>
      <div>{comment.name}</div>
      <div>{comment.comment}</div>
      <div>
        {comment?.replies && <CommentBox1 data={comment.replies}/>}
      </div>
    </div>
  
  ))
}

export default CommentBox1
