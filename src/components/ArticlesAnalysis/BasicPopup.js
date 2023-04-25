import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BasicIcon } from '../../Icons/icons.component';
import QualitativeAnalysis from './ArticleSearch/QualitativeAnalysis';
function BasicPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='edit-button'>
        <BasicIcon/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'><h4 className='text-center'>Qualitative Analysis</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <QualitativeAnalysis/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save & Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BasicPopup;