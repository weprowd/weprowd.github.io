type ButtonProps = {
  href: string;
  label: string;
};

const Button = ({ href, label }: ButtonProps) => (
  <a href={href} className="btn btn-success me-2">
    {label}
  </a>
);

export default Button;
