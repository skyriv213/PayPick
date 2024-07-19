"use client"

import * as styles from './page.css';
import { useState, useEffect } from 'react';
import { reportData } from '@/types/store';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { getApi } from '@/hooks/api';

interface sendDataProps {
  method: string;
  reportId: number;
  data?: Partial<reportData>;
}

const sendData = async ({method, reportId, data}: sendDataProps) => {
  const url = `/admin/${reportId}`;
  
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const Page = () => {

  const [stores, setStores] = useState<reportData[]>([]);

  const handleInputChange = (index: number, field: string, value: any) => {
    const newStores = [...stores];
    newStores[index] = { ...newStores[index], [field]: value };
    setStores(newStores);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: sendData,
    onSuccess: (data, variables) => {
      if (variables.method === 'DELETE') {
        setStores(prevStores => prevStores.filter(store => store.reportId !== variables.reportId));
        // 삭제 요청 후 성공 시 해당 데이터를 stores에서 제거
      } else if (variables.method === 'PATCH' || variables.method === 'POST') {
        queryClient.invalidateQueries({ queryKey: ['adminStores'] });
        // 수정 또는 새로 등록 후 성공 시 데이터를 새로 받아와서 stores를 업데이트
      }
    },
    onError: (error) => {
      console.error('Mutation error:', error);
    }
  });

  async function getReport() {
    return getApi('/admin');
  }

  const { data: reports, isLoading, isError } = useQuery<reportData[]>({ 
    queryKey: [`/admin`],
    queryFn: () => getReport(),
    staleTime: 60 * 1000, // 1분
  });

  useEffect(() => {
    if (reports) {
      setStores(reports);
    }
  }, [reports]);
  
  if (isLoading) return <div className={styles.errorComponent}> Loading...</div>;
  if (isError) return <div className={styles.errorComponent}>Error loading data</div>;

  return (
    <div className={styles.container}>
      {stores?.map((store, index) => {
        return(
          <div key={store.reportId} className={styles.box}>
            {store.errorType === '기타' ? (
                <div className={styles.errorBox}>{store.errorContent}</div>
              ) : (
                <div className={styles.errorBox}>{store.errorType}</div>
              )}
            <input
              className={styles.inputBox}
              type="text"
              value={store.name}
              placeholder="상점 이름"
              onChange={(e) => handleInputChange(index, 'name', (e.target.value))}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.middleCategory}
              placeholder="middleCategory"
              onChange={(e) => handleInputChange(index, 'middleCategory', e.target.value)}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.lat}
              placeholder="lat"
              onChange={(e) => handleInputChange(index, 'lat', (e.target.value))}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.lng}
              placeholder="lng"
              onChange={(e) => handleInputChange(index, 'lng', (e.target.value))}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.address}
              placeholder="주소"
              onChange={(e) => handleInputChange(index, 'address', e.target.value)}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.paywayList}
              placeholder="페이"
              onChange={(e) => handleInputChange(index, 'paywayList', e.target.value.split(','))}
            />
            <div className={styles.buttonContainer}>
              <div className={styles.buttonBox}>
                {!store.id || store.name === ""  ? (
                  null
                ) : (
                  <button className={styles.dataButton} onClick={() => mutation.mutate({ method: 'DELETE', reportId: store.reportId })}>삭제</button>
                )}
              </div>
              <div className={styles.buttonBox}>
              {!store.lng || !store.lat  ? (
                  <button className={styles.dataButton} onClick={() => mutation.mutate({ method: 'POST', reportId: store.reportId })}>새로 등록</button>
                ) : (
                  <button className={styles.dataButton} onClick={() => mutation.mutate({ method: 'PATCH', reportId: store.reportId })}>수정</button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default Page;