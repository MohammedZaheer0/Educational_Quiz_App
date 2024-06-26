import React from 'react';

const Model = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-50">
      <div className="bg-white mx-auto md:w-[65%] lg:w-[50%] lx:w-[30%] w-[95%] rounded-lg md:p-4 py-2 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-[25px]">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Model;