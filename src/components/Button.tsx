type ButtonProps = {
  text: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({ id, className, text, ...props }: ButtonProps) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById('counter')

        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: 'smooth' })
        }
      }}
      href="" className={`cta-wrapper ${className ?? ''}`} {...props}>
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