import React from 'react';

export function VideoCard(props:any) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img src="/Photo.jpg" alt="Main Video Thumbnail" className="w-full h-48 object-cover rounded-lg mb-4" />

      <div className="grid grid-cols-12 gap-4">
       
        <div className="col-span-1">
          <img className="rounded-full w-16 h-16" src="/Photo.jpg" alt="User Avatar" />
        </div>

        
        <div className="col-span-11 pl-5">
          <div className="text-gray-800 text-lg font-semibold">
            {props.title}
          </div>
          <div className="text-gray-600 text-sm">
            {props.author}
          </div>
          <div className="text-gray-500 text-xs">
            {props.author}
          </div>
          <div className="text-gray-500 text-xs">
            {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
