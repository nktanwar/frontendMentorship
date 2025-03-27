import React from "react";

interface TimeSlotComponentProps {
  dateCurrent: string;
}

const TimeSlotComponent: React.FC<TimeSlotComponentProps> = ({ dateCurrent }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const weekday = date.toLocaleString("en-US", { weekday: "long" });
    return `${day} ${month}, ${weekday}`;
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour < 30; hour++) {
      const adjustedHour = hour % 24;
      const time1 = `${adjustedHour}:00`;
      const time2 = `${adjustedHour}:30`;
      slots.push(time1, time2);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="w-[466px] h-[330px] border border-[#CBD5E1] rounded-l p-2 overflow-auto">
      <div className="text-lg font-semibold text-[#0F172A] ml-2 mb-2">
        {formatDate(dateCurrent)}
      </div>
      {timeSlots.map((time, index) =>
        index % 2 === 0 ? (
          <div key={index} className="flex w-[408px] h-[32px] gap-[12px] mb-2 p-1">
            <button className="w-[200px] h-[32px] border border-gray-400 rounded-md">
              {timeSlots[index]}
            </button>
            {timeSlots[index + 1] && (
              <button className="w-[200px] h-[32px] border border-gray-400 rounded-md">
                {timeSlots[index + 1]}
              </button>
            )}
          </div>
        ) : null
      )}
    </div>
  );
};

export default TimeSlotComponent;
