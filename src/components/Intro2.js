function Intro2(props) {
  return (
    <div className="blog-post-intro">
      <h2>I Love {props.course}</h2>
      <div>
        <p>In this blog I will list why I love web development...</p>
        <p className="link">Read More...</p>
      </div>
    </div>
  );
}

export default Intro2;
