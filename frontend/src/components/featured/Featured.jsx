import React from 'react';
import './Featured.scss';
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Featured = ({type}) => {
  return (
    <div className='featured'>
      {
        type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="">Adventure</option>
              <option value="">Comedy</option>
              <option value="">Crime</option>
              <option value="">Fantasy</option>
              <option value="">Historical</option>
              <option value="">Horror</option>
              <option value="">Romance</option>
              <option value="">Sci-fi</option>
              <option value="">Thriller</option>
              <option value="">Western</option>
              <option value="">Animation</option>
              <option value="">Drama</option>
              <option value="">Documentary</option>
            </select>
          </div>
        )
      }
      <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <div className="info">
        <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ut quia, asperiores deserunt mollitia provident deleniti, explicabo quisquam facilis est ipsa qui quasi repudiandae tenetur quas vero amet adipisci nam.</span>
        <div className="buttons">
            <button className='play'>
                <BsPlayFill className='icn' />
                <span>Play</span>
            </button>
            <button className='more'>
                <AiOutlineInfoCircle className='icn' />
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured;
