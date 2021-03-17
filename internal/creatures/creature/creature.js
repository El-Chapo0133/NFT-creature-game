

class Creature {
        // private fields
        #name;


        constructor(parent1, parent2) {
                this.#name = "";
                this.gender; // 0 mean mother and 1 means father
                this.experience = 0;
                this.parents = {};
                this.stats;
                this.bornTime; 

                this.init(parent1, parent2);
        }
        init(parent1, parent2) {
                if (parent1 != undefined && parent2 != undefined) {
                        this.setParents(parent1, parent2);
                } else {
                        this.parents = {};
                }
                this.gender = Math.floor(Math.random() * 2);
        }
        setParents(parent1, parent2) {
                this.parents.mother = parent1.gender == 0 ? parent1 : parent2;
                this.parents.father = parent1.gender == 1 ? parent1 : parent2;
        }
        getName() {
                return this.#name;
        }
        setName(name) {
                if (this.#name == "") {
                        this.#name = name;
                        return 1;
                } else {
                        return -1;
                }
        }
}


module.exports = Creature;