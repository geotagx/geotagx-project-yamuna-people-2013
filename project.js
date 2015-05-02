// Run the application.
geotagx.task.run("yamuna_people", function(question, answer){
    switch (question){
        case 1: // Can you see people in the photo?
            if (answer === "Yes")
                geotagx.task.showNextQuestion();
            else
                geotagx.task.finish();
            break;
        case 2: // Are they ...?
        case 3: // What are they doing?
            geotagx.task.showNextQuestion();
        default:
            break;
    }
});
