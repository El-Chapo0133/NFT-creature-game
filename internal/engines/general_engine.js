


class GeneralEngine {

        salt(exponential) {
                let temp_result = Math.random() - exponential;

                return temp_result - Math.floor(temp_result); // between 0 and 1
        }
}

module.exports = GeneralEngine;