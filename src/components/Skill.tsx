interface SkillProps {
  skill: string;
}

const Skill: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className="flex flex-row gap-1 p-2 border-2 rounded-lg border-gray-400">
      <img
        src={"/skills/" + skill + ".svg"}
        width={25}
        height={25}
        className="w-[25px] h-[25px]"
        alt=""
      />
      <div className="text-xl text-gray-400">{skill}</div>
    </div>
  );
};

export default Skill;
