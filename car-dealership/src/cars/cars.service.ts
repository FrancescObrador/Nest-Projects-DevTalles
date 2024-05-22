import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import { Car } from './interfaces/cars.interfaces';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Coroloa'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]

    public findAll(){
        return this.cars
    }

    public findOne(id: string){
        const car = this.cars.find( car => car.id === id)

        if(!car) throw new NotFoundException(`id ${id} not found`)

        return car
    }

    public createCar(newCar: CreateCarDTO){
        const car: Car = {id: uuid(), ...newCar}
        this.cars.push(car)
        return car
    }

    public update(id: string, updateCarDto: UpdateCarDTO){
        let carDB = this.findOne(id)

        if(updateCarDto.id && updateCarDto.id !== id){
            throw new BadRequestException('Car id in body is not valid')
        }

        this.cars = this.cars.map( car => {
            if(car.id === id){
                carDB = {
                    ...car,
                    ...updateCarDto,
                    id,
                }
                return carDB
            }
            return car
        })
        return carDB
    }

    public delete(id: string){
        const car = this.findOne(id)
        this.cars = this.cars.filter(car => car.id !== id)
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars
    }

}
