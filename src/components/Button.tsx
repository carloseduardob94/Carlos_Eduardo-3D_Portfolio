type ButtonProps = {
  text: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({ className, text, ...props }: ButtonProps) => {
  return (
    <a href="" className={`cta-wrapper ${className ?? ''}`} {...props}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text mr-2 md:mr-0">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button;