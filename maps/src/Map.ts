// Enable dependency inversion with an interface by
// providing instructions to other types on what they need to
// implement in order to be used as an argument to addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class Map {
  private map: google.maps.Map;

  constructor(elementId: string) {
    this.map = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: { lat: 33, lng: -112 },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({ map: this.map, position: mappable.location });
  }
}
