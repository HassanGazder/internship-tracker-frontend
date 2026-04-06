import React, { useState } from "react";

const InterviewsPage = () => {
  const [interviews] = useState([]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Interviews</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {interviews.length === 0 ? (
          <p className="text-gray-500">No interviews scheduled yet.</p>
        ) : (
          <div>
            {/* Interview list will be displayed here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewsPage;
