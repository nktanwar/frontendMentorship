import React from "react";

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, setSelectedDate }) => {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  
  const getMonthDays = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
  
  const prevMonth = () => setSelectedDate(new Date(year, month - 1, 1));
  const nextMonth = () => setSelectedDate(new Date(year, month + 1, 1));
  
  const daysInMonth = getMonthDays(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="w-[610px] h-[332px] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px]">
      <div className="flex justify-between mb-2 p-3">
        <div className="text-lg font-semibold">
          {selectedDate.toLocaleString("default", { month: "long" })} {year}
        </div>
        <div className="flex gap-1">
          <button onClick={prevMonth} className="text-gray-500 hover:text-black">←</button>
          <button onClick={nextMonth} className="text-gray-500 hover:text-black">→</button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-gray-600 font-medium mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-1">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center">
        {Array(firstDay).fill(null).map((_, i) => (
          <div key={`empty-${i}`} className="p-2"></div>
        ))}

        {days.map((day) => {
          const isSelected = day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear();

          return (
            <div
              key={day}
              onClick={() => setSelectedDate(new Date(year, month, day))}
              className={`p-2 cursor-pointer rounded-full transition ${
                isSelected ? "bg-blue-600 text-white" : "hover:bg-gray-200"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
