import React from 'react'

const Form = ({ btnTitle, style }) => {
  return (
    <div>
      <a href="#my_modal_8" className={style}>
        {btnTitle}
      </a>

      {/* Put this part before </body> tag */}
      <div className="modal" role="dialog" id="my_modal_8">
        <div className="modal-box backdrop-blur-xs bg-black/10 gap-4 flex flex-col justify-center items-center">
         

          <input
            type="email"
            placeholder="enter email..."
            className="input input-success w-full text-black text-2xl p-1 bg-white/80"
            required
          />
          <input
            type="password"
            placeholder="enter password..."
            className="input input-success w-full text-black text-2xl p-1 bg-white/80"
            required
          />
          <div className="modal-action">
            <a href="/dashboard" className="btn">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form