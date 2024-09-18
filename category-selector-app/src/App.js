// src/App.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesRequest } from './actions/categoryActions';
import useFetchCategories from './hooks/useFetchCategories';
import CategorySelector from './components/CategorySelector';
import { Button, Row, Col } from 'antd';

const App = () => {
  const dispatch = useDispatch();
  const [useHook, setUseHook] = useState(false);

  const handleSagaFetch = () => {
    dispatch(fetchCategoriesRequest());
  };

  const handleHookFetch = () => {
    setUseHook(true);
  };

  const handleSelect = (value) => {
    alert(`Selected Category ID: ${value}`);
  };

  // Call the hook unconditionally
  useFetchCategories(useHook);

  return (
    <div style={{ padding: '50px' }}>
      <Row gutter={[16, 16]}>
        <Col>
          <Button type="primary" onClick={handleSagaFetch}>
            Fetch Categories with Redux-Saga
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={handleHookFetch}>
            Fetch Categories with Custom Hook
          </Button>
        </Col>
      </Row>
      <div style={{ marginTop: '20px', width: '300px' }}>
        <CategorySelector onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default App;
