import React from 'react';

const Blog = () => {
    return (
        <div className='services'>
            <div className='container p-2' style={{ maxWidth: "900px" }}>
                <h1 className='bebus-font'>
                    Difference between SQL and NoSQL
                </h1>
                <p>Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                <hr />
                <h1 className='bebus-font'>
                    What is JWT, and how does it work?
                </h1>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.

                </p>
                <hr />
                <h1 className='bebus-font'>
                    What is the difference between javascript and NodeJS?
                </h1>
                <p>Javascript can only be run in the browsers. And we can run Javascript outside the browser with the help of NodeJS.Javascript is basically used on the client-side where NodeJS mostly used on the server-side.</p>
                <hr />
                <h1 className='bebus-font'>
                    How does NodeJS handle multiple requests at the same time?
                </h1>
                <p>EventQueue is responsible for this .NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                <hr />

            </div>
        </div>
    );
};

export default Blog;