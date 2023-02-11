function Intro1(props) {
  return (
    <div className="blog-post-intro">
      <h2>
        I {props.name} become an React Developer!
      </h2>
      <div>
        <p>I have completed my React Basics course!</p>
        <p className="link">Read More...</p>
      </div>
    </div>
  );
}

export default Intro1;
