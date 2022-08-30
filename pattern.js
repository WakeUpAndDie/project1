function fakeAPI(){
    return{
        entries: [
            {
                user_name: 'Александр',
                email_address: 'some@site.com',
                ID: 'уникальный id',
            },
            {
                user_name: 'Мария',
                email_address: 'someother@site.com',
                ID: 'другой уникальный id',
            },
        ],
    }
}
//Вверху данные которые пришли с бэкэнд

// должны быть для фронт

const wantedResponse = [{
    userName: 'Александр',
    email: 'some@site.com',
    id: 'уникальный id',
}, {
    user_name: 'Мария',
    email: 'someother@site.com',
    id: 'другой уникальный id',
}];

function responseToWantedAdapter(response) {
    return response.entries.map((entry) => ({
        userName: entry.user_name,
        email: entry.email_address,
        id: entry.ID,
    }))
};

const response = fakeAPI()
const compatibleResponse = responseToWantedAdapter(response)

// паттерн фасад
class CoffeeMachine {   
    turnOn() {}   
    getWaterLevel() {}   
    getWater() {}   
    turnOnHeater() {}  
    turnOffHeater() {}   
    getTemperature() {}
}

const machine = new CoffeeMachine()

function heatWater (){
    machine.turnOn()

    while (machine.getWaterLevel() <= 1000 ){
        machine.getWater()
    }

    machine.turnOnHeater()
    if (machine.getTemperature() >= 90) {
        machine.turnOffHeater()
    }
}

heatWater()