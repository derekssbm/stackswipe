const PlaceholderCard = () => (
  <div className="flex justify-center">
  <div style={{ width: "420px", height: "560px" }}>
    <div className="card bg-slate-700 shadow-2xl p-0 mx-10 my-11">
      <div
        className="card-body py-2 px-4"
        style={{ overflowY: "auto", maxHeight: "500px" }}
      >
        <h2 className="card-title">All done!</h2>
        <div className="divider m-0"></div>
        <div
          className="mb-4"
          style={{ overflowY: "auto", maxHeight: "400px", minHeight: "400px" }}
        >
          <p>You have answered all the cards in this stack.</p>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default PlaceholderCard;
