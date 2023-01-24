import React, {useState, useEffect} from 'react'
import { TwitterShareButton, TwitterIcon } from 'react-share';
import './App.css';



function App() {
  const [quote,setQuote] = useState("")
  const [author,setAuthor] = useState("")
  useEffect(() => {
      fetch("https://api.quotable.io/random").then(res => res.json()).then((quote) => {
      setQuote(quote.content)
      setAuthor(quote.author)
              })
  }
  ,[])


  let fetchNewQuote = () => {
    fetch("https://api.quotable.io/random").then(res => res.json()).then((quote) => {
      setQuote(quote.content)
      setAuthor(quote.author)
              })
  }
  return (
    
    <div className="App">
      <div className="quote" id="quote-box">
        <h2 id="text">{quote}</h2>
        <small id="author">{author}</small>
        <br></br>
        <button className="btn" onClick={fetchNewQuote} id="new-quote">Generate new quote</button>
        <br></br>
        <a href={`https://twitter.com/intent/tweet?text=${quote}`} id="tweet-quote">Tweet this!</a>
      </div>
    </div>
  );
}

export default App;
