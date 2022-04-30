import React from 'react';
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <h1>Welcome to the About page</h1>
            <Link to="/"><h1>Home</h1></Link>
        </div>
    )
}
