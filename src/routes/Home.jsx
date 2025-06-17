import React, { useState } from 'react';
import { ChevronLeft, Star, Clock, Calendar, ChevronDown } from 'lucide-react';
import PhotoSlider from '../components/PhotoSlide';

export default function MeetingRoomBooking() {
    const [selectedDate, setSelectedDate] = useState(5);
    const [selectedTime, setSelectedTime] = useState('11:00');
    const [startTime, setStartTime] = useState('10:00');
    const [endTime, setEndTime] = useState('12:00');

    const dates = [
        { day: 'Sun', date: 1 },
        { day: 'Mon', date: 2 },
        { day: 'Tue', date: 3 },
        { day: 'Wed', date: 4 },
        { day: 'Thu', date: 5 },
        { day: 'Fri', date: 6 },
        { day: 'Sat', date: 7 }
    ];

    const times = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

    const equipmentOptions = [
        { name: 'Microphone', selected: true },
        { name: 'TV', selected: true },
        { name: 'Board', selected: true },
        { name: 'Plasma display', selected: true },
        { name: 'Wifi', selected: true },
        { name: 'Capacity 15', selected: true }
    ];

    const roomImages = [
        'https://s35891.pcdn.co/mallofasia/wp-content/uploads/sites/10/Meeting-Room.jpg.optimal.jpg',
        'https://images.squarespace-cdn.com/content/v1/5ce56293f347bf00019bfffe/1720520935062-93QLOC4714G5S6TQJ3B0/TSX-Webres-20.jpg?format=2500w',
        'https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_fb.jpg?fit=1200%2C675'
    ];

    return (
        <div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20">
                <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
                    <button className="p-3 hover:bg-gray-100 rounded-full transition-all duration-200 hover:shadow-md">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Meeting Room Booking
                    </h1>
                    <div className="w-12"></div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-8">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 p-8">

                    {/* Left Column - Room Info & Images */}
                    <div className="space-y-8">
                        {/* Room Info */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-4xl font-bold text-gray-900">iQURi room</h2>
                                <div className="flex items-center text-green-500 bg-green-50 px-4 py-2 rounded-full">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                                    <span className="font-medium">Available 10am</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-8">
                                <div className="text-gray-600 text-lg">
                                    <span>Meeting room 204 • Floor 2</span>
                                </div>
                                <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                                    <span className="font-semibold text-gray-900">4.96</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                            <PhotoSlider images={roomImages} />
                        </div>

                        {/* Details */}
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-gray-900">When's your meet?</h3>

                            {/* Month selector */}
                            <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-2xl bg-white/80 hover:border-blue-300 transition-all duration-200 shadow-lg">
                                <div className="flex items-center">
                                    <Calendar className="w-6 h-6 mr-4 text-blue-600" />
                                    <span className="font-semibold text-lg">Jan 2024</span>
                                </div>
                                <ChevronDown className="w-6 h-6 text-gray-500" />
                            </div>

                            {/* Date selector */}
                            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                                <div className="grid grid-cols-7 gap-4">
                                    {dates.map((item) => (
                                        <button
                                            key={item.date}
                                            onClick={() => setSelectedDate(item.date)}
                                            className="text-center py-4 rounded-xl transition-all duration-200 hover:bg-blue-50"
                                        >
                                            <div className="text-sm text-gray-500 mb-2 font-medium">{item.day}</div>
                                            <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-200 ${selectedDate === item.date
                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110'
                                                : 'text-gray-700 hover:bg-blue-100'
                                                }`}>
                                                {item.date}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time section */}
                            <div className="bg-white/80 rounded-2xl p-6 shadow-lg space-y-6">
                                <div className="flex items-center">
                                    <Clock className="w-6 h-6 mr-3 text-blue-600" />
                                    <span className="font-bold text-xl text-gray-900">Time</span>
                                </div>

                                {/* Time slots */}
                                <div className="grid grid-cols-3 gap-4">
                                    {times.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${selectedTime === time
                                                ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg scale-105'
                                                : time === '12:00'
                                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 shadow-md hover:shadow-lg'
                                                }`}
                                            disabled={time === '12:00'}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>

                                {/* Start and End time */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-600 mb-3 font-medium">Start time</label>
                                        <div className="flex items-center border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-blue-300 transition-all duration-200">
                                            <input
                                                type="time"
                                                value={startTime}
                                                onChange={(e) => setStartTime(e.target.value)}
                                                className="flex-1 outline-none text-lg font-medium"
                                            />
                                            <span className="text-gray-500 ml-3 font-medium">AM</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 mb-3 font-medium">End time</label>
                                        <div className="flex items-center border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-blue-300 transition-all duration-200">
                                            <input
                                                type="time"
                                                value={endTime}
                                                onChange={(e) => setEndTime(e.target.value)}
                                                className="flex-1 outline-none text-lg font-medium"
                                            />
                                            <span className="text-gray-500 ml-3 font-medium">AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Booking button */}
                            <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 transform hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700">
                                Book Meeting Room Now
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* Equipment */}
                        <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                            <h4 className="text-xl font-bold mb-4 text-gray-900">EQUIPMENT:</h4>
                            <div className="flex flex-wrap gap-3">
                                {equipmentOptions.map((item) => (
                                    <span
                                        key={item.name}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 rounded-full font-medium border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200"
                                    >
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}