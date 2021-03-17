const assert = require('assert');
const Hasher = require('../internal/engines/hash_engine.js');
const Creature = require('../internal/creatures/creature/creature.js');


// CREATURE SECTION
describe('Creature', () => {
    describe("Creation", () => {
        let creature1 = new Creature();
        let creature2 = new Creature();
        // gender is setted here
        creature1.gender = 0;
        creature2.gender = 1;
        creature1.name = "Maria";
        creature2.name = "Bob";


        it("Should have no name", () => {
            let child = new Creature(creature1, creature2);

            assert.strictEqual(child.getName(), "");
        });
        it("Should be named Bobby", () => {
            let child = new Creature(creature1, creature2);
            child.setName("Bobby");

            assert.strictEqual(child.getName(), "Bobby");
        });
        it("Shouldn't be renamed as Babby", () => {
            let child = new Creature(creature1, creature2);
            child.setName("Bobby");
            child.setName("Babby");

            assert.strictEqual(child.getName(), "Bobby");
        });
        it("Sould have his parents setted", () => {
            let child = new Creature(creature1, creature2);

            assert.strictEqual(typeof(child.parents.mother), "object");
            assert.strictEqual(typeof(child.parents.father), "object");
            assert.strictEqual(child.parents.mother.gender, 0);
            assert.strictEqual(child.parents.mother.name, "Maria");
            assert.strictEqual(child.parents.father.gender, 1);
            assert.strictEqual(child.parents.father.name, "Bob");
        });
        it("Should have a gender", () => {
            for (let x = 0; x < 10; x++) {
                let child = new Creature(creature1, creature2);

                assert.strictEqual(child.gender == 0 || child.gender == 1, true);
            }
        });
    });
});

describe("Hasher", () => {
    describe("Generation", () => {
        let hasher = new Hasher();

        it("Should length 40", () => {
            const result = hasher.create("Hello");
            assert.strictEqual(result.length, 40);
        });
        it("Should be the same with 40- same inputs", () => {
            const result1 = hasher.create("Hello");
            const result2 = hasher.create("Hello");
            assert.strictEqual(result1, result2);
        });
        it("Shouldn't be the same with 40- different inputs", () => {
            let inputs1 = ["test", "temse", "feisobfe", "feiso4bn", "fnisoen"];
            let inputs2 = ["EVAVA", "fea5", "vaersrth", "fwg56rsg", "fsfr4s"];

            for (let x = 0; x < 5; x++) {
                const result1 = hasher.create(inputs1[x]);
                const result2 = hasher.create(inputs2[x]);
                assert.notStrictEqual(result1, result2);
            }
        });
        it("Should be the same with 40+ same inputs", () => {
            const input = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
            const result1 = hasher.create(input);
            const result2 = hasher.create(input);

            assert.strictEqual(result1, result2);
        });
        it("Shouldn't be the same with 40+ differents inputs", () => {
            const input1 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
            const input2 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbb";
            const result1 = hasher.create(input1);
            const result2 = hasher.create(input2);

            assert.notStrictEqual(result1, result2);
        });
    });
});