import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
     <h2 className="logo">
        <Link to="/">Home Page</Link>
      </h2>
 <h1>This is the About Page of the App</h1>
 </>
  );
}
