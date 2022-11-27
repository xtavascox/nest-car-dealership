import { v4 as uuid } from "uuid";

import { Brand } from "../../brands/entities/brand.entity";

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: "toyota",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "honda",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "jeep",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "tesla",
    createAt: new Date().getTime()
  }
];