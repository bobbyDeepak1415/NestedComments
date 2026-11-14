import React from 'react'
import CommentBox from './CommentBox'


const data=[
  {name:"comment1",
    comment:"Lorem ipsum dolor sit amet consectetur."
  },
  {name:"comment1",
    comment:"Lorem ipsum dolor sit amet consectetur."
  },
  {name:"comment1",
    comment:"Lorem ipsum dolor sit amet consectetur."
  },
]



const Comments = () => {
  return (
    <div>
      <CommentBox data={data}/>
    </div>
  )
}

export default Comments
