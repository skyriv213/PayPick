import { useCallback } from 'react';
import { Stores } from '../types/store';
import { useQueryClient } from '@tanstack/react-query';


export const STORE_KEY = '/stores';

const useStores = () => {

  // async function getStores() {
  //   const res = await fetch(`http://localhost:8080/store/3`)
  //   if(!res.ok) {
  //     throw new Error('Failed fetch data');
  //   }
  //   return await res.json();
  // }

  // const { data } = useQuery<Store>({ queryKey: ["get-store"], queryFn: getStores });

  const queryClient = useQueryClient();

  const initializeStores = useCallback((stores: Stores[]) => {
    queryClient.setQueryData([STORE_KEY], stores);
  }, [queryClient]);

  return {
    initializeStores,
  };
};
export default useStores;