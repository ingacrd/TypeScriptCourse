"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
} //Return the same type that gets
identityThree("3");
function identityFour(val) {
    return val;
}
//identityFour<Bootle>({})
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do somedatabase operations
    const myIndex = 4;
    return products[myIndex];
};
