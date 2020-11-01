import { User } from "./User";
import { Company } from "./Company";

export class Map {
  private map: google.maps.Map;

  constructor(elementId: string) {
    this.map = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: { lat: 33, lng: -112 },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({ map: this.map, position: user.location });
  }
}
