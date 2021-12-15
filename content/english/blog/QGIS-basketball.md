---
title: "NBA Data Mapping"
date: 2021-11-12T18:11:36+06:00
image_webp: images/blog/qgis.webp
image: images/blog/qgis.png
author: Deconinck Florian
description : "Representation of NBA data using QGIS software"
---

## Introduction
During our 5th year of study at JUNIA ISEN Lille, I had the opportunity to choose an openness module: geographic information system. In this module, I learned the importance of good communication of information. Sharing data using maps and other representations is an efficient and accessible means of transmission.

To finalize this module, we had to produce, in groups of 2, a map with the data of our choice. Having a friend who loves basketball just like me, we chose to take data from the NBA to represent the evolution of player shooting positions and the origins of American players.

## Data
First for the map showing the shooting zones in the NBA, we could not find any data files on the Internet. So we made our own Python program to collect the data and then store it in a csv file. To retrieve the data, we used the public API on the [NBA](www.nba.com) official website: nba_api. We have collected data for all years since 2004 and for each of the 30 teams in the league. Finally, we have, thanks to another python script, processed the data in order to keep only the useful ones.

For the second performance, we managed to find a file containing all the data we needed.

## Realization in QGIS
Here is the distribution of shots in the NBA during the 2004-2005 season as well as the 2019-2020 season:

![shoots2004-2005](https://deconinckflo.github.io/images/blog/tirs2004.png#thumbnail)
![shoots2019-2020](https://deconinckflo.github.io/images/blog/tirs2020.png#thumbnail)

Once each image of each season has been exported from the QGIS software, we put them all together to make GIF.
We can therefore progressively observe a real evolution of shooting positions in the NBA with an increase in the number of 3-point shootings.

Here is the map showing the origin of American players playing in NBA and ABA previously:
![birth of American NBA players](https://deconinckflo.github.io/images/blog/naissance-nba.png#thumbnail)
