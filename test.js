 /**
         * Please use TypeScript/JS to answer question
         * Welcome to answer with unit testing code if you can
         *
         * After you finish coding, please push to your GitHub account and share the link with us.
         */
        
        // Please write a function to reverse the following nested input value into output value
        
        // Input:
        let inputValue = {
            hired: {
                be: {
                    to: {
                        deserve: 'I'
                    }
                }
            },
        };

        // key=hired, {
        //         be: {
        //             to: {
        //                 deserve: 'I'
        //             }
        //         }
        //     }

        // key=be, {
        //             to: {
        //                 deserve: 'I'
        //             }
        //         }

        // key=to, {
        //                 deserve: 'I'
        //             }

        // key=deserve, I
        
        // // Output:
        // let outputValue = {
        //     I: {
        //         deserve: {
        //             to: {
        //                 be: 'hired'
        //             }
        //         }
        //     }
        // };
        let outputValue = reverse(inputValue);
        console.log(outputValue);

        function reverse(inputValue) {
            
            function getObjectKeys(inputValue) {
                if(
                    typeof inputValue == 'object' &&
                    Object.keys(inputValue).length > 0
                ) {
                    let key = Object.keys(inputValue)[0];
                    return [key, ...getObjectKeys(inputValue[key])];
                } else {
                    return [inputValue];
                }
            }

            let objectKeys = getObjectKeys(inputValue);
            let [value, key, ...rest] = objectKeys;
            let obj = {[key]:value};

            let outputValue = rest.reduce((accumulator, currentValue) => {
                return {
                    [currentValue]: accumulator
                };
            }, obj)

            return outputValue;
        }
