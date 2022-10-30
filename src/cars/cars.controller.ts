import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto, UpdateCarDto } from "./dto";

@Controller("cars")
// @UsePipes(ValidationPipe)
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) {
  }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(":id")
  getCarById(@Param("id", ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    console.log("\n Request Body: \n", createCarDto, "\n");

    return this.carsService.create(createCarDto);
  }

  @Patch(":id")
  updateCar(@Param("id", ParseUUIDPipe) id: string,
            @Body() updateCarDto: UpdateCarDto) {
    console.log("info de la actualizacion", { id, updateCarDto });
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(":id")
  deleteCar(@Param("id", ParseUUIDPipe) id: string) {
    console.log("id del elemento a eliminar", { id });
    return this.carsService.delete(id);
  }

}
