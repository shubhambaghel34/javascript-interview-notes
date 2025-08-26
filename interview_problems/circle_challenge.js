export default function App() {
  // const [position, setposition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  


  const circleRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (circleRef.current) {
        circleRef.current.style.left = `${e.clientX}px`;
        circleRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        position: 'fixed',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '5px',
        background: 'black',
        // left:position.x,
        // top:position.y
      }}
    ></div>
  );
}


 const circleRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (circleRef.current) {
        circleRef.current.style.left = `${e.clientX}px`;
        circleRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        position: 'fixed',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '5px',
        background: 'black',
        // left:position.x,
        // top:position.y
      }}
    ></div>
  );
