import React from 'react'

const CommentBox1 = ({data}) => {
  return data.map((comment,index)=>(

    <div className='ml-10 border-l' key={index}>
        <img className='h-16' src="https://i.redd.it/snoovatar/avatars/97a48e43-58a6-4dcc-b5d2-771bb374872b.png"/>
      <div className='font-bold p-2'>{comment.userName}</div>
      <div>{comment.comment}</div>
      <div>
        {comment?.replies && <CommentBox1 data={comment.replies}/>}
      </div>
    </div>
  
  ))
}

export default CommentBox1
