import React from 'react';
import { useParams } from 'react-router-dom';

export default function Main() {
  const { r, g, b } = useParams();
  const color = `rgb(${r},${g},${b})`;
  return (
    <>
      <h1>{color}</h1>
      <div className="bg" style={{ backgroundColor: color }}></div>
    </>
  );
}
