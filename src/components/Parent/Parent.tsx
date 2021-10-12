import React, { ComponentType } from 'react'
import Div, {DivProps} from '../Div/Div'

declare global {
  interface Window {
    setDivHeight(height: number): void;
    getDivHeight(): number;
  }
}

let divHeight: number;
window.setDivHeight = (height: number) => divHeight = height;
window.getDivHeight = () => divHeight

// function Parent() {
//   window.setDivHeight(100)

//   return (
//     <Div divHeight={divHeight} />
//   );
// }

// export default Parent;

function withDivHeight<T>(Component: ComponentType<T>) {
  return function (props: T) {
      return (<Component {...props} divHeight={divHeight} />)
  }
}

export default withDivHeight<DivProps>(Div)