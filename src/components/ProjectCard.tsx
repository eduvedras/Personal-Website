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
  let skillsBlogAggregator: string[] = [
    "Go",
    "PostgresSQL",
    "Bash",
    "Docker"
  ];
  let skillsQuizzesTutor: string[] = ["Java", "Spring", "Groovy", "TypeScript"];
  let skillsOvercooked: string[] = ["Python", "Pytorch"];

  let image: React.JSX.Element = <img
    src={card + ".png"}
    alt="project"
    className="rounded-xl m-auto"
    width={348}
    height={195}
  />

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
    case "BlogAggregator":
      headline.push(
        <h1 key={0} className="text-4xl text-gray-50 mx-auto">
          Blog Aggregator
        </h1>
      );
      text =
        "A project that allows users to aggregate all their favorite RSS blogs and feeds in one place. The project includes a scraper that periodically fetches new posts from the blogs in the database. I have currently built the API and a command-line interface tool to simplify interaction with this API. I also plan to build a graphical user interface in the future, so for now, the demo button links to the CLI repo. The project was built in Go and I applied several of my skills, including setting up CI/CD pipelines using GitHub Actions, deploying on Google Cloud, implementing parallel programming to build the scraper that retrieves posts from each blog, and handling user authentication, database migrations, and deployments.";

      skillsBlogAggregator.forEach((element) => {
        skills.push(
          <div
            key={element}
            className="text-xl text-teal-300 bg-teal-900 rounded-xl px-2 py-1"
          >
            {element}
          </div>
        );
      });

      linkdemo = "https://github.com/eduvedras/Blog-Aggregator-CLI";
      linkcode = "https://github.com/eduvedras/Blog-Aggregator";
      break;
    case "QuizzesTutor":
      headline.push(
        <h1 key={0} className="text-4xl text-gray-50 mx-auto">
          Quizzes Tutor
        </h1>
      );
      text =
        "Quizzes Tutor is a platform used at my college (IST) that allows professors to create quizzes for students to answer. It has several features related to quiz statistics. We implemented one of these features: a functionality that shows students all their incorrect answers in chronological order. For this project, we used Java and Spring for the backend, Groovy for testing, and TypeScript for the frontend.";

      skillsQuizzesTutor.forEach((element) => {
        skills.push(
          <div
            key={element}
            className="text-xl text-teal-300 bg-teal-900 rounded-xl px-2 py-1"
          >
            {element}
          </div>
        );
      });

      linkdemo = "https://quizzes-tutor.tecnico.ulisboa.pt/student/dashboard";
      linkcode = "https://github.com/eduvedras/Quizzes-Tutor-ES-2022";
      break;
    case "Overcooked":
      headline.push(
        <h1 key={0} className="text-4xl text-gray-50 mx-auto">
          Overcooked-AI
        </h1>
      );
      text =
        "A multi-agent reinforcement learning (MARL) project to train two agents to play the game Overcooked. The agents are trained using classic reinforcement learning algorithms, Q-Learning and SARSA.";

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

      {card != "BlogAggregator" ? image : ""}

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
    </div >
  );
};

export default ProjectCard;
