

const Calendar = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-4 gap-4 p-4 h-200 text-2xl text-black bg-purple-400/30">
      {Array.from({ length: 30}).map((_, i) => 
        <div key={i} className="bg-white p-2">
          {i + 1}
        </div>
      )}
    </div>
  )
}

export default Calendar;