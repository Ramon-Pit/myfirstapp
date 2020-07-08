
export default class Service {
    
    cars = [
        {
            id: 1,
            name: "Mercedes Benz",
            price: 118000,
            date: "05.07.2019",
            property: {
                салон: 'кожа',
                подвеска: 'многорыччажная',
                color: ["blue", "red", "green"],
                fuel: "dizel"
            }
        },
        {
            id: 2,
            name: "Lada Priora",
            price: 500,
            date: "10.10.2019",   
            property: {
                салон: 'велюр',
                подвеска: 'гавно',
                color: ["grey", "black", "white"],
                fuel: "benzin",
            }
        }
    ]

    property = [
        {
            name: 'Цвет авто',
            type: 'string',
        },
        {
            name: 'Пробег',
            type: 'number',
        }
    ]
    
    async getcars() {
        return this.cars
    }

    async getproperty() {
        return this.property
    }
}