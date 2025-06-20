import React from 'react'

interface CardProps {
  children: React.ReactNode;
}

const Card = ({children}: CardProps) => {
  const cardStyle = {
    padding: '100px',
    margin: '20px',
    border: '1px solid #ddd',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
     <div style={cardStyle}>{children}</div>
  )
}

export default Card