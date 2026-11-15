import React from 'react'
import CommentBox1 from './CommentBox1'

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


const Comments1 = () => {
  return (
    <div>
        
        <CommentBox1 data={data}/>
      
    </div>
  )
}

export default Comments1
