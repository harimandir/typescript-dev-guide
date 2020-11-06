import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { DbSync } from "./DbSync";
import { EventManager } from "./EventManager";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

enum ModelType {
  Database = "db",
}

export class User extends Model<UserProps> {
  constructor(data: UserProps = {}, modelType: ModelType = ModelType.Database) {
    super();

    switch (modelType) {
      case ModelType.Database:
        this.buildModel(
          new Attributes<UserProps>(data),
          new DbSync<UserProps>("/users"),
          new EventManager()
        );
        break;

      default:
        throw new Error(`Unsupported model type: ${modelType}`);
    }
  }
}
