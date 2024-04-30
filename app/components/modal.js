import React from "react";


export default function Modal({ isOpen, onClose, title, description }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="bg-black opacity-50 fixed inset-0"></div>
          <div className="relative w-full max-w-lg p-8 mx-auto my-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-start justify-between pb-4 border-b border-gray-200 max-h-96">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-800 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.22 5.88l1.41-1.41L12 10.59l4.37-4.3 1.41 1.41L13.41 12l4.36 4.36-1.41 1.41L12 13.41l-4.36 4.37-1.41-1.41L10.59 12 6.22 7.62l-1.41 1.41L10.59 12l-5.37 5.36 1.41 1.41L12 13.41l4.36 4.36 1.41-1.41L13.41 12l4.36-4.37-1.41-1.41L12 10.59 7.62 6.22zM12 0c-6.62 0-12 5.38-12 12s5.38 12 12 12 12-5.38 12-12-5.38-12-12-12z" />
                </svg>
              </button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-600">{description}</p>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
