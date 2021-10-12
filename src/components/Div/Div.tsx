import { useState, useEffect, useLayoutEffect, useCallback, useRef, KeyboardEvent, FC } from 'react';
import styles from './Div.module.css';

export interface DivProps {
    divHeight?: number;
}

const Div: FC<DivProps> = ({ divHeight }) => {

  // ========step 1=========
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

  const getWindowWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth)
    return () => window.removeEventListener("resize", getWindowWidth)
  }, [])
  // =======================

  // ========step 2=========
  const divRef = useRef<HTMLDivElement>(null)

  const [rootDivHeight, setRootDivHeight] = useState<number | undefined>(divHeight)

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
      if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(+e.key)) {
          setRootDivHeight(prev => +(String(prev) + e.key))
      }
  }, [])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.code === 'Backspace') {
        setRootDivHeight(prev => {
          const inputString = String(prev)
          return +inputString.slice(0, inputString.length - 1)
        })
      }
  }, [])

  useLayoutEffect(() => {
      setRootDivHeight(divHeight)
  }, [divHeight])

  useLayoutEffect(() => {
    if (divRef.current) {
      const heightWithPx = getComputedStyle(divRef.current).height
      const height = parseInt(heightWithPx)
      setRootDivHeight(height)
    }
  }, [divRef])

  const divInlineStyle = {
    height: rootDivHeight,
  }
  // =======================

  return (
    <div
      ref={divRef}
      className={styles.divStep1}
      style={divInlineStyle}
    >
      <span>Screen width: {screenWidth}</span>
      <input
        value={rootDivHeight}
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Div;