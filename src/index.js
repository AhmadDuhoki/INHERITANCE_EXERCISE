class Animal {
  constructor(
    picture,
    meatEater,
    hunger,
    boundaries,
    location,
    sound,
    whatTheyEat
  ) {
    this.picture = picture;
    this.meatEater = meatEater;
    this.hunger = hunger;
    this.boundaries = boundaries;
    this.location = location;
    this.sound = sound;
    this.whatTheyEat = whatTheyEat;
  }
  makeNoise() {
    console.log("I make animal noise.");
  }
  eat() {
    console.log("I eat like an animal");
  }
  sleep() {
    console.log("I sleep like an animal");
  }
  roam() {
    console.log(
      "I dont mind. I roam whenever I want but within " +
        this.boundaries +
        " bondaries."
    );
  }
}

class Hippo extends Animal {
  makeNoise() {
    console.log("I groan, grunt, roar and make loud wheezing sounds");
  }
  eat() {
    console.log(
      "I can open my mouth up wide. I use my lips to pull up grass and use my teeth to tear it up before swallowing."
    );
  }
  description() {
    console.log(
      "I am a plant-eater. I get hungry 60% of the time. I live near lakes, rivers, anywhere that has water"
    );
  }
}

let hippo = new Hippo(
  "hippo.jpg",
  false,
  50,
  "500 x 500 meters",
  "lakes, rivers, anywhere that has water"
);
console.log(hippo);
hippo.roam();

class Feline extends Animal {
  roam() {
    console.log("We tend to avoid others of our own kind");
  }
  description() {
    console.log(`I am a member of the cat family.`);
  }
}

class Canine extends Animal {
  roam() {
    console.log(`We tend to move in packs`);
  }
  description() {
    console.log(`I am a member of the cat family.`);
  }
}

class Tiger extends Feline {
  makeNoise() {
    console.log(`the tiger's sound is ${this.sound}`);
  }
  eat() {
    console.log(`the tiger eats ${this.whatTheyEat}`);
  }
}

class Cat extends Feline {
  makeNoise() {
    console.log(`the cat's sound is ${this.sound}`);
  }
  eat() {
    console.log(`the cat eats ${this.whatTheyEat}`);
  }
}

class Lion extends Feline {
  makeNoise() {
    console.log(`the Lion's sound ${this.sound}`);
  }
  eat() {
    console.log(`I eat ${this.whatTheyEat} because I'm a meat eater`);
  }
}

class Wolf extends Canine {
  makeNoise() {
    console.log(`the Wolf's sound is ${this.sound}`);
  }
  eat() {
    console.log(`the Wolf eats ${this.whatTheyEat}`);
  }
}

class Dog extends Canine {
  makeNoise() {
    console.log(`the Dog's sound is ${this.sound}`);
  }
  eat() {
    console.log(`the Dog eats ${this.whatTheyEat}`);
  }
}

let lion = new Lion(
  "lion.jpg",
  true,
  50,
  "500 x 500 meters",
  "we roam in africa",
  "roar 🦁",
  "other animals"
);

console.log(lion);
lion.roam();
lion.sleep();
lion.description();
lion.makeNoise();
lion.eat();

let tiger = new Tiger(
  "tiger.jpg",
  false,
  60,
  "400 x 400 meters",
  "lakes, rivers, anywhere that has water",
  "tiger sound 🐯",
  "other animals"
);
console.log(tiger);
tiger.roam();
tiger.sleep();
tiger.description();
tiger.makeNoise();
tiger.eat();

let cat = new Cat(
  "cat.jpg",
  false,
  60,
  "400 x 400 meters",
  "lakes, rivers, anywhere that has water",
  "meow",
  "fish"
);
console.log(cat);
cat.roam();
cat.sleep();
cat.description();
cat.makeNoise();
cat.eat();

let wolf = new Wolf(
  "wolf.jpg",
  false,
  60,
  "400 x 400 meters",
  "lakes, rivers, anywhere that has water",
  "wolf sound 🐺",
  "wolf food"
);
console.log(wolf);
wolf.roam();
wolf.sleep();
wolf.description();
wolf.makeNoise();
wolf.eat();

let dog = new Dog(
  "dog.jpg",
  false,
  60,
  "400 x 400 meters",
  "lakes, rivers, anywhere that has water",
  "bark",
  "dog food 🐶"
);
console.log(dog);
dog.roam();
dog.sleep();
dog.description();
dog.makeNoise();
dog.eat();
