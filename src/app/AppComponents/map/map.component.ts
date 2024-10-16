import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  showMap = false;
  center!: google.maps.LatLngLiteral;
  zoom = 12;
  selectedLocation: google.maps.LatLngLiteral | null = null;
  searchInput: string = '';
  autocompleteService: google.maps.places.AutocompleteService | null = null;
  autocompleteResults: google.maps.places.AutocompletePrediction[] = [];

  constructor() {
    // Initialize the Google Places Autocomplete service
    this.autocompleteService = new google.maps.places.AutocompleteService();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleMap() {
    this.showMap = !this.showMap;

    if (this.showMap) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.selectedLocation = this.center; // Set the initial selected location to the current location
          },
          (error) => {
            console.error('Error getting location', error);
            this.center = { lat: 40.73061, lng: -73.935242 }; // Default location (New York)
          }
        );
      }
    }
  }

  setLocation(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.selectedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.center = this.selectedLocation; // Center map on selected location
      this.searchInput = ''; // Clear the search input
      this.autocompleteResults = []; // Clear the search results
    }
  }

  searchLocation() {
    if (this.searchInput) {
      this.autocompleteService?.getPlacePredictions(
        { input: this.searchInput },
        (predictions, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            this.autocompleteResults = predictions;
          } else {
            this.autocompleteResults = [];
          }
        }
      );
    } else {
      this.autocompleteResults = [];
    }
  }

  selectLocation(place: google.maps.places.AutocompletePrediction) {
    if (place.place_id) { // Check if place_id is available
      const placeService = new google.maps.places.PlacesService(document.createElement('div'));
      placeService.getDetails({ placeId: place.place_id }, (result, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && result?.geometry?.location) {
          this.selectedLocation = {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          };
          this.center = this.selectedLocation; // Center map on selected location
          this.autocompleteResults = []; // Clear results
          this.searchInput = ''; // Clear the input
        }
      });
    }
  }
}
