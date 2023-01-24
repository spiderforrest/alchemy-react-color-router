import React from 'react';
import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { r, g, b } = useParams();
  const color = `rgb(${r},${g},${b})`;
  return (
    <div className="main">
      <div className="bg" style={{ backgroundColor: color }}></div>
      <h1>{color}</h1>
    </div>
  );
}
