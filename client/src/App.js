import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup, ToggleButton, Card, Spinner } from 'react-bootstrap';
import rabbitHoles from './data';
import './App.css';

function App() {
  const [radioValue, setRadioValue] = useState('all');
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(false);

  const radios = [
    { name: 'Surprise Me', value: 'all' },
    { name: 'Wikipedia', value: 'wiki' },
    { name: 'YouTube', value: 'youtube' },
  ];

  const fetchRabbitHole = async () => {
    setLoading(true);
    setDestination(null);

    // Simulate network delay for anticipation
    setTimeout(() => {
      let filteredList = rabbitHoles;

      if (radioValue && radioValue !== 'all') {
        filteredList = rabbitHoles.filter(item => item.type === radioValue);
      }

      if (filteredList.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredList.length);
        setDestination(filteredList[randomIndex]);
      } else {
        // Fallback or error handling if needed, though list shouldn't be empty
        console.warn("No items found for selection");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="App">
      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <Row className="mb-4 text-center">
          <Col>
            <h1 className="display-3 fw-bold text-white mb-3 text-shadow">The Rabbit Hole</h1>
            <p className="lead text-white-50">Discover the weird, the wonderful, and the obscure.</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={radioValue === radio.value ? 'light' : 'outline-light'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  className="px-4"
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Button 
              variant="danger" 
              size="lg" 
              className="px-5 py-3 rounded-pill fw-bold shadow-lg enter-btn"
              onClick={fetchRabbitHole}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Falling...
                </>
              ) : (
                'ENTER THE RABBIT HOLE'
              )}
            </Button>
          </Col>
        </Row>

        {destination && (
          <Row className="fade-in">
            <Col>
              <Card className="text-center shadow-lg border-0" style={{ maxWidth: '500px' }}>
                <Card.Header className={`text-white fw-bold ${destination.type === 'wiki' ? 'bg-secondary' : 'bg-danger'}`}>
                  {destination.type === 'wiki' ? 'Wikipedia Article' : 'YouTube Documentary'}
                </Card.Header>
                <Card.Body className="p-4">
                  <Card.Title className="display-6 mb-3">{destination.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    {destination.description}
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    href={destination.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-100 py-2 fw-bold"
                  >
                    Go to Destination
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;