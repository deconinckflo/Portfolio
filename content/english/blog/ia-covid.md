---
title: "Masked recognition AI"
date: 2020-10-17T12:52:36+06:00
image_webp: images/blog/mask.webp
image: images/blog/mask.jpg
author: Deconinck Florian
description : "Make a Deep Learning model to detect whether a person is wearing his mask well or not"
---

## Introduction
The health crisis of COVID-19 (known as Coronavirus) striking the whole world, forced everybody to wear a mask. Besides governments efforts, the virus is still spreading. Indeed, some people don't wear their mask properly. In this project, we propose to solve this problem with Deep Learning. Our algorithm detects if someone wears or not a mask and if yes, if it is well worn.

In this Master I project, we are a team of 5 students, and we are challenged to program an AI that will understand thanks to a photo if a human is wearing a safety mask or not, but also if this safety mask is well-worn.

This project helps me discover Neural Networks and Computer Vision.

## Dataset
We use a dataset with images with correctly masked faces and incorrectly masked faces. We have balance our dataset and have 3 classes to predict:
- unmasked faces
- people wearing the mask incorrectly
- people wearing the mask correctly

## Method
We chose to build our model with a CNN (Convolutional Neural Network). We use only one neural network to predict the different classes and won't divide the problem into two parts (mask or not mask followed by if the mask is correctly worn). We try different transfer learning models like ResNet architectures or VGG16/19.

## Results
- ResNet50 : Test accuracy : 92.03 % and a test loss : 0.293.
- ResNet101 : Test accuracy : 93.5 % and a test loss : 0.221.
- VGG16 : Test accuracy : 98.9 % and a test loss : 0.0331.
- VGG19 : Test accuracy : 89.0 % and a test loss : 0.27.

## Implementation with a webcam
After obtaining a very satisfactory and very encouraging model, we decided to implement it on a webcam in order to test the prediction in real time. To do this, we used the OpenCV Library and its Haarcascade models to perform face detection. Once a face was detected, we cut out a new image of this face which we then gave as input to our model to make the prediction.

Here is a video of our AI implemented on the webcams of our computers.
[Watch the demo](https://www.linkedin.com/feed/update/urn:li:activity:6769546094398455809/)
