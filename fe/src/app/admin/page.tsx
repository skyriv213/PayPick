"use client"

import * as styles from './page.css';
import { useState } from 'react';
import { reportData } from '@/types/store';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { baseUrl } from '@/hooks/api';

interface sendDataProps {
  method: string;
  reportId: number;
  data?: Partial<reportData>;
}

const sendData = async ({method, reportId, data}:sendDataProps) => {
  const url = `${baseUrl}/admin/${reportId}`;
  
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

  const [stores, setStores] = useState<reportData[]>([
    {
      reportId: 1,
      errorType : '기타',
      errorContent : '기타 클릭시 입력한 텍스트 나오는 칸',
      id: 1,
      name: "Store 1",
      middleCategory: "Mobile Phones",
      lat: 37.7749,
      lng: 122.4194,
      address: "123 Main St, San Francisco, CA",
      paywayList: ['애플페이']
    },
    {
      reportId: 2,
      errorType : '애플페이 결제를 지원하지 않는 매장이에요',
      errorContent : '기타 클릭시 입력한 텍스트 나오는 칸',
      id: 2,
      name: "Store 2",
      middleCategory: "Vegetables",
      lat: 40.7128,
      lng: 74.0060,
      address: "456 Market St, New York, NY",
      paywayList: []
    },
    {
      reportId: 3,
      errorType : '기타',
      errorContent : '기타 클릭시 입력한 텍스트 나오는 칸이어부이ㅓㅂ주',
      id: 3,
      name: "",
      middleCategory: "Men's Wear",
      lat: 34.0522,
      lng: 118.2437,
      address: "789 Sunset Blvd, Los Angeles, CA",
      paywayList: []
    },
    {
      reportId: 4,
      errorType : '애플페이 결제를 지원하지 않는 매장이에요',
      errorContent : '기타 클릭시 입력한 텍스트 나오는 칸이어부이ㅓㅂ주',
      id: 4,
      name: "Store 4",
      middleCategory: "Furniture",
      lat: 41.8781,
      lng: 87.6298,
      address: "101 State St, Chicago, IL",
      paywayList: []
    },
    {
      reportId: 5,
      errorType : '애플페이 결제를 지원하지 않는 기타이에요',
      errorContent : '기타 클릭시 입력한 텍스트 나오는 나오는 칸이어부이ㅓㅂ주',
      id: 5,
      name: "Store 5",
      middleCategory: "Equipment",
      lat: 29.7604,
      lng: 95.3698,
      address: "202 Bay Area Blvd, Houston, TX",
      paywayList: []
    }
  ]);

  const handleInputChange = (index: number, field: string, value: any) => {
    const newStores = [...stores];
    newStores[index] = { ...newStores[index], [field]: value };
    setStores(newStores);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: sendData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
    },
  });

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
              placeholder="Enter text"
              onChange={(e) => handleInputChange(index, 'name', (e.target.value))}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.middleCategory}
              placeholder="Enter text"
              onChange={(e) => handleInputChange(index, 'middleCategory', e.target.value)}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.lat}
              placeholder="Enter text"
              onChange={(e) => handleInputChange(index, 'lat', (e.target.value))}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.lng}
              placeholder="Enter text"
              onChange={(e) => handleInputChange(index, 'lng', (e.target.value))}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.address}
              placeholder="Enter text"
              onChange={(e) => handleInputChange(index, 'address', e.target.value)}
            />
            <input
              className={styles.inputBox}
              type="text"
              value={store.paywayList}
              placeholder="Enter text"
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
                <button className={styles.dataButton} onClick={() => mutation.mutate({ method: 'PATCH', reportId: store.reportId })}>수정</button>
                <button className={styles.dataButton} onClick={() => mutation.mutate({ method: 'POST', reportId: store.reportId })}>새로 등록</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default Page;