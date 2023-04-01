import './btn-style.sass';

type BtnProps = {
  className?: string,
  text?: string,
  children?: React.ReactNode,
  click?: () => void,
}

const Button = (props: BtnProps) => {
  
  return (
    <button
      className={props.className ? `my-btn ${props.className}` : "my-btn"}
      onClick={props.click}
    >
      <span>{props.text}</span>
      {props.children}
    </button>
  )
}

export default Button;
