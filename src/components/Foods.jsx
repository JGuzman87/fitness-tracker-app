"use client";
import { useRef } from "react";

const Foods = ({
  foodFetch,
  nutrition,
  foodItem,
  grams,
  formHandle,
  deleteHandler,
}) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 p-2">
      <button className="btn" onClick={openModal}>
        Add Food
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box p-4">
          <button
            type="button"
            className="btn btn-error"
            onClick={() => modalRef.current.close()}
          >
            X
          </button>
          <p className="text-center font-bold">Add Food Item</p>
          <form className="flex flex-col gap-2 p-2" onSubmit={foodFetch}>
            <label htmlFor="food">Food Item: </label>
            <input
              type="text"
              name="food"
              value={foodItem}
              placeholder="item.."
              onChange={formHandle}
              required
            />
            <label htmlFor="grams">Grams: </label>
            <input
              type="text"
              name="grams"
              value={grams}
              placeholder="grams.."
              onChange={formHandle}
              required
            />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </dialog>

      {nutrition.length > 0 &&
        nutrition.map((foodItem, index) => (
          <div
            className="card bg-white shadow-2xl p-2 rounded-2xl"
            key={foodItem._id || index}
          >
            <div className="card-body">
              <button
                type="button"
                className="btn btn-ghost w-fit hover:bg-red-300 hover:text-white rounded-lg"
                onClick={() => deleteHandler(foodItem._id)}
              >
                x
              </button>
              <p className=" card-title capitalize text-center">
                {" "}
                {foodItem.name}
              </p>
              <p>Grams: {foodItem.grams} g</p>
              <p>Calories: {foodItem.calories}</p>
              <p>Protein: {foodItem.protein} g</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Foods;
