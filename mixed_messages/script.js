all_messages = {
    sun_sign: ["libra", "virgo", "gemini"],
    prediction: ["win", "lose", "be alive"]
}

function mix_it(all_messages, random){
    ran_num = Math.floor(Math.random() * 3)
    switch (random){
        case "sun_sign": console.log(`Your sun sign is ${all_messages.sun_sign[ran_num]}`)
                         break
        case "prediction": console.log(`You will  ${all_messages.prediction[ran_num]}`)
                           break
        default: console.log('There is not enough info.')
    }
}

const keys = Object.keys(all_messages)
const random = keys[Math.floor(Math.random() * keys.length)]
mix_it(all_messages, random)