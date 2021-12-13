---
title: "IA reconnaissance port du masque"
date: 2020-10-17T12:52:36+06:00
image_webp: images/blog/mask.webp
image: images/blog/mask.jpg
author: Deconinck Florian
description : "Réaliser un modèle de Deep Learning permettant de détecter si une personne porte bien son masque ou non"
---

## Introduction
La crise du COVID-19, a forcé les populations du monde entier à porter des masques pour leur sécurité. Malgré les efforts du gouvernement, le virus se répand toujours. En effet, certaines personnes portent mal leur masque, ce qui augmente le risque de contamination dans les lieux publics. Dans ce projet, nous proposons de résoudre ce problème avec le Deep Learning.

Dans ce projet de Master I, nous sommes une équipe de 5 étudiants, et nous sommes mis au défi de programmer une IA qui comprendra grâce à une photo si un humain porte ou non un masque chirurgical, mais aussi si ce masque est correctement porté.

Ce projet m'a aidé à découvrir les réseaux de neurones et la vision par ordinateur.

## Dataset
Nous utilisons un jeu de données contenant des images avec des visages portant correctement le masque et d'autres incorrectement. Nous avons équilibré nos données et avons 3 classes à prédire :
- la personne porte bien son marque
- la personne porte un masque mais il est mal porté
- la personne ne porte pas de masque

## Méthode
Nous avons choisi de construire notre modèle avec un CNN (Convolutional Neural Network) dans un premier temps. Nous n'utilisons qu'un seul réseau de neurones pour prédire les différentes classes et ne diviserons pas le problème en deux parties (masque ou non masque suivi de si masque, est-il correctement porté). Nous essayons différents modèles d'apprentissage par transfert comme les architectures ResNet ou VGG16/19.

## Résultats
- ResNet50 : Test accuracy : 92.03 % et test loss : 0.293.
- ResNet101 : Test accuracy : 93.5 % et test loss : 0.221.
- VGG16 : Test accuracy : 98.9 % et test loss : 0.0331.
- VGG19 : Test accuracy : 89.0 % et test loss : 0.27.

## Implémentation avec une Webcam
Après avoir obtenu un modèle très satisfaisant et très encourageant, nous avons décidé de l’implémenter sur une Webcam afin de tester la prédiction en temps réelle. Pour ce faire, nous avons utilisé la librairie OpenCV et ses modèles haarcascade pour effectuer la détection de visages. Une fois un visage détecté, nous avons découpé une nouvelle image de ce visage que nous avons ensuite donné en entrée à notre modèle pour effectuer la prédiction.

Voici une vidéo de notre IA implémentée sur une webcam d'un ordinateur.
[Regarder la démo](https://www.linkedin.com/feed/update/urn:li:activity:6769546094398455809/)
