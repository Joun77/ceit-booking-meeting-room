import React from 'react';
import Icon from '@mdi/react';
import { mdiDoor
, mdiCalendarCheck, mdiClockTimeEight, mdiMessageProcessingOutline
 } from '@mdi/js';

export default function BookingCard() {
  return (
    <div className="max-w-sm mx-auto w-3xl">
      <div className="bg-gray-900 text-white overflow-hidden shadow-2xl relative w-96 h-[600px] border rounded-lg">
        <div className="px-6 pt-8 pb-6 text-center relative">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-400 bg-white">
            <img
              src=""
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold">Jennie Duangboutdy</h2>
        </div>
        
        <div className="px-6 space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <Icon path={mdiDoor} size={1} />
              <span className="text-gray-300">IQURI Room</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <Icon path={mdiCalendarCheck} size={1} />
              <span className="text-gray-300">Schedule</span>
            </div>
            <span className="text-white font-medium">Now</span>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <Icon path={mdiClockTimeEight} size={1} />
              <span className="text-gray-300">Hours</span>
            </div>
            <span className="text-white font-medium">Now</span>
          </div>
          
          <div className="flex items-center justify-between py-3 pb-8">
            <div className="flex items-center space-x-3">
              <Icon path={mdiMessageProcessingOutline} size={1} />
              <span className="text-gray-300">Note</span>
            </div>
            <span className="text-white font-medium">Thanks for your Booking</span>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-4"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L5,8 L10,2 L15,9 L20,1 L25,7 L30,3 L35,8 L40,2 L45,9 L50,1 L55,7 L60,3 L65,8 L70,2 L75,9 L80,1 L85,7 L90,3 L95,8 L100,2 L100,0 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}