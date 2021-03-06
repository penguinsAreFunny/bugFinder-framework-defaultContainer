"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.predictionContainer = exports.trainingContainer = exports.featureExtractionContainer = exports.preprocessingContainer = exports.annotatorContainer = exports.quantifierContainer = exports.localityBContainer = exports.localityAContainer = exports.sharedContainer = void 0;
var inversify_1 = require("inversify");
exports.sharedContainer = new inversify_1.Container();
exports.localityAContainer = new inversify_1.Container();
exports.localityBContainer = new inversify_1.Container();
exports.quantifierContainer = new inversify_1.Container();
exports.annotatorContainer = new inversify_1.Container();
exports.preprocessingContainer = new inversify_1.Container();
exports.featureExtractionContainer = new inversify_1.Container();
exports.trainingContainer = new inversify_1.Container();
exports.predictionContainer = new inversify_1.Container();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQW9DO0FBRXZCLFFBQUEsZUFBZSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFBO0FBQ2pDLFFBQUEsa0JBQWtCLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7QUFDcEMsUUFBQSxrQkFBa0IsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQTtBQUNwQyxRQUFBLG1CQUFtQixHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFBO0FBQ3JDLFFBQUEsa0JBQWtCLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7QUFDcEMsUUFBQSxzQkFBc0IsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQTtBQUN4QyxRQUFBLDBCQUEwQixHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFBO0FBQzVDLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7QUFDbkMsUUFBQSxtQkFBbUIsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQSJ9