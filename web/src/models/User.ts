import { Model, Sync, Events } from "./Model";
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
  static getInstance(
    data: UserProps = {},
    modelType: ModelType = ModelType.Database
  ): User {
    switch (modelType) {
      case ModelType.Database:
        return new User(
          new Attributes<UserProps>(data),
          new DbSync<UserProps>(resourcePath),
          new EventManager()
        );
        break;

      default:
        throw new Error(`Unsupported model type: ${modelType}`);
    }
  }

  static getCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      resourcePath,
      (data: UserProps): User => User.getInstance(data)
    );
  }

  protected constructor(
    data: Attributes<UserProps>,
    sync: Sync<UserProps>,
    events: Events
  ) {
    super(data, sync, events);
  }

  randomizeAge = (): void => {
    const randomAge = Math.round(Math.random() * 114);
    this.set({ age: randomAge });
  };
}
