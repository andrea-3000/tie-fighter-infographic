// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "JEDI-D YOU KNOW?",
        "main":    "<p>Mostly T.I.E.-related trivia...some T.rI.E. or False, if you will.</p>",
        "results": "congrat ur a star",
        "level1":  "Force-less",
        "level2":  "Padawan",
        "level3":  "Jedi Master",
        "level4":  "Sith Lord",
        "level5":  "ANAKIN SKYWALKER AT PEAK/...Rey??? (watch the trailer)" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The roaring sound for TIE Fighters was created by combining an elephant scream and the noise of a car driving on a wet road",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false}
            ],
            "correct": "<p><span>That's right!</span> Amazing.</p>",
            "incorrect": "<p><span>Uhh no.</span> Noob.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Lucasfilms overproduced the amount of T.I.E. Fighter models for the first Star Wars film.",
            "a": [
                {"option": "true",           "correct": false},
                {"option": "false",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Holy Smokes!</span> Your IQ must be like...1000.</p>",
            "incorrect": "<p><span>Nope.</span> No one has money to overproduce anything, <em>especially</em> Lucasfilms in the early 1970s.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "TIE fighters were originally meant to be blue.",
            "a": [
                {"option": "true",    "correct": true},
                {"option": "false",   "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Maui wowie!</span> They were colored grey because to make it easier to film against a bluescreen.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 4
            "q": "There is a 7 minute short film about a T.I.E. fighter.",
            "a": [
                {"option": "true",    "correct": true},
                {"option": "false",   "correct": false} // no comma here
            ],
            "correct": '<p><span></span> I spent a million years on this project, so naturally someone one-upped me and spent four years on theirs! It is cool watch it <a target="_blank" href="https://www.youtube.com/watch?v=PN_CP4SuoTU">here</a>.</>',
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "What was Luke trying to buy at Tashi station?",
            "a": [
                {"option": "POWER CONVERTERS!!!",                           "correct": true},
                {"option": "SOMETHING OTHER THAN POWER CONVERTERS!!!",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>Err...</span> I wasn't trying to trick you there.</p>" // no comma here
        } // no comma here
    ]
};
