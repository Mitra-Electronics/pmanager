import { ConditionalProps } from "../essentials/Types"


const Conditional = ({ children, condition, error }: ConditionalProps) => {
  if (condition) {
    return children
  }
  else {
    if (error)
      return error
    else
      return <></>
  }
}

export default Conditional