import React, { useState } from 'react'
import axios from 'axios'

function List() {
    const [books, setBooks] = useState(null);
    const apiUrl = "http://localhost:3000/api/Products/all";
    const fetchData = async () => {
        const response = await axios.get(apiUrl)

        setBooks(response.data)
    }
    return (
        <div>
            <h1>Products list</h1>
            <h2>Fetch a list from an API and display it</h2>

            <div>
                <button onClick={fetchData}>
                    Fwtch
                </button>
            </div>

            <div>
                {books && books.map((book, index) => {
                    const names = book.name.join(', ');

                    return (
                        <div key={index}>
                            <h3> Product {index + 1}</h3>
                            <div>
                                <p>{names}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default List;