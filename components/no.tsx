import { useState } from "react"
import { animated, useSpring } from "react-spring"

function No() {
  const [mouseEntered, setMouseEntered] = useState(false)
  const styles = useSpring({
    from: {
      opacity: !mouseEntered ? 0 : 1,
      color: "blue"
    },
    to: async (next, cancel) => {
      await next({ opacity: !mouseEntered ? 1 : 0 })
      await next({ color: "red" })
      await next({ color: "orange" })
      await next({ color: "yellow" })
      await next({ color: "green" })
      await next({ color: "blue" })
      await next({ color: "indigo" })
      await next({ color: "violet" })
      await next({ color: "rgb(209,213,219)" })
    },
    config: {
      mass: 3,
      tension: 30,
      friction: !mouseEntered ? 10 : 20,
      clamp: true,
    }
  })
  return (
    <animated.div style={styles} className="text-5xl md:text-7xl lg:text-9xl text-gray-300" onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}>
      No
    </animated.div>
  )
}

export default No