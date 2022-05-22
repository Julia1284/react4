import { useState } from "react"

function Count() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    };
    return (
        <button onClick={handleClick}>{count}</button>
    )
}

export default Count