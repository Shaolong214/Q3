// src/hooks/useFetchCategories.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from '../actions/categoryActions';

const useFetchCategories = (shouldFetch) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldFetch) {
      const fetchCategories = async () => {
        try {
          const response = await axios.get('http://localhost:8080/categories');
          dispatch(fetchCategoriesSuccess(response.data));
        } catch (error) {
          dispatch(fetchCategoriesFailure(error.message));
        }
      };

      fetchCategories();
    }
  }, [shouldFetch, dispatch]);
};

export default useFetchCategories;
