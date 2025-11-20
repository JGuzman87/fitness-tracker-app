const WeekCards = ({ workouts, deleteHandler }) => {
  return (
    <div className="card bg-base-100 grid md:grid-cols-3 md:col-span-2 gap-2 p-2">
      {workouts.length > 0 &&
        workouts.map((workout) => (
          <div
            key={workout.id}
            className="card-body text-center text-lg shadow-2xl bg-white p-2  rounded-2xl"
          >
            <button
              className="btn btn-ghost w-fit hover:bg-red-300 hover:text-white rounded-lg"
              onClick={() => deleteHandler(workout.id)}
            >
              X
            </button>
            <p className="font-bold capitalize">{workout.day}</p>
            <p>Workout Name: {workout.name} </p>
            <p>Weight: {parseFloat(workout.pounds) + "lbs" || 0 + "lbs"}</p>
          </div>
        ))}
    </div>
  );
};

export default WeekCards;
