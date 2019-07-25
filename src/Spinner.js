import React from 'react';

const Spinner = (props) => {
  return (
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
        <p></p>
      </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading ...'
};

export default Spinner;
