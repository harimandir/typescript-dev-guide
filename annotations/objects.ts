const profile = {
  name: "Normal",
  age: 21,
  coords: {
    lat: 33,
    lng: 112,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name: profileName }: { age: number; name: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
