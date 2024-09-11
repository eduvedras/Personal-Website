import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

function About() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Machine Learning Engineer",
      "Full-Stack Developer",
    ],
    loop: false,
  });

  return (
    <section className="grid grid-cols-2 h-screen w-screen" id="about">
      <div className="relative w-2/3 h-screen bg-teal-700">
        <div className="absolute -right-48 my-48 rounded-full w-96 h-96 shadow-2xl border-2 border-teal-500">
          <img
            src="/profilepic.jpg"
            alt="profile picture"
            className="rounded-full w-auto h-auto"
            sizes="50vw"
          />
        </div>
        <div className="absolute mx-28 bottom-8 text-4xl flex justify-center gap-16">
          <FaGithub
            onClick={() =>
              (location.href = "https://github.com/eduvedras")
            }
            className="fa-button"
          />
          <FaLinkedin
            onClick={() =>
            (location.href =
              "https://www.linkedin.com/in/em-miranda/")
            }
            className="fa-button"
          />
          <FaFile
            onClick={() => (location.href = "/Eduardo_Miranda.pdf")}
            className="fa-button"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 my-auto mx-32">
        <h1 className="text-gray-100 text-6xl">Eduardo Miranda</h1>
        <h1 className="text-teal-400 text-4xl">
          <span>{text}</span>
          <Cursor />
        </h1>
        <p className="text-xl leading-7 text-gray-300">
          Hi there, I am a computer science student from Portugal,
          currently studying at{" "}
          <span
            onClick={() =>
              (location.href = "https://tecnico.ulisboa.pt/en/")
            }
            className="font-extrabold text-gray-200 hover:text-teal-500"
          >
            Instituto Superior Técnico
          </span>
          . I have already completed my bachelor&apos;s degree in
          computer science, and I am currently writing my dissertation
          to complete a master&apos;s degree with a specialization in
          Software Engineering and Machine Learning. I am always
          passionate and dedicated to learning and solving new
          problems and challenges.
        </p>
      </div>
    </section>
  );
}

export default About;
