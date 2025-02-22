public class Main {
    public static void main(String[] args) {
        DynamicArray dynamicArray = new DynamicArray();
        dynamicArray.add("A");
        dynamicArray.add("B");
        dynamicArray.add("C");
        dynamicArray.add("D");
        dynamicArray.add("E");
        dynamicArray.add("F");
        dynamicArray.add("G");
        dynamicArray.add("H");
        dynamicArray.add("I");
        dynamicArray.add("J");
        dynamicArray.add("K");
        dynamicArray.delete("A");
        dynamicArray.delete("B");
        dynamicArray.delete("C");
        dynamicArray.delete("D");
        dynamicArray.delete("E");
        dynamicArray.delete("F");



        System.out.println("Index:" +dynamicArray.search("B"));
        System.out.println("Size: "+ dynamicArray.size);
        System.out.println("Capacity: "+ dynamicArray.capacity);
        System.out.println("isEmpty: "+ dynamicArray.isEmpty());
        System.out.println(dynamicArray);
    }
}