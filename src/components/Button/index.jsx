import MyButton from './styles'


const Button = ({children, setColor, setSize, setClick}) => {
  return(
    <button
        setColor={setColor}
        onClick={setClick}
        setSize={setSize}
      >{children}
    </button>
  )
}
export default Button