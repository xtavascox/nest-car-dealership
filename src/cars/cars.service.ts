import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuid } from "uuid";

import { CreateCarDto, UpdateCarDto } from "./dto";
import { CarInterface } from "./interfaces/car.interface";

@Injectable()
export class CarsService {
  private cars: CarInterface[] = [];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find(car => car.id === id);
    if (!car) throw new NotFoundException(`Car with id ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: CarInterface = {
      id: uuid(),
      ...createCarDto
    };
    this.cars.push(newCar);
    console.log(" Nuevo elemento creado \n", newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    console.log(updateCarDto);

    let carDB = this.findById(id);

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const deleteCar = this.findById(id);
    this.cars = this.cars.filter(car => car.id !== id);
    return deleteCar;
  }

  fillCarsWithSeedData(cars: CarInterface[]) {
    this.cars = cars;
  }
}
