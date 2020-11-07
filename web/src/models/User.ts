import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { DbSync } from "./DbSync";
import { EventManager } from "./EventManager";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

enum ModelType {
  Database = "db",
}

const resourcePath = `http://localhost:3000/users`;

export class User extends Model<UserProps> {
  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      resourcePath,
      (data: UserProps): User => new User(data)
    );
  }

  constructor(data: UserProps = {}, modelType: ModelType = ModelType.Database) {
    super();

    switch (modelType) {
      case ModelType.Database:
        this.buildModel(
          new Attributes<UserProps>(data),
          new DbSync<UserProps>(resourcePath),
          new EventManager()
        );
        break;

      default:
        throw new Error(`Unsupported model type: ${modelType}`);
    }
  }

  randomizeAge = (): void => {
    const randomAge = Math.round(Math.random() * 114);
    this.set({ age: randomAge });
  };
}
