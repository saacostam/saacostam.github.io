import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <div className="avatar mb-4 flex justify-center">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img
            src="https://github.com/saacostam.png"
            alt="saacostam"
            width={120}
            height={120}
          />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-primary text-center">saacostam</h1>
      <h2 className="text-lg font-bold text-center mb-8">
        Full Stack Software Engineer
      </h2>
      <Link to="/projects" className="btn btn-primary">
        Go to Projects
      </Link>
    </>
  );
}
