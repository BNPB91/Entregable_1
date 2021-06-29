import React, { useState, useEffect } from 'react';

import twitterIcon from '../twitter.svg';
import tumblrIcon from '../tumblr.svg';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://raw.githubusercontent.com/BNPB91/Entregable_1/master/src/components/quote.json`;
 
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <div className="social-media">
          <a href="#" id="twet-quote">
            <span><img src={twitterIcon} alt="" /></span>
          </a>
          <a href="#" id="tumlr-quote">
            <span><img src={tumblrIcon} alt="" /></span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
  )
}

export default Quotes;