import React from "react";

interface prop {
  btnTitle: string;
  clickEvent?: () => void;
}
function CategoryBtn({ btnTitle, clickEvent }: prop) {
  return (
    <button
      className="px-3 py-1 rounded-md bg-white border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-white font-semibold transition-all duration-200"
      onClick={clickEvent}
    >
      <p>{btnTitle}</p>
    </button>
  );
}

export default CategoryBtn;
