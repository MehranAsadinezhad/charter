import React from "react";

export default function FlightIcon() {
  return (
    <>
      <div className="flex items-center">
        <span
          className="relative flex max-w-[8.5rem] grow items-center justify-between text-gray-300 "
          data-v-e8826dd4=""
        >
          <svg
            viewBox="0 0 24 24"
            width="1rem"
            height="1rem"
            fill="currentColor"
            data-v-e8826dd4=""
          >
            <path
              d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z"
              fillRule="evenodd"
            ></path>
          </svg>
     
        </span>
      </div>
      <span className="h-[1px] w-32 bg-gray-300"></span>
      <span className="h-2 w-2 rounded-full ring-1 ring-gray-300"></span>
    </>
  );
}
