import React from 'react';

const Tooth = ({ sections, onSectionClick }) => {
  return (
    <div style={{ display: 'flex' }}>
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '1px solid black',
            marginRight: '5px',
            backgroundColor: section.clicked ? 'gray' : 'white',
            cursor: 'pointer',
          }}
          onClick={() => onSectionClick(index)}
        />
      ))}
    </div>
  );
};

export default Tooth;