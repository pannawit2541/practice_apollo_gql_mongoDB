import { Dog } from "./models/dog";

export const resolvers = {
    Query : {
        hello: () => "hello",
        dogs:() => Dog.find()
    },
    Mutation:{
        createDog : async(_,{name}) => {
            const puppy = new Dog({ name});
            await puppy.save();
            return puppy
        }
    }
}

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
