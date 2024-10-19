import Button from "./Button.jsx";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+Add project</Button>
      </div>
      <ul className="mt-4">
        {projects.map((project) => {
          let classString =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (selectedProjectId === project.id) {
            classString += " bg-stone-800 text-stone-200";
          } else {
            classString += " text-stone-200";
          }

          return (
            <li key={project.id} className={classString}>
              <button
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
