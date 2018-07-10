import React from 'react'

const FetchError = ({ message, onRetry}) => {
  
  return (
    <div>
      <p>
        Could not fetch todos: {message}
        <button
          onClick={onRetry}
        >Retry</button>
      </p>
    </div>
  );
};

export default FetchError