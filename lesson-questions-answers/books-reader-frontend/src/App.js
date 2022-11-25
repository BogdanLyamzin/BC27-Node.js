import {useState, useEffect} from "react"

import {getBooks} from "./api"

import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=> {
    const fetchBooks = async()=> {
      try {
        const data = await getBooks();
        setBooks(data)
      }
      catch(error) {
        console.log(error.message);
      }
    }

    fetchBooks()
  }, [])

  const elements = books.map(({title, author, _id}) => <li key={_id}>
    {title}. {author}
  </li>)

  return (
    <div className="App">
      <ul>
        {elements}
      </ul>
    </div>
  );
}

export default App;
