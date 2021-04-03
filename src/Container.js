const Container = ({ keys, value }) => {
  return (
    <div className="two column ui card" key={keys}>
      <div className="content" style={{ backgroundColor: "#d1d1d1" }}>
        <div className="header">
          <p style={{ textAlign: "center" }}>{keys}</p>
        </div>
      </div>
      <div className="content">
        <p style={{ textAlign: "center" }}>{value}</p>
      </div>
    </div>
  );
};

export default Container;
