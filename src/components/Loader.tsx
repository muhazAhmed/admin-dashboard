import "./style.css";

const Loader = () => {
  return (
    <div className="blur-bg">
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
      Loading...
    </div>
  );
};

export default Loader;
