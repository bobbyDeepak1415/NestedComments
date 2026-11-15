import React from 'react'

const CommentBox = ({data}) => {
  
  

  return data.map((comment,index)=>(

    <div className='pl-10 border-l-2 border-black' key={index}>
      <div className='flex'>

      <div>
        <img className='w-16 p-2 rounded-full' src="https://i.redd.it/snoovatar/avatars/97a48e43-58a6-4dcc-b5d2-771bb374872b.png"/>
      </div>
      <div>
        <p className='px-2 font-bold'>{comment.name}</p>
<p>{comment.comment}</p>
      </div>
      </div>
      <div>
        {comment?.replies && <CommentBox data={comment.replies}/>}
      
        </div>
    </div>
))
  

  
}

export default CommentBox


