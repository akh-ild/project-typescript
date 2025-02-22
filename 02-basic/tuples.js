"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = ['ildar', 1];
var tUser; // order matters!!!
tUser = ['ildar', 2];
var rgb = [255, 123, 112];
var newUser = [122, 'ildar@test.ts'];
// newUser = ['ildar', 1]; // error!!!
newUser[1] = 'dinara@test.ts';
