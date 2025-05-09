import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);

  // Reset visibility when `props.alert` changes (new message arrives)
  useEffect(() => {
    setShowAlert(true); // Show alert again when content updates
  }, [props.alert]);   // Trigger effect on `props.alert` change

  const handleClose = () => {
    setShowAlert(false); // Hide on button click
  };

  // Don't render if alert is closed or props.alert is missing
  if (!showAlert || !props.alert) return null;

  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}</strong> {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        onClick={handleClose}
        aria-label="Close"
      ></button>
    </div>
  );
}

// PropTypes validation
Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']).isRequired,
    msg: PropTypes.string.isRequired,
  }),
};