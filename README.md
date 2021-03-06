![License](https://img.shields.io/badge/license-MIT-blue)

# RoboArm App Control

## Description

RoboArm is a web app that allows the user to remote control a robot claw from anywhere with internet connectivity.

## Table of Contents

- [Hardware](#hardware)

- [Installation](#installation)

- [Usage](#usage)

- [Link](#link)

- [Demo](#Demo)

- [License](#license)

- [Contributing](#contributing)

- [Questions](#questions)

## Hardware

- [Raspberry Pi 4B](https://amzn.to/3kPjoPe)
- Micro Sd card
- [Adafruit 16-Channel 12-bit PWM/Servo Driver - I2C interface - PCA9685](https://amzn.to/3bieEi3)
- Power supply for the Adafruit PCA9685
- [Robot claw with 6 degrees of freedom](https://amzn.to/3biSImM) (Less also work, see
  documentation to connect the correspondent channel to motor
  location).

## Installation

### Raspberry Pi Installation

- If your Raspberry Pi Operation system has not yet been installed, this is the first step, the software can be downloaded from [Raspberry Pi](https://www.raspberrypi.org/software/).
- To virtual control your Raspberry Pi you can install this [VNC](https://www.raspberrypi.org/documentation/remote-access/vnc/).
- To have access to your Raspberry Pi command line without the VNC and without your Raspberry Pi connected to a screen you can set up [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).
- [WinSCP](https://winscp.net/eng/download.php) is another useful software to have in your computer to be able to transfer files from your pc to the Raspberry Pi.
- If you do not have Node.js installed in your Raspberry Pi run the following command in your command line to download it:

```
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
```

- After downloading Node.js run the following command line to install it:

```
sudo apt-get install nodejs -y
```

Now you are all set to install our code to your Raspberry Pi.

1. Copy the directory `pca9685` to your Raspberry Pi.
2. In your Raspberry Pi command line navigate to the `pca9685` directory and run:

```
npm i
```

This will install the packages listed in the `package.json` file. The most important ones to control the claw and to make the connectivity with our app are [adafruit-pca9685](https://github.com/johntreacy/adafruit-pca9685), and [socket.io-client](https://socket.io/docs/v3/client-installation/). 

3. Connect the Adafruit PCA9685 to the Raspberry Pi. 
4. Connect a power supply to the Adafruit PCA9685. 
5. Connect your claw to your Raspberry Pi considering the following channels to the correspondent motor location.

![Motor location with correspondent channel number](https://github.com/Mimila-85/roboarm-app-control/blob/master/client/src/assets/roboArmChannelDistribution.PNG)

The correlations are as follow:

- channel 0 = base
- channel 1 = shoulder
- channel 2 = elbow
- channel 3 = wrist articulation
- channel 4 = wrist roll
- channel 5 = claw

Your Raspberry Pi is ready to connect!

### Web App

This application is deployed with **Heroku** and **MongoDB Atlas**.

- If not yet install, first download [Node.js](https://nodejs.org/).
- Once Node.js is installed from the command line navigate to the cloned directory and run:

```
npm i
```

This will install the packages listed in the `package.json` file. Which includes [express](https://expressjs.com/), [mongoose](https://mongoosejs.com/), [axios](https://www.npmjs.com/package/axios), [passport](http://www.passportjs.org/), [socket.io](https://socket.io/docs/v3/server-initialization/), [socket.io-client](https://socket.io/docs/v3/client-installation/), and [material-ui](https://material-ui.com/).

- Check the file `.env.example` to know which protected variables we are using in this application. Create a `.env` file and add appropriate credentials. The `MONGO_ATLAS_SEED` is found in your MongoDB Atlas.
- On file `seeders/seed.js`, comment and uncomment lines 6 and 7 to seed the local database or the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Run this command on the command line to seed your database accordingly with your selection.

```
npm run seed
```

If you deploy using **Heroku**, do not forget to add your `config vars`, keys are `JWT_SECRET` and `MONGODB_URI`, value is the ones you have added to your `.env` file.

## Usage

From the web app users can register to create an account, once signed in the user is taken to the dashboard where it is presented with the programmed motions to the robot claw.
Before the user is able to run the motion commands, it is necessary to establish a connection with the Raspberry Pi. From the Raspberry Pi command line, this can be done remotely, navigate to the directory `pca9685` and run the command:

```
node pca_server.js
```

With the Raspberry Pi connected the user can click on the desire motion to move the robot and/or click on the save button to save it to the favorites page. From the favorites page, the user can run the saved motions command by clicking on the buttons. The user is also able to delete the saved motions by clicking on the trash buttons.
At any time the user can click on the **stop** button to stop a motion.

## Link

[RoboArm App Control](https://roboarmcontrol.herokuapp.com/)

## Demo

![RoboArm App Control Demo](https://github.com/Mimila-85/roboarm-app-control/blob/master/client/src/assets/roboArmDemo.gif)

## License

This project is licensed under the terms of the MIT license.

## Contributing

If you would like to participate in this project, please submit any bugs or feature requests to the contact listed on the `questions` section of this README. You are also welcomed to create a pull request, it will be reviewed and if appropriate it will be implemented.

## Questions

If you have any questions about the repo, open an issue or contact one of the team members listed below:

- [Camila Alves Meyer](https://github.com/Mimila-85)
- [Tyler Silverman](https://github.com/TylerSilverman)

