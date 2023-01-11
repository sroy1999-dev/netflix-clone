import React from 'react';
import './Watch.scss';
import { IoMdArrowBack } from 'react-icons/io';

const Watch = () => {
  const video = "https://file-examples.com/storage/fea8fc38fd63bc5c39cf20b/2017/04/file_example_MP4_1920_18MG.mp4";
  return (
    <div className='watch'>
      <div className="back">
        <IoMdArrowBack />
        Home
      </div>
      <video className='video' src={video} autoPlay progress="true" width="1080" controls />
    </div>
  )
}

export default Watch;
