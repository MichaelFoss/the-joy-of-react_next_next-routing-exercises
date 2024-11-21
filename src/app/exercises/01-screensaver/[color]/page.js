import React from 'react';
import ScreenSaver from '../../../../components/ScreenSaver';

function Color({ params }) {
  const { color } = params;
  return <ScreenSaver color={color} href="." />;
}

export default Color;
