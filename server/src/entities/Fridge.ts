import { Collection, Entity, OneToMany, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { FridgeIngredient } from "./FridgeIngredient";
import { User } from "./User";

@Entity()
export class Fridge {

  @PrimaryKey()
  id!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name!: string;

  @OneToMany(() => FridgeIngredient, ingredient => ingredient.ingredient)
  fridgeIngredients: Collection<FridgeIngredient> = new Collection<FridgeIngredient>(this);

  @OneToOne(() => User, user => user.fridge, {
    onDelete: "CASCADE",
  })
  owner!: User;
}