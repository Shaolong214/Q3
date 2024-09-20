import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from '../actions/categoryActions';

/**
 * Custom Hook: useFetchCategories
 * Returns a function to fetch categories on demand.
 */
const useFetchCategories = () => {
  const dispatch = useDispatch();

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080/categories');
      dispatch(fetchCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message));
    }
  }, [dispatch]);

  return fetchCategories;
};

export default useFetchCategories;
