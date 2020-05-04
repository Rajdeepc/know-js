import React from "react";
import { Toast } from 'react-bootstrap';

const toast = (msg) => {
  return (
    <div>
      <Toast>
        <Toast.Header>
        </Toast.Header>
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
    </div>
  );
}

export default toast;