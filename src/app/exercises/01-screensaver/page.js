import React from 'react';

import Link from 'next/link';

const colors = ['lavender', 'slateblue', 'hotpink', 'white'];

const Circle = ({ color }) => {
  const styles = {
    backgroundColor: color,
    borderRadius: '50%',
    height: 12,
    width: 12,
    display: 'inline-block',
    marginRight: 4,
  };
  return <span style={styles} />;
};

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <ul style={{ listStyle: 'none' }}>
        {colors.map((color) => (
          <li key={color}>
            <Link href={`/exercises/01-screensaver/${color}`}>
              <Circle color={color} />
              {color}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
