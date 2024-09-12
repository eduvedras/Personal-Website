import { FaRegPlayCircle } from "react-icons/fa";
import { TbCodeCircle2 } from "react-icons/tb";

interface ProjectCardProps {
  card: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ card }) => {
  const headline: React.JSX.Element[] = [];
  let text: string = "";
  const skills: React.JSX.Element[] = [];
  let linkdemo: string = "";
  let linkcode: string = "";

  let skillsPokemon: string[] = ["HTML", "CSS", "JavaScript", "D3.js"];
  let skillsIVM: string[] = [
    "HTML",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Python",
    "Flask",
    "PostgresSQL",
  ];
  let skillsPlanet: string[] = ["HTML", "Javascript", "Three.js"];
  let skillsOvercooked: string[] = ["Python", "Pytorch"];

  switch (card) {
    case "Pokemon":
      headline.push(
        <h1 key={0} className="text-4xl text-gray-50 mx-auto">
          Pokemon TCG
        </h1>
      );
      headline.push(
        <h1 key={1} className="text-4xl text-gray-50 mx-auto">
          Visualization
        </h1>
      );
      text =
        "A data visualization project to visualize the Pokemon TCG cards stats using D3.js. The project contains three idioms that are connected with each other to perform complex searches.";

      skillsPokemon.forEach((element) => {
        skills.push(
          <div
            key={element}
            className="text-xl text-teal-300 bg-teal-900 rounded-xl px-2 py-1"
          >
            {element}
          </div>
        );
      });

      linkdemo = "https://eduvedras.github.io/Pokemon-Vis/";
      linkcode = "https://github.com/eduvedras/Pokemon-Vis";
      break;
    case "IVM":
      headline.push(
        <h1 key={0} className="text-4xl text-gray-50 mx-auto">
          CRUD app
        </h1>
      );
      text =
        "A three.js project about a spaceship that has to collect debris in the exosphere of a planet. The project implements collisions, a movable camera and constant angular velocity.";

      skillsIVM.forEach((element) => {
        skills.push(
          <div
            key={element}
            className="text-xl text-teal-300 bg-teal-900 rounded-xl px-2 py-1"
          >
            {element}
          </div>
        );
      });

      linkdemo = "https://ivm-frontend.netlify.app";
      linkcode = "https://github.com/eduvedras/IVM-Database";
      break;
    case "Planet":
      headline.push(
        <h1 key={0} className="text-4xl text-gray-50 mx-auto">
          Space Debris
        </h1>
      );
      text =
        "A three.js project about a spaceship that has to collect debris in the exosphere of a planet. The project implements collisions, a movable camera and constant angular velocity.";

      skillsPlanet.forEach((element) => {
        skills.push(
          <div
            key={element}
            className="text-xl text-teal-300 bg-teal-900 rounded-xl px-2 py-1"
          >
            {element}
          </div>
        );
      });

      linkdemo = "https://eduvedras.github.io/SpaceDebris/";
      linkcode = "https://github.com/eduvedras/SpaceDebris";
      break;
    case "Overcooked":
      headline.push(
        <h1 key={0} className="text-4xl text-gray-50 mx-auto">
          Overcooked-AI
        </h1>
      );
      text =
        "A multi-agent reinforcement learning (MARL) project to train agents to play the game Overcooked. The agents are trained using Q-Learning and SARSA.";

      skillsOvercooked.forEach((element) => {
        skills.push(
          <div
            key={element}
            className="text-xl text-teal-300 bg-teal-900 rounded-xl px-2 py-1"
          >
            {element}
          </div>
        );
      });

      linkdemo = "/AASMA.mp4";
      linkcode = "https://github.com/eduvedras/AASMA-Proj/";
      break;
  }

  return (
    <div className="flex flex-col border-teal-500 border rounded-xl m-auto p-8 gap-8 w-2/3 hover:shadow-lg hover:shadow-teal-600 duration-300 transition ease-in-out hover:-translate-y-1">
      <div className="flex flex-col">{headline}</div>

      <img
        src={card + ".png"}
        alt="project"
        className="rounded-xl m-auto"
        width={348}
        height={195}
      />

      <span className="text-lg text-gray-400"> {text}</span>

      <div className="flex flex-row gap-4 p-2  flex-wrap">{skills}</div>

      <div className="relative grid grid-cols-2 mt-4 p-3">
        <FaRegPlayCircle
          onClick={() => (location.href = linkdemo)}
          className="cursor-pointer absolute left-5 text-teal-600 scale-[2.5] hover:text-gray-200 hover:scale-[2.75] duration-300"
        />
        <TbCodeCircle2
          onClick={() => (location.href = linkcode)}
          className="cursor-pointer absolute right-5 text-teal-600 scale-[2.9] hover:text-gray-200 hover:scale-[3.19] duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
