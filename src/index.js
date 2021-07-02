import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card.jsx';
import Sdata from './Sdata';





ReactDom.render(<>
<h1 className="heading_style">List of Series</h1>

{Sdata.map((val)=>{
    return(<Card 
    imgsrc={val.imgsrc}
    title={val.title}
    Sname={val.Sname}
    link={val.link}
/>);
})};
</>,
    document.getElementById('root'))