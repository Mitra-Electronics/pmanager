import { ConditionalProps } from "../essentials/Types"


const Conditional = ({ children, condition }: ConditionalProps) => {
  if (condition) {
    return children
  }
  else {
    return <></>
  }
}

export default Conditional