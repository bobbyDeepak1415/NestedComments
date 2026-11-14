import React from 'react'

const CommentBox = ({data}) => {
  return (
  <div>
{data.map((comment,index)=>(

    <div className='flex' key={index}>
      <div>
        <img className='w-16 p-2 rounded-full' src="https://i.redd.it/snoovatar/avatars/97a48e43-58a6-4dcc-b5d2-771bb374872b.png"/>
      </div>
      <div>
        <p className='px-2 font-bold'>Bobby Deepak</p>
<p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
))}
</div>
  )
}

export default CommentBox
