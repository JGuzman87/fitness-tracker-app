import Form from './Form';

const Calendar = () => {
  return (
    <>
      <p className="text-3xl text-center font-stretch-40%">Monthly Tracker</p>
      <div className=" grid md:grid-cols-7 md:grid-rows-4 gap-4 p-4 h-full overflow-y-auto  text-2xl text-black shadow-2xl bg-purple-400/30">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="bg-white shadow-2xl rounded-md p-2">
            <Form
              btnTitle="Add Food"
              style="btn btn-ghost hover:bg-purple-900"
            />
            <Form
              btnTitle="Add Workout"
              style="btn btn-ghost hover:bg-purple-900"
            />
            {i + 1}
          </div>
        ))}
      </div>
    </>
  );
}

export default Calendar;