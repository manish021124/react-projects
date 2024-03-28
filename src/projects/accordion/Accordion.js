import { useState } from 'react';
import './Accordion.css'

const data = [
  {
    "id": 1,
    "title": "Lorem 1",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, rerum fugit suscipit temporibus consequatur, possimus reiciendis libero fuga distinctio deleniti id dignissimos deserunt incidunt quisquam.",
  },
  {
    "id": 2,
    "title": "Lorem 2",
    "desc": "Lorem ipsum dolor sit amet.",
  },
  {
    "id": 3,
    "title": "Lorem 3",
    "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, iure!",
  },
  {
    "id": 4,
    "title": "Lorem 4",
    "desc": "Lorem ipsum dolor sit amet.",
  },
];

function Container({ onSelect, selected, item }) {
  return (
    <div key={item.id} className='accordion-section'>
      <div className='accordion-title' onClick={() => onSelect(item.id)}>
        <h2>{item.title}</h2>
        <span>{selected === item.id ? '-' : '+'}</span>
      </div>
      {
        selected === item.id ?
          <p className='accordion-desc'>{item.desc}</p>
          : null
      }
    </div>
  );
}


export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function showDesc(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <>
      <h1>Accordion</h1>
      <div className='accordion-box'>
        {data.map((item) => (
          <Container key={item.id} onSelect={showDesc} selected={selected} item={item} />
        ))}
      </div>
    </>
  );
}