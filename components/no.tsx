import { useState } from "react"
import { animated, useSpring } from "react-spring"

function No() {
  const [mouseEntered, setMouseEntered] = useState(false)
  const styles = useSpring({
    from: { opacity: !mouseEntered ? 0 : 1 },
    to: { opacity: !mouseEntered ? 1 : 0 },
    config: {
      mass: 8,
      tension: 80,
      friction: !mouseEntered ? 300 : 40,
    }
  })
  return (
    <animated.div style={styles} className="text-9xl text-gray-300" onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}>
      No
    </animated.div>
  )
}

export default No