import React from 'react'
import CommentBox from './CommentBox'


const data=[
    {userName:"Bobby",comment:"Lorem ipsum dolor sit amet."},
    {userName:"Deepak",comment:"Lorem ipsum dolor sit amet.",replies:[
        {userName:"Amrit",comment:"Lorem ipsum dolor sit amet."},
    {userName:"Sagar",comment:"Lorem ipsum dolor sit amet."},
    ]},
    {userName:"Amrit",comment:"Lorem ipsum dolor sit amet.",replies:[
        {userName:"Sagar",comment:"Lorem ipsum dolor sit amet.",replies:[
             {userName:"Sagar",comment:"Lorem ipsum dolor sit amet."},
    {userName:"Steven",comment:"Lorem ipsum dolor sit amet."},
        ]},
    {userName:"Steven",comment:"Lorem ipsum dolor sit amet."},
    {userName:"Arun",comment:"Lorem ipsum dolor sit amet.",replies:[
        {userName:"Deepak",comment:"Lorem ipsum dolor sit amet.",replies:[
        {userName:"Amrit",comment:"Lorem ipsum dolor sit amet."},
    {userName:"Sagar",comment:"Lorem ipsum dolor sit amet."},
    ]},
    {userName:"Amrit",comment:"Lorem ipsum dolor sit amet.",replies:[
        {userName:"Sagar",comment:"Lorem ipsum dolor sit amet.",replies:[
             {userName:"Sagar",comment:"Lorem ipsum dolor sit amet."},
    {userName:"Steven",comment:"Lorem ipsum dolor sit amet."},
        ]},
    {userName:"Steven",comment:"Lorem ipsum dolor sit amet."},
    
    ]},
    ]},
    ]},
    {userName:"Sagar",comment:"Lorem ipsum dolor sit amet."},
    {userName:"Steven",comment:"Lorem ipsum dolor sit amet."},
    {userName:"Arun",comment:"Lorem ipsum dolor sit amet."},
]



const Comments = () => {
  return (
    <div>
      <CommentBox data={data}/>
    </div>
  )
}

export default Comments
