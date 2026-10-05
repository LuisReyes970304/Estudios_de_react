
const person = {
    name: "Tony",
    age: 45,
    key: "Ironman"
}

const {name, age, key} = person
//En la desestrucutración de objetos, el orden en que lo hagas, no afecta el resultado.
/**
 * const {name, key, age} = person
 */
//El ejemplo mostrado igual va a funcionar, aunque el orden sea distinto. 

console.log({name, age, key})

interface Hero {
    name: string;
    age: number;
    key: string;
    //rank: string | undefined;
    rank?: string;
}

const buildContext = ({key, name, age, rank}: Hero) => {    
    return {
        keyName: key,
        user: {
            userName: name,
            age: age,
        },
        rank: rank
    };
};

const {keyName, rank, user: {userName}} = buildContext(person);
console.log({keyName, rank, userName});
