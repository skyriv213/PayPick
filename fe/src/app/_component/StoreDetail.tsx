"use client"

// import React, { ReactNode } from "react";
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { Coordinates, SvgIcon } from "@/types/map";
import React,  { useState, useEffect, ReactNode } from 'react';
import * as styles from './StoreDetail.css'


  

  

  // async function getStore() {
  //   const res = await fetch(`https://localhost:8443/store/3`)
    
  //   if(!res.ok) {
  //     throw new Error('Failed fetch data');
  //   }
  //   return await res.json();
  // }

  // const queryClient = new QueryClient();
  // const dehydratedState = dehydrate(queryClient)
  // const { data, error, isLoading } = useQuery({ queryKey: ["get-store"], queryFn: getStore });
  // const { data } = await queryClient.fetchQuery({queryKey: ["get-store"], queryFn: getStore });
  import Modal from './Modal';



export default function StoreDetail() {

  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://localhost:8443/store/3');
        const data = await res.json();
        setStoreData(data);
        console.log(data);
        
      } catch (error) {
        console.error(error);
        
      }
    };

    fetchData();
  }, []);

  const [open, setOpen] = useState(true)

  const onClickButton = () => {
    setOpen(false);
  };

  const data = {
    "id": 3,
    "storeName": "생곡메밀막국수",
    "majorCategory": "음식",
    "middleCategory": "국수/칼국수",
    "storeAddress": "경기도 화성시 동탄지성로 222",
    "paywayList": []
  }

  type Store = {
    id: number;
    storeName: string;
    majorCategory: string;
    middleCategory: string;
    storeAddress: string;
    paywayList: string | string[]
  };
  if (data) {
    const {id, storeName, majorCategory, middleCategory, storeAddress, paywayList} = data as Store; 
  
    return (
      <Modal open={open}>
        <div className={styles.displayModal}>
        <button onClick={onClickButton}>Close</button>
          {/* <HydrationBoundary state={dehydratedState}> */}
            <div>{id}</div>
            <div >{storeName}</div>
            <div>{majorCategory}</div>
            <div>{middleCategory}</div>
            <div>{storeAddress}</div>
            <div>{paywayList}</div>
          {/* </HydrationBoundary> */}
        </div>
      </Modal>
    )
  }
}

