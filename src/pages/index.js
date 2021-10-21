import * as React from "react"
import "../css/default.css"
import { StaticImage } from "gatsby-plugin-image"
import Now from "../images/now.png"
import Then from "../images/then.png"

// markup
const IndexPage = () => {
  return (
    <main>
      <div class="title">
        <center>
          <h1 class="title-text">ELA Reading and Writing Project</h1>
        </center>
      </div>
      <div class="content">
        <div class="side-column left">
          <div class="side-column-content">
            <h2>Then</h2>
              <img src={Then} width="100%" />
            <h2>Books and Authors I Liked</h2>
              <ul>
                <li>Harry Potter</li>
                <li>The "Who Is" Series</li>
                <li>Karl Marx</li>
              </ul>
            <h2>Excerpt From Your Favorite Piece Of Writing From Last Two Years:</h2>
              <p>It’s all about the blockchain, yo, if you buy or sell crypto, you know how it works yo, i made 20 thousand bucks off dogecoin last year, now how much cash do i have? Zero frickin dallerz. I buy and sell nfts for a living, what the funk is that you say? I don’t funkin know, crypto’s the new petrodollar yo, how do we know if any money is worth anything? Backing, who has the best backing? FUNKING DOGECOIN</p>
              <p class="small-text">From Writing Into the Day, 2021</p>
          </div>
        </div>
        <div class="center">
          <div class="center-content">
            <h2>A Short Autobiography</h2>
              <p>Some people disagree on the shape of the earth, Conrad Kumick is one of those people. He believes it is irl mogus shaped. His life plan consists of becoming a silicon valley billionaire and moving to the Caribbean. He has a strange fondness  for limited edition Ronald Reagan t-shirts and the number 69.</p>
              <p class="small-text">Biography By Alexander Picker</p>
            <h2>Some Quotes I Did</h2>
              <p class="quote">reading is something i kinda like - Conrad Kuzmick</p>
              <p class="quote">writing in kinda cool tbh - Conrad Kuzmick</p>
            <h2>A Reading or Writing Memory</h2>
              <p>Back when I was a wee little child in 2nd grade I remember reading “Big Nate”, it was the go to book if you were not reading anything. Currently, me and my friends are making a sequel called “Thicc Nate”. I belive that this is making his memory and legacy live on through generations.</p>
          </div>
        </div>
        <div class="side-column right">
          <div class="side-column-content">
            <h2>Now</h2>
              <img src={Now} width="100%" />
            <h2>Books and Authors I Like</h2>
              <ul>
                <li>Karen McManus</li>
                <li>John Green</li>
                <li>Karl Marx</li>
              </ul>
            <h2>Favorite Quote</h2>
              <p class='quote'>Thou Shalt Not Kill - God, The Ten Commandments</p>
              <p>I like this quote because I think it influenced modern law and made it ilegal to kill people.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
