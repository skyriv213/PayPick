"use client"

import Script from 'next/script';
import { useState, useEffect } from 'react';
import * as styles from './_map.css'

function Map() {
    const [isScriptReady, setIsScriptReady] = useState(false);

    useEffect(() => {
        if (!isScriptReady) {
            return;
        }
        const mapOptions = {
            center: new naver.maps.LatLng(37.5602411, 126.98789549),
            zoom: 15,
            scaleControl: false,
            mapDataControl: false,
            minZoom: 9,
            logoControlOptions: {
            position: naver.maps.Position.BOTTOM_LEFT,
         }

        };

        let map = new naver.maps.Map('map', mapOptions);
    }, [isScriptReady]);

    const naverMapApi = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_ID}`;

    return (
        <>
            <Script strategy='afterInteractive' src={naverMapApi} onReady={() => setIsScriptReady(true)} />
            <div id="map" className={styles.mapSize}></div>
        </>
    );
}

export default Map;

// "use client"

// import Script from "next/script";
// import { useEffect, useRef } from "react";
// import * as styles from './_app.css'

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
//     onLoad?: (map: NaverMap) => void;
// };

// const Map = ({
//     mapId = 'map',
//     initialCenter = INITIAL_CENTER,
//     initialZoom = INITIAL_ZOOM,
//     onLoad,
// }: Props) => {
//     const mapRef = useRef<NaverMap | null>(null);

//     const initializeMap = () => {
//         const mapOptions = {
//             center: new window.naver.maps.LatLng(...initialCenter),
//             zoom: initialZoom,
//             minZoom: 9,
//             scaleControl: false,
//             mapDataControl: false,
//             logoControlOptions: {
//                 position: naver.maps.Position.BOTTOM_LEFT,
//             },
//         };
//         //새로운 네이버 맵 인스턴스 생성 
//         const map = new window.naver.maps.Map(mapId, mapOptions);
//         mapRef.current = map;

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
//             <div id = {mapId} className = {styles.map}/>
//         </>
//     )
// }

// export default Map;