import React, { useState } from 'react';
import './ListItem.scss';
import { BsPlayFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';

const ListItem = ({index}) => {
  const [isHover, setIsHover] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className='listItem' 
    onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
    style={{ left: isHover && index * 225 - 50 + index * 2.5 }}>
      <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
      {
        isHover && (
        <>
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
            <div className="icons">
                <BsPlayFill className='icon' />
                <IoMdAdd className='icon' />
                <AiOutlineLike className='icon' />
                <BiDislike className='icon' />
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit'>16+</span>
                <span>1999</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur maxime, rem, fugiat dolor excepturi enim dicta minima sequi culpa ipsam architecto rerum non itaque consectetur voluptate in illo eveniet. Placeat!
            </div>
            <div className="genre">Action</div>
        </div>
        </>
      )}
    </div>
  )
}

export default ListItem;
