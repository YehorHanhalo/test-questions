import { useState, useEffect, useLayoutEffect, useCallback, useMemo, useRef, ChangeEvent, FC } from 'react';
import styles from './Div.module.css';

interface DivProps {
    divHeight: number;
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

  const [rootDivHeight, setRootDivHeight] = useState<number>(divHeight)
  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => setRootDivHeight(+e.target.value), [])

  useLayoutEffect(() => {
    if (divRef.current) {
      const heightWithPx = getComputedStyle(divRef.current).height
      const height = parseInt(heightWithPx)
      setRootDivHeight(height)
    }
  }, [divRef])

  const divInlineStyle = useMemo(() => ({
    height: rootDivHeight,
  }), [rootDivHeight])
  // =======================

  return (
    <div
      ref={divRef}
      className={styles.divStep1}
      style={divInlineStyle}
    >
      <span>Screen width: {screenWidth}</span>
      <input value={rootDivHeight} onChange={handleChangeInput} />
    </div>
  );
}

export default Div;