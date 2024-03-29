import '../index.css';

function Section(props) {
  return (
    <div className="section bg-black ">
      <h2 className="text-center pt-3 fs-1 text-gradient">{props.title}</h2>
      <p className="px-5 fs-5 pt-4 text-gradient">{props.body}</p>
    </div>
  );
}

export default Section;
