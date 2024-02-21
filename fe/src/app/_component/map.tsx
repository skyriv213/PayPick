"use client"

import Script from 'next/script';
import { useState, useEffect } from 'react';
import * as styles from './map.css'



export default function Map() {
    console.log('render');
    
    
    const [isScriptReady, setIsScriptReady] = useState(false);

    useEffect(() => {
        
        if (!isScriptReady) {
            return;
        }
        const mapOptions = {
            center: new naver.maps.LatLng(37.5602411, 126.98789549),
            zoom: 15,
            minZoom: 9,
            scaleControl: false,
            mapDataControl: false,
            logoControlOptions: {
            position: naver.maps.Position.BOTTOM_LEFT,
         }

        };
        let map = new naver.maps.Map('map', mapOptions);
        let marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.5602411, 126.98789549),
            map: map,
            icon: {
                url: '/marker.svg',
                size: new naver.maps.Size(30, 45),
                origin: new naver.maps.Point(0, 0),
                scaledSize: new naver.maps.Size(30, 45),
            },
        });

        
    }, [isScriptReady]);

    return (
        <>
            <Script strategy='afterInteractive' src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_ID}`} onReady={() => setIsScriptReady(true)} />
            <div id="map" className={styles.mapSize}></div>
        </>
    );
}


// "use client"

// import Script from "next/script";
// import { useEffect, useRef } from "react";
// import * as styles from './_map.css'

// type NaverMap = naver.maps.Map;
// const INITIAL_CENTER: Coordinates = [37.5602411, 126.98789549];
// const INITIAL_ZOOM = 10;
// type Lat = number;
// type Lng = number;
// type Coordinates = [Lat, Lng];
// type Props = {
//     mapId?: string;
//     initialCenter?: Coordinates
//     initialZoom?: number;
//     onLoad?: (map: naver.maps.Map) => void;
// };

// const Map = ({
//     mapId = 'map',
//     initialCenter = INITIAL_CENTER,
//     initialZoom = INITIAL_ZOOM,
//     onLoad,
// }: Props) => {
//     console.log('render');
    
//     const mapRef = useRef<naver.maps.Map | null>(null);

//     const initializeMap = () => {
//         const mapOptions = {
//             center: new naver.maps.LatLng(37.5753411, 126.97680949),
//             zoom: 15,
//             minZoom: 9,
//             scaleControl: false,
//             mapDataControl: false,
//             logoControlOptions: {
//             position: naver.maps.Position.BOTTOM_LEFT,
//             },
//         };
//         //새로운 네이버 맵 인스턴스 생성 
//         const map = new window.naver.maps.Map('map', mapOptions);
//         mapRef.current = map;
//         let marker = new naver.maps.Marker({
//         position: new naver.maps.LatLng(37.5753411, 126.97680949),
//         map: map,
//         icon: {
//             url: '/marker.svg',
//             size: new naver.maps.Size(30, 45),
//             origin: new naver.maps.Point(0, 0),
//             scaledSize: new naver.maps.Size(30 , 45),
//         },
//     });
    

//         if (onLoad) {
//             onLoad(map);
//         }
//     };
    
//     //맵이 unmount되었을 때 맵 인스턴스 destory하기 
//     useEffect(() => {
//         return () => {
//             mapRef.current?.destroy();
//         };
//     }, []);

//     return (
//         <>
//             <Script
//                 strategy="afterInteractive"
//                 type = "text/javascript"
//                 src = {`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_ID}`}
//                 onReady = {initializeMap}
//             />
//             <div id = 'map' className={styles.mapSize}/>
//         </>
//     )
// }

// export default Map;