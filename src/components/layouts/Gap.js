import React from 'react';
import PropTypes from 'prop-types';

const Gap = (props) => {
  const { v, h, className } = props;

  let defaultClassName = className || '';

  if (v) {
    defaultClassName += ' vgap-' + (v - 1 < 0 ? '-' + v * 10 : v) + 'x';
  }

  if (h) {
    defaultClassName += ' hgap-' + (h - 1 < 0 ? '-' + h * 10 : h) + 'x';
  }

  return <div className={defaultClassName} />;
};

Gap.propTypes = {
  className: PropTypes.string,
  v: PropTypes.number,
  h: PropTypes.number,
};

export default Gap;
