let scores = [
            60, 50, 60, 58, 54, 54,          
            58, 50, 52, 54, 48, 69,       
            34, 55, 51, 52, 44, 51,       
            69, 64, 66, 55, 52, 61,       
            46, 31, 57, 52, 44, 18,         
            41, 53, 55, 61, 51, 44
        ];
        
        let highScore = 0;
        let output;

        for(x = 0;x < scores.length; x++){
            output = "Bubble solution #" + x + "scores: " + scores[x]
            console.log(output)

        if(scores[x] > highScore) {
            highScore = scores[x]
        }
        }

        console.log("Всего тестов " + scores.length)
        console.log("Максимальй тест равен: "  + highScore)


        