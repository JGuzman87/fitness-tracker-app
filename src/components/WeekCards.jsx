const WeekCards = ({ workouts, deleteHandler }) => {
  return (
    <div className="card bg-base-100 grid grid-cols-3 md:col-span-2 gap-2 p-2">
      {workouts.length > 0 &&
        workouts.map((workout) => (
          <div
            key={workout.id}
            className="card-body text-center text-lg shadow-2xl bg-white p-2"
          >
            <button
              className="btn btn-error w-fit"
              onClick={() => deleteHandler(workout.id)}
            >
              X
            </button>
            <p className="font-bold">{workout.day.toUpperCase()}</p>
            <p>Workout Name: {workout.name} </p>
            <p>Weight: {parseFloat(workout.pounds) || 0}</p>
          </div>
        ))}
    </div>
  );
};

export default WeekCards;
