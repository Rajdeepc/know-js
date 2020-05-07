import React from "react";
import { Alert } from 'react-bootstrap';

const toast = (msg) => {
  return (
    <Alert variant="success">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      msg
    </p>
  </Alert>
  );
}

export default toast;