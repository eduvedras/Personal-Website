interface EducationCardProps {
  card: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ card }) => {
  let school: string = "";
  let course: string = "";
  let date: string = "";
  let grade: string = "";
  let text: string = "";

  switch (card) {
    case "HS":
      school = "Externato de Penafirme";
      course = "Sciences and Technology";
      date = "Sep 2016 - Jun 2019";
      grade = "Grade: 17.5/20";
      text =
        "Finished a three-year Sciences and Technology degree at highschool.";
      break;
    case "BSC":
      school = "Instituto Superior Técnico";
      course = "BSc Computer Science and Engineering";
      date = "Sep 2019 - Jun 2022";
      grade = "Grade: 15.8/20, Academic Merit Award (April 2022)";
      text =
        "Studied for three years to earn a Bachelor's degree in Computer Science, receiving an Academic Merit Award for maintaining an annual grade average exceeding 15. This degree encompassed crucial state-of-the-art subjects ranging from programming fundamentals to cybersecurity, software engineering, data structures, object-oriented programming, and artificial intelligence.";
      break;
    case "MSC":
      school = "Instituto Superior Técnico";
      course = "MSc Computer Science and Engineering";
      date = "Sep 2022 - Present";
      grade = "Current Grade: 16.5/20";
      text =
        'Currently studying to obtain a Master\'s degree in Computer Science, specializing in software engineering and machine learning. Throughout the program, I have delved into various disciplines spanning from data science and deep learning to advanced programming and software architecture. Presently, I am in the process of writing my final dissertation entitled "Automatic Generation for Learning Resources: A Case Study on the Generation of True/False Sentences" to finish the degree.';
      break;
  }

  return (
    <div className="flex flex-col border-teal-500  shadow-md shadow-teal-800 border rounded-xl px-10 py-5 gap-4 transition ease-in-out delay-150 duration-300 hover:-translate-y-1">
      <div className="flex flex-row gap-4">
        <img
          src={
            "/" +
            school +
            (school.includes("Instituto") ? ".png" : ".svg")
          }
          className="rounded-2xl w-[180px] h-[85px]"
          width={180}
          height={85}
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-2xl text-gray-300">{school}</h1>
          <h2 className="text-xl text-gray-400">{course}</h2>
          <h3 className="text-lg text-gray-500">{date}</h3>
        </div>
      </div>
      <div className="text-xl text-gray-500">{grade}</div>
      <div className="text-lg text-gray-400">{text}</div>
    </div>
  );
};

export default EducationCard;
