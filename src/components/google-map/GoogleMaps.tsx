'use client';

import React, { useEffect, useRef, useState } from "react";
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap = ({ destination }: { destination: string }) => {
    
    const mapRef = useRef<HTMLDivElement>(null);
    const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null);
    const [directionsService, setDirectionsService] = useState<any>(null);
    const [directionsRenderer, setDirectionsRenderer] = useState<any>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [userMarker, setUserMarker] = useState<google.maps.Marker | null>(null);
    const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);

    //Retrieves the user's current location using the Geolocation API.
    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        };

        getLocation();
    }, []);

    // Initializes the Google Map, Directions Service, Directions Renderer, User Marker, and Info Window when the user's location changes.
    useEffect(() => {
        const initializeMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: 'weekly',
            });

            const google = await loader.load();
            if (!userLocation || !mapRef.current) return;

            const mapOptions: google.maps.MapOptions = {
                center: userLocation,
                zoom: 15,
            };

            const newMap = new google.maps.Map(mapRef.current, mapOptions);

            setMap(newMap);
            setDirectionsService(new google.maps.DirectionsService());
            setDirectionsRenderer(new google.maps.DirectionsRenderer());
            setUserMarker(new google.maps.Marker({
                position: userLocation,
                map: newMap,
                title: "My Location"
            }));
            setInfoWindow(new google.maps.InfoWindow());
        };

        initializeMap();
    }, [userLocation]);

    
    // Calculates and displays directions on the map when the destination, directions service, directions renderer, map, user location, or info window changes.
    useEffect(() => {
        if (!directionsService || !directionsRenderer || !map || !destination || !userLocation || !infoWindow) return;

        directionsService.route(
            {
                origin: userLocation,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (response: any, status: any) => {
                if (status === 'OK') {
                    // Display the directions on the map
                    directionsRenderer.setDirections(response);
                    directionsRenderer.setMap(map);

                    const route = response.routes[0];
                    const path = route.overview_path;
                    const totalDistance = route.legs.reduce((acc: number, leg: any) => acc + leg.distance.value, 0);
                    const halfDistance = totalDistance / 2;
                    let distanceSoFar = 0;
                    let midpoint: google.maps.LatLng | null = null;

                    // Find the midpoint along the path to display the distance popup at the midpoint of the route
                    for (let i = 0; i < path.length - 1; i++) {
                        const segmentStart = path[i];
                        const segmentEnd = path[i + 1];
                        const segmentDistance = google.maps.geometry.spherical.computeDistanceBetween(segmentStart, segmentEnd);

                        if (distanceSoFar + segmentDistance >= halfDistance) {
                            const remainingDistance = halfDistance - distanceSoFar;
                            const ratio = remainingDistance / segmentDistance;
                            midpoint = new google.maps.LatLng(
                                segmentStart.lat() + (segmentEnd.lat() - segmentStart.lat()) * ratio,
                                segmentStart.lng() + (segmentEnd.lng() - segmentStart.lng()) * ratio
                            );
                            break;
                        }

                        distanceSoFar += segmentDistance;
                    }

                    if (midpoint) {
                        // Display the distance popup at the midpoint of the route
                        const kmDistance = (totalDistance / 1000).toFixed(2);
                        const content = `Distance: ${kmDistance} km`;

                        infoWindow.setContent(content);
                        infoWindow.setPosition(midpoint);
                        infoWindow.open(map);
                    } else {
                        window.alert('Unable to find midpoint along the route.');
                    }
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            }
        );
    }, [destination, directionsService, directionsRenderer, map, userLocation, infoWindow]);

    return (
        <div>
            <div className="h-[350px] rounded-lg" ref={mapRef}></div>
        </div>
    );
};

export default GoogleMap;
