let raceNumber = Math.floor(Math.random() * 1000);
let runnerIsEarly = true;
let runnersAge = 18;

if (runnersAge => 18 && runnerIsEarly === true) {
  raceNumber += 1000
    };

if (runnersAge > 18 && runnerIsEarly === true) {
    console.log(
      `For runners over 18 who registered early, you will race at 09:30 and your race number is ${raceNumber}.`
      );
    } else if (runnersAge > 18 && runnerIsEarly === false) {
      console.log(
        `For runners over 18 who did not register early, you will race at 11:00 and your race number is ${raceNumber}.`
      );
    } else if (runnersAge < 18) {
    console.log(
      `Youth registrants run at 12:30 pm /(regardless of registration/) and your race number is ${raceNumber}.`
      );
    } else if (runnersAge === 18) {
      console.log(
        `Runners 18 years of age must see the registration desk.`
      );
    };
