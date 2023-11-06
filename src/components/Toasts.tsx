import React from 'react';
import Toast from 'react-bootstrap/Toast';

export default function ToastsShowcase({ text, show }: {text: string, show: boolean}) {
  // const [show, toggleShow] = useState(true);

  return (
    <>
      <Toast className="position-fixed bottom-0 end-0 p-3 opacity-100 max-vw-80" show={show}>
        <Toast.Header>
          <strong className="me-3">Skopiowano</strong>
          <small>teraz</small>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </>
  );
};

