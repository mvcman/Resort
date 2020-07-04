import React from 'react';

export default function Title({title, children}){
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div></div>
    </div>
  );
}
