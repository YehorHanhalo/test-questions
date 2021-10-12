import { ComponentType } from 'react'
import Div, { DivProps } from '../Div/Div'

declare global {
  interface Window {
    setDivHeight(height: number): void;
  }
}

let divHeight: number;
window.setDivHeight = (height: number) => divHeight = height;

function WithDivHeight<T>(Component: ComponentType<T>) {
  return function (props: any) {
      return (<Component {...props} divHeight={divHeight} />)
  }
}

export default WithDivHeight<DivProps>(Div)

// function WithDivHeight() {
//   window.setDivHeight(100)

//   return (
//     <Div divHeight={divHeight} />
//   );
// }

// export default WithDivHeight;