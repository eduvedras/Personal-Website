import EducationCard from "../components/EducationCard";

function Education() {
  return (
    <section className="w-screen flex flex-col gap-12" id="education">
      <h1 className="mx-auto text-6xl text-teal-500">Education</h1>
      <div className="flex flex-col gap-4 w-1/2 m-auto">
        <EducationCard card="HS" />
        <EducationCard card="BSC" />
        <EducationCard card="MSC" />
      </div>
    </section>
  );
}

export default Education;
