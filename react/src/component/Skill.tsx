type SkillProps = {
  icon: string;
  heading: string;
  content: string;
};

const Skill = ({ icon, heading, content }: SkillProps) => (
    <div className="col-md-4 text-center">
        <img src={icon} alt="" className="skills-icon" />
        <h5 className="mt-3">{heading}</h5>
        <p>{content}</p>
    </div>
);
export default Skill