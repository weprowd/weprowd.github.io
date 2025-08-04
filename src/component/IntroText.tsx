type IntroTextProps = {
  heading: string;
  content: string;
};

const IntroText = ({ heading, content }: IntroTextProps) => (
    <div className="text-center mb-5">
        <h2 className="fw-bold">{heading}</h2>
        { content === "" ? "" : <p className="text-muted">{content}</p> }
        
    </div>
);
export default IntroText