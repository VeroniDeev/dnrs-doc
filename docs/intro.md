---
sidebar_position: 1
---

# Tutorial

## Requirement

For **dnrs** to work perfectly, you just need to install rust and have a Linux system. 

## Installation

#### For the moment, dnrs installation is only available on Arch Linux with the AUR package. Here's how to proceed:

Updating the aur repository
```sh
yay -Syy
```

Install **dnrs**
```sh
yay -S dnrs
```

#### For all linux systems other than Arch, here's how to configure it easily

Clone the repository
```sh
git clone https://github.com/VeroniDeev/dnrs
```

Go to the folder
```sh
cd dnrs
```

Set build.sh as executable then run 
```sh
chmod +x config.sh && ./build.sh
```

## Setup

##### Now before running dnrs you need to configure the systemd

Enable dnrs.service
```sh
sudo systemctl enable dnrs.service
```

Start dnrs.service
```sh
sudo systemctl start dnrs.service
```

Check the status
```sh
 sudo systemctl status dnrs.service
 ```
If you see an error, don't hesitate to open an [issue](https://github.com/VeroniDeev/dnrs/issues)

<br/>
<br/>

> Now let's learn how to use the configuration language to give life to our domain names