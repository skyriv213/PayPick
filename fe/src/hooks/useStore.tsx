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

    // const setSelectStore = useCallback((store: Store, id: string) => {
    //   queryClient.setQueryData([`store/${id}`], store);
    // }, []);

  return {
    initializeStores,
    setCurrentStore,
    clearCurrentStore,
    // setSelectStore
  };
}

export default useStore;