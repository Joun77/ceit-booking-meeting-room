import React, { useState } from 'react';
import { Star, ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import PhotoSlide from '../components/PhotoSlide';
import Calendar from '../components/Calendar';
import Timestamp from '../components/Timestamp';

export default function MeetingRoomBooking() {
  const [selectedDate, setSelectedDate] = useState(5);

  const dates = [
    { day: 'Sun', date: 1 },
    { day: 'Mon', date: 2 },
    { day: 'Tue', date: 3 },
    { day: 'Wed', date: 4 },
    { day: 'Thu', date: 5 },
    { day: 'Fri', date: 6 },
    { day: 'Sat', date: 7 },
  ];

  const equipmentOptions = [
    { name: 'Microphone', selected: true },
    { name: 'TV', selected: true },
    { name: 'Board', selected: true },
    { name: 'Plasma display', selected: true },
    { name: 'Wifi', selected: true },
    { name: 'Capacity 15', selected: true },
  ];

  const roomImages = [
    'https://s35891.pcdn.co/mallofasia/wp-content/uploads/sites/10/Meeting-Room.jpg.optimal.jpg',
    'https://images.squarespace-cdn.com/content/v1/5ce56293f347bf00019bfffe/1720520935062-93QLOC4714G5S6TQJ3B0/TSX-Webres-20.jpg?format=2500w',
    'https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_fb.jpg?fit=1200%2C675',
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">

      <div className="p-8 space-y-12">
        <div className="flex gap-12">
          {/* Left Panel */}
          <div className="flex-1 flex flex-col gap-10 bg-white rounded-3xl shadow-md p-10 border border-gray-300">
            {/* Room Header */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-5xl font-extrabold text-black">iQURi room</h2>
                <span className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 rounded-full px-5 py-2 font-semibold shadow-sm">
                  <span className="w-3 h-3 rounded-full bg-black animate-pulse" />
                  Available 10am
                </span>
              </div>
              <div className="flex justify-between text-gray-600 mb-6">
                <p className="text-lg tracking-wide">Meeting room 204 &bull; Floor 2</p>
                <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-6 h-6 text-black fill-current" />
                  <span className="font-semibold text-black text-lg">4.96</span>
                </div>
              </div>
            </div>

            {/* Image Slider */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-gray-300">
              <PhotoSlide images={roomImages} />
            </div>

            {/* Booking Details */}
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-black">When’s your meet?</h3>

              {/* Month Selector */}
              <div className="flex items-center justify-between border border-gray-400 rounded-3xl bg-gray-100 px-6 py-4 shadow-sm hover:shadow-md cursor-pointer transition">
                <div className="flex items-center gap-4 text-black font-semibold text-lg select-none">
                  <CalendarIcon className="w-7 h-7" />
                  <Calendar />
                  <span>Jan 2024</span>
                </div>
                <ChevronDown className="w-6 h-6 text-gray-700" />
              </div>

              {/* Date Selector */}
              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-300">
                <div className="grid grid-cols-7 gap-5">
                  {dates.map(({ day, date }) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className="flex flex-col items-center space-y-1 py-3 rounded-xl transition-colors duration-300 focus:outline-none"
                      aria-pressed={selectedDate === date}
                    >
                      <span className="text-sm font-medium text-gray-700">{day}</span>
                      <span
                        className={`w-14 h-14 flex items-center justify-center rounded-xl text-lg font-bold transition ${
                          selectedDate === date
                            ? 'bg-black text-white shadow-lg scale-110'
                            : 'text-black hover:bg-gray-200'
                        }`}
                      >
                        {date}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="bg-white rounded-3xl shadow-lg p-6 space-y-6 border border-gray-300">
                <div className="grid grid-cols-1 gap-8">
                  <Timestamp />
                </div>
              </div>

              {/* Book Button */}
              <button
                className="w-full bg-black text-white py-5 rounded-3xl text-2xl font-extrabold shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                type="button"
              >
                Book Meeting Room Now
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-96 bg-white rounded-3xl shadow-md p-8 flex flex-col gap-8 border border-gray-300">
            <h4 className="text-2xl font-extrabold text-black">Equipment</h4>
            <div className="flex flex-wrap gap-4">
              {equipmentOptions.map(({ name }) => (
                <span
                  key={name}
                  className="inline-block px-6 py-3 rounded-full bg-gray-200 text-black font-semibold border border-gray-400 shadow-sm hover:shadow-md transition cursor-default select-none"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
