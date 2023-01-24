import React, {useState, useEffect} from 'react'
import { TwitterShareButton, TwitterIcon } from 'react-share';
import './App.css';



function App() {
  const [quote,setQuote] = useState("")
  const [author,setAuthor] = useState("")
  useEffect(() => {
      fetch("http://api.quotable.io/random").then(res => res.json()).then((quote) => {
      setQuote(quote.content)
      setAuthor(quote.author)
              })
  }
  ,[])


  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random").then(res => res.json()).then((quote) => {
      setQuote(quote.content)
      setAuthor(quote.author)
              })
  }
  return (
    
    <div className="App">
      <div className="quote" id="quote-box">
        <h2 id="text">{quote}</h2>
        <small id="author">{author}</small> </div>
        <br></br>
        <button className="btn" onClick={fetchNewQuote} id="new-quote">Generate new quote</button>
        <br></br>
        <a href="twitter.com/intent/tweet" id="tweet-quote"><TwitterShareButton
  url={quote}
  quote={quote}
  hashtag="#dailyQuote"
>
  <TwitterIcon size={50} round />
</TwitterShareButton></a>
        
        
    </div>
  );
}

export default App;
