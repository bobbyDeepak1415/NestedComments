import React from 'react'

const CommentBox1 = ({data}) => {
  return (
      <div>
    {data.map((comment,index)=>(

        <div>

      
        <img className='h-16 rounded-full' src="https://i.redd.it/snoovatar/avatars/97a48e43-58a6-4dcc-b5d2-771bb374872b.png"/>

<div>{}</div>
        </div>
    ))}
    </div>
  )
}

export default CommentBox1
