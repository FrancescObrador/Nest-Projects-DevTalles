import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {

    constructor( private carsService : CarsService){

    }

    @Get()
    getAllCars(){
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id){
        return this.carsService.findOne(id)
    }

    @Post()
    CreateCar(@Body() createCarDto: CreateCarDTO){
        return this.carsService.createCar(createCarDto)
    }

    @Patch('/:id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateCarDTO){
        return this.carsService.update(id, body)
    }

    @Delete('/:id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        this.carsService.delete(id)
        return this.carsService.findAll()
    }
}
  