import React from "react";

const Card = ({ children }) => {
  console.log(children);
  const obj = {
    name: "Muhammad Usman Ghani",
    fatherName: "Muhammad Shariq",
    course: "Modern Web Application Development",
    batch: "WMA BATCH (24)",
    rollNo: "WMA-898035",
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-72 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        {/* Header */}
        <div className="bg-blue-600 px-4 py-3">
          <h2 className="text-white font-bold text-lg tracking-wide">SMIT</h2>
          <p className="text-blue-100 text-xs">
            Saylani Mass IT Training Program
          </p>
        </div>

        {/* Photo */}
        <div className="flex justify-center mt-4">
          {children[2]}
        </div>

        {/* Details */}
        <div className="px-5 py-4 space-y-1 text-center">
          {children[1]}
          {children[0]}

          <div className="mt-3 text-left space-y-1 text-sm text-gray-700">
            <p>
              <span className="font-medium text-gray-500">Father Name:</span>{" "}
              {obj.fatherName}
            </p>
            <p>
              <span className="font-medium text-gray-500">Batch:</span>{" "}
              {obj.batch}
            </p>
            <p>
              <span className="font-medium text-gray-500">Roll No:</span>{" "}
              {obj.rollNo}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-2 text-center border-t">
          <p className="text-[10px] text-gray-400">
            This card is for SMIT premises only.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;

// export default function IDCard({
//   name = "Muhammad Usman Ghani",
//   fatherName = "Muhammad Shariq",
//   course = "Modern Web Application Development",
//   batch = "WMA BATCH (24)",
//   rollNo = "WMA-898035",
//   photoUrl = "https://via.placeholder.com/150",
// })
