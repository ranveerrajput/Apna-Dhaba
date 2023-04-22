const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" data-testid="shimmer"></div>
        ))}
    </div>
  );
};

export default Shimmer;
