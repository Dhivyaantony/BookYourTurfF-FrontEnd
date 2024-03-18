import React from 'react';
import Card from 'react-bootstrap/Card';
import { BASE_URL } from '../Constants/constants';

function MybookingCard({ bookingData }) {
  // Check if bookingData is not null or undefined
  if (!bookingData) {
    return null; // Render nothing if bookingData is missing
  }

  const { courtData, slot } = bookingData;

  return (
    <Card style={{ width: '18rem' }} className='col-3'>
      {/* Check if courtData exists before accessing its properties */}
      {courtData && (
        <>
          {/* Check if courtImage exists before rendering Card.Img */}
          {courtData.courtImage && (
            <Card.Img
              variant="top"
              style={{ width: '100%', height: '10rem' }} // Adjusted height for better fit
              src={`${BASE_URL}/courts/${courtData.courtImage}`}
              alt="Court image"
            />
          )}
          <Card.Body>
            {/* Check if courtData.name exists before rendering Card.Title */}
            {courtData.name && <Card.Title>{courtData.name}</Card.Title>}
            {/* Check if slot exists before rendering Card.Text */}
            {slot && slot.name && <Card.Text>{slot.name}</Card.Text>}
            {/* Check if slot exists before rendering Card.Text */}
            {slot && slot.date && <Card.Text>{slot.date}</Card.Text>}
            {/* Check if courtData.location exists before rendering Card.Text */}
            {courtData.location && <Card.Text>{courtData.location}</Card.Text>}
            {/* Check if courtData.address exists before rendering Card.Text */}
            {courtData.address && <Card.Text>{courtData.address}</Card.Text>}
          </Card.Body>
        </>
      )}
    </Card>
  );
}

export default MybookingCard;
