import { useState } from "react"
import { animated, useSpring } from "react-spring"

function No() {
  const [mouseEntered, setMouseEntered] = useState(false)
  const styles = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0.3 },
    config: {
      mass: 3,
      frequency: 1,
      damping: 1,
      clamp: true
    }
  })
  return (
    <animated.div style={styles} className="text-3xl" onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}>No</animated.div>
  )
}

export default No