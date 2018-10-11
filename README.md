This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# commit-countdown-challenge
Predictive countdown timer.

#### Setup

After cloning the repo, type the following command in the Terminal:

```
yarn install
```

After installation is complete, start the app by typing

```
yarn start
```

The app will load at `http://localhost:3000`.

#### Features

* Countdown timer gets list of commits from API and predicts when the 2000th commit will be.
* The current prediction is displayed above the timer.
* Click the 'Commit' button to add the current timestamp to the list of commits.  The prediction will be recalculated and the timer will start counting down to the new time.
* If the timer reaches 0, it stops.
