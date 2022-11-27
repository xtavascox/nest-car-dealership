import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from "uuid";

import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { Brand } from "./entities/brand.entity";
import { CarInterface } from "../cars/interfaces/car.interface";

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createAt: new Date().getTime()
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);

    this.brands = this.brands.map(brand => {

      if (brand.id === id) {
        return {
          ...brandDb,
          ...updateBrandDto,
          updateAt: new Date().getTime()
        };
      }
      return brand;
    });

  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
