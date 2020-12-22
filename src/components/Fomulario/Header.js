import React from 'react';

export default function Header({text, color}) {
  return (
    <>
        <h1 style={{color:color}}>{text}</h1>
    </>
  );
}
