import { useEffect, useState } from 'react';

export function AnotherComponent() {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      console.log('Some effect..');
    }
  }, [clicked]);

  function handleClick() {
    setClicked(true);
  }

  return <button onClick={handleClick}>Cause Effect</button>;
}
