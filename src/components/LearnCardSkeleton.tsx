const LearnCardSkeleton = () => (
  <div className="flex justify-center">
    <div style={{ width: "420px", height: "560px" }}>
      <div className="card bg-slate-700 shadow-xl p-0 mx-10 my-11">
        <div
          className="card-body py-2 px-4"
          style={{ overflowY: "auto", maxHeight: "500px" }}
        >
          <div className="skeleton h-8 w-1/3 mb-4"></div>
          <div className="divider m-0"></div>
          <div
            className="mb-4"
            style={{ overflowY: "auto", maxHeight: "400px", minHeight: "400px" }}
          >
            <div className="skeleton h-4 w-full mb-3"></div>
            <div className="skeleton h-4 w-full mb-3"></div>
            <div className="skeleton h-4 w-2/3 mb-3"></div>
            <div className="skeleton h-4 w-2/3 mb-3"></div>
            <div className="skeleton h-4 w-5/6 mb-3"></div>
            <div className="skeleton h-4 w-5/6 mb-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LearnCardSkeleton;
