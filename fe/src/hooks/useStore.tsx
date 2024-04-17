import { useCallback } from 'react';
import { Store } from '../types/store';
import { useQueryClient } from '@tanstack/react-query';


export const STORE_KEY = '/stores';
export const CURRENT_STORE_KEY = "/current-store";

const useStore = () => {
    const queryClient = useQueryClient();

    const initializeStores = useCallback((stores: Store[]) => {
      queryClient.setQueryData([STORE_KEY], stores);
    }, []);

    const setCurrentStore = useCallback((store: Store) => {
      queryClient.setQueryData([CURRENT_STORE_KEY], store);
    }, []);

    const clearCurrentStore = useCallback(() => {
      queryClient.setQueryData([CURRENT_STORE_KEY], null);
    }, []);

  return {
    initializeStores,
    setCurrentStore,
    clearCurrentStore,
  };
}

export default useStore;