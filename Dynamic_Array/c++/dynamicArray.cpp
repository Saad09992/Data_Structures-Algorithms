#include <iostream>
using namespace std;

class DynamicArray
{
private:
    string toString(){
        string arr;
        for (size_t i = 0; i < size; i++)
        {
            arr += array[i]+",";
        }
        arr.pop_back();
        arr = "["+arr+"]";
        return arr;     
    }

    void grow(){
        int ncapacity = capacity*2;
        string* narray = new string[ncapacity];
        for(int i=0;i<size;i++){
            narray[i]= array[i];
        }
        array = narray;
        capacity = ncapacity;
    }

    void shrink(){
        int ncapacity = int(capacity/2);
        string* narray = new string[ncapacity];
        for(int i=0;i<size;i++){
            narray[i]= array[i];
        }
        array = narray;
        capacity = ncapacity;
    }
public:
    int size=0;
    int capacity = 10;
    string* array;

    DynamicArray(){
        array = new string[capacity];
    };
    
    void displayData(){
        cout<<"SIZE: "<<size<<endl;
        cout<<"CAP: "<<capacity<<endl;
        cout<<"Array: "<<toString()<<endl;
    }

    void add(string data){
        array[size] = data;
        size++;
        if(size>=capacity){
            grow();
        }
    }

    void insert(int index, string data){
        for (size_t i = 4; i > 3; i--)
        {
            array[i] = array[i-1];
            // array[i] = array[i+1];
        }
        array[index] = data;
        size++;
        if(size>=capacity){
            grow();
        }
    }

    void remove(string data){
        for(int i=0;i<size;i++){
            if(array[i]==data){
                for(int n=i; n<size;n++){
                    array[n] = array[n+1];
                }
                size--;
                if(size<=int(capacity/3)){
                    shrink();
                }
                break;
            }
        }
        
    }

    int search(string data){
        for(int i=0;i<size;i++){
            if(array[i]==data){
                cout<<"Index for "<< data <<" is: "<< i<<endl;
            }
        }
        return -1;
    }
};
