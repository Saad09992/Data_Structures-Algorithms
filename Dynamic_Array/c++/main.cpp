#include <iostream>
#include "dynamicArray.cpp"


using namespace std;
int main(){
    DynamicArray dynamicArray;
    dynamicArray.add("A");
    dynamicArray.add("B");
    dynamicArray.add("C");
    
    dynamicArray.search("B");
    
    dynamicArray.displayData();
    return 0;
}