import SkillCard from '../components/SkillCard.tsx'

function Skills() {
  return (
    <section className="w-screen flex flex-col gap-12" id="skills">
      <h1 className="mx-auto text-6xl text-teal-500">Technical Skills</h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-8 w-2/3 m-auto">
        <SkillCard card="Front-End" />
        <SkillCard card="Back-End" />
        <SkillCard card="Machine Learning" />
        <SkillCard card="Tools" />
      </div>
    </section>
  );
}

export default Skills;
