import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

function Footer() {
  return (
    <section className="w-screen flex flex-col gap-8 pb-12">
      <h1 className="text-2xl text-gray-300 m-auto">Eduardo Miranda</h1>
      <div className="flex flex-row m-auto text-3xl text-gray-300 gap-12">
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
          onClick={() => (location.href = "Eduardo_Miranda.pdf")}
          className="fa-button"
        />
      </div>
    </section>
  );
}

export default Footer;
