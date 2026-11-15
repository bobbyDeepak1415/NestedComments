import React from 'react'

const CommentBox1 = ({data}) => {
  
    return data.map((comment,index)=>(
        <div className='pl-10 border-l-2' key={index}>
        <img className='h-16 rounded-full' src="https://i.redd.it/snoovatar/avatars/97a48e43-58a6-4dcc-b5d2-771bb374872b.png"/>

            <div>{comment.userName}</div>
            <div>{comment.comment}</div>

            <div>
                {comment?.replies && <CommentBox1 data={comment.replies}/>}
            </div>
        </div>
    ))
  
}

export default CommentBox1
