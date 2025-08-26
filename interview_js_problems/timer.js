const Timer = () => {
    const [seconds, setSeconds] = useState(0);
  
    const [isrunning, SetRunning] = useState(false);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      if (isrunning) {
        intervalRef.current = setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000);
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return () => clearInterval(intervalRef.current);
    }, [isrunning]);
  
    const toggleTime = () => SetRunning((prev) => !prev);
  
    const formattimer = () => {
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const min = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const sec = String(seconds % 60).padStart(2, "0");
      return `${hrs}:${min}:${sec}`;
    };
  
    return (
      <div>
        <div>{formattimer()}</div>
        {/* <p>{seconds}</p> */}
        <button onClick={toggleTime}>{isrunning ? "Pause" : "Play"}</button>
      </div>
    );
  };
  
  export default Timer;
  