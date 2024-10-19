import noProjectImg from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function ProjectPlaceholder({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Projects Selected
      </h2>
      <p className="text-stone-500 mb-4">Select a project or create new one</p>
      <p className="mb-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
