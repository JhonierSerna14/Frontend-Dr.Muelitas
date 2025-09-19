import React, { useState } from 'react';
import Tooth from './Tooth';

const ToothGrid = () => {
  const [teeth, setTeeth] = useState(
    Array(32).fill().map(() => Array(5).fill({ clicked: false }))
  );

  const handleSectionClick = (toothIndex, sectionIndex) => {
    const updatedTeeth = [...teeth];
    updatedTeeth[toothIndex][sectionIndex] = {
      ...updatedTeeth[toothIndex][sectionIndex],
      clicked: !updatedTeeth[toothIndex][sectionIndex].clicked,
    };
    setTeeth(updatedTeeth);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        {teeth.slice(0, 16).map((tooth, index) => (
          <Tooth
            key={index}
            sections={tooth}
            onSectionClick={(sectionIndex) =>
              handleSectionClick(index, sectionIndex)
            }
          />
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        {teeth.slice(16).map((tooth, index) => (
          <Tooth
            key={index + 16}
            sections={tooth}
            onSectionClick={(sectionIndex) =>
              handleSectionClick(index + 16, sectionIndex)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ToothGrid;