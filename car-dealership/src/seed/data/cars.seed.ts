import { Car } from 'src/cars/interfaces/cars.interfaces';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Camry'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Accord'
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Mustang'
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'F-150'
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Malibu'
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Silverado'
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Altima'
    },
    {
        id: uuid(),
        brand: 'Nissan',
        model: 'Rogue'
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: '3 Series'
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: 'X5'
    },
    {
        id: uuid(),
        brand: 'Mercedes-Benz',
        model: 'C-Class'
    },
    {
        id: uuid(),
        brand: 'Mercedes-Benz',
        model: 'GLE'
    },
    {
        id: uuid(),
        brand: 'Audi',
        model: 'A4'
    },
    {
        id: uuid(),
        brand: 'Audi',
        model: 'Q5'
    },
    {
        id: uuid(),
        brand: 'Tesla',
        model: 'Model 3'
    },
    {
        id: uuid(),
        brand: 'Tesla',
        model: 'Model S'
    },
    {
        id: uuid(),
        brand: 'Hyundai',
        model: 'Elantra'
    },
    {
        id: uuid(),
        brand: 'Hyundai',
        model: 'Santa Fe'
    }
];
