---
title: "Cartographie de données NBA"
date: 2021-11-12T18:11:36+06:00
image_webp: images/blog/qgis.webp
image: images/blog/qgis.png
author: Deconinck Florian
description : "Représentation de données issus de NBA à l'aide du logiciel QGIS"
---

## Introduction
Lors de notre 5ème année d’étude à JUNIA ISEN Lille, j'ai eu la possibilité de choisir un module d’ouverture : système d’information géographique. Dans ce module, j'ai appris l'importance de la bonne communication d’informations. Le partage de données grâce aux cartes et autres représentations est un moyen efficace et accessible à tous de transmission.

Pour finaliser ce module, nous avions à réaliser, par groupe de 2, une carte avec les données de notre choix. Ayant un ami adepte du basketball tout comme moi, nous avons choisi de prendre des données de la NBA afin de représenter l’évolution de la position des tirs des joueurs et les origines des joueurs américains.

## Les données
Tout d’abord pour la carte montrant les zones de tir en NBA, nous n’avons trouvé aucun fichier tout fait sur Internet. Nous avons donc réalisé notre propre programme Python afin de récupérer les données puis de les stocker dans un fichier csv. Pour récupérer les données, nous avons fait appel à l’API public du site officiel de la [NBA](www.nba.com) : nba_api. Nous avons récupéré les données de toutes les années depuis 2004 et pour chacune des 30 équipes de la ligue. Pour finir nous avons, grâce à un autre script python, traité les données afin de conserver seulement celles utiles

Pour la seconde représentation, nous avons réussi à trouver un fichier contenant toutes les données dont nous avions besoin.

## Réalisation dans QGIS
Voici la répartition des tirs en NBA durant la saison 2004-2005 ainsi que la saison 2019-2020 :

![tirs2004-2005](https://deconinckflo.github.io/images/blog/tirs2004.png#thumbnail)
![tirs2019-2020](https://deconinckflo.github.io/images/blog/tirs2020.png#thumbnail)

Une fois chaque image de chaque saison exportée du logiciel QGIS, nous les avons toutes assemblées pour en faire une image animée de type GIF.
Nous pouvons donc observer au fur et à mesure une réelle évolution des positions de tir en NBA avec une augmentation du nombre de tir à 3 points.

Voici la carte montrant l'origine des joueurs américains évoluant en NBA et en ABA précédemment :
![naissance joueurs NBA Américain](https://deconinckflo.github.io/images/blog/naissance-nba.png#thumbnail)
