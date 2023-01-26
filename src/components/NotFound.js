import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>404!</h1>
      <Link to="/15/55/15">
        <h3>Click here to go back</h3>
      </Link>
    </>
  );
}
