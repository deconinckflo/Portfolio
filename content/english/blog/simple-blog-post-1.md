---
title: "Tennis Prediction"
date: 2020-06-15T12:52:36+06:00
image_webp: images/blog/tennis.webp
image: images/blog/tennis.jpg
author: Deconinck Florian
description : "Logic Regression Tennis Prediction"
---

Passionate about sports and having played tennis for 7 years, what could be more interesting than to start studying Big Data with a project around this theme. We tried to answer : Can tennis outcomes be predicted thanks to data available on the internet ?


I did this project in the third year, as part of my studies, with a long-time friend : [Thomas CARIN](https://github.com/Thrynk), we had 3 weeks to do the analysis and create a dashboard on a website to see latest tweets regarding tennis, see different results of tennis matches and link our predictions to it.

We reached an accuracy of 65% by using elo rating of player in a Logistic Regression. That is a good score already but we then tried to do a more deeper analysis.

We tried to compute more features to see if we can beat this accuracy :

We performed different steps to reach our goal :

- Data collection : we got our data from a website that freely gives a pre-populated database with tennis results and a lot of information on players. This website is Ultimate tennis statistics

- Data cleaning : we checked all features to see if some important data was missing. We saw that we had matches duplicates, we decided to drop those duplicates and reverse half of the matches to get a balanced sample. We also dropped features that we weren't interested in like match_id, player_rank (we preferred elo_rating which is more accurate) and surface. We handled NA values by dropping records where missing values were essential for future steps. We also saw that missing values were mostly coming from atypical tournaments like Davis Cup or ATP Finals.

- Feature scaling : we then scaled our features for the Logistic Regression

- Feature Engineering : We computed new statistics as first serve success percentage, winning on first serve percentage, aces, percentage of matches won, and also head to head statistics between players. We then performed feature difference to have one feature for each statistics representing the difference of levels between the 2 players on this statistics.

- Feature selection : We performed recursive feature elimination to keep only the most important features.

- Modeling : We got a 64% accuracy, this model didn't outperform our previous model, our features don't seem to bring more information than elo rating.

In conclusion, with more time to research really important features, with more time to do exploratory analysis and statistics tests to evaluate our features, we could expect to improve our model. We were a little bit "disappointed" not by our work but by the results, but we will definitely come back on this study, with more knowledge (we are starting a major in Data Science) and with more time to create a good model, and study its return on investment

[Link to the github repository](https://github.com/Thrynk/Tennis-prediction)
