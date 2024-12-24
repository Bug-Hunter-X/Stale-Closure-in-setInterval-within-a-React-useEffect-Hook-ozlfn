```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    const intervalId = setInterval(() => {
      setCount(count + 1); // Closure issue: count is stale
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```