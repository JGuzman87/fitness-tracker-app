"use client";


const WeekCards = ({workout}) => {


console.log(workout.map(name => name.name))
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];




  return (
    <div className="card bg-base-100 grid grid-cols-3 md:col-span-2 gap-2 p-2">
      {daysOfWeek.map(
        (day, i) =>
          day && (
            <div
              key={i}
              className="card-body text-center text-lg shadow-2xl bg-white p-2"
            >
              <p className="font-bold">{day}</p>
              <p>Workout Name: {} </p>
              <p>Weight in LBS: </p>
            </div>
          )
      )}
    </div>
  );
};

export default WeekCards;
