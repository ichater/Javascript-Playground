const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const LL = new LinkedList();
    LL.insertAtHead(10);
    const oldhead = LL.head;
    LL.insertAtHead(20);

    expect(LL.head.value).toBe(20);
    expect(LL.head.next).toBe(oldhead);
    expect(LL.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("#with index less than 0", () => {
    test("it returns null", () => {
      const LL = new LinkedList.fromValues(10, 20);

      expect(LL.getByIndex(-1)).toBeNull();
    });
  });

  describe("#with index greater than list length", () => {
    test("it returns null", () => {
      const LL = new LinkedList.fromValues(10, 20);

      expect(LL.getByIndex(5)).toBeNull();
    });
  });

  describe("#with index 0", () => {
    test("it returns the head", () => {
      const LL = new LinkedList.fromValues(10, 20);
      expect(LL.getByIndex(0).value).toBe(10);
    });
  });

  describe("#with index in the middle", () => {
    test("it returns the element at that index", () => {
      const LL = new LinkedList.fromValues(10, 20, 30, 40);
      expect(LL.getByIndex(2).value).toBe(30);
    });
  });
});

describe("#insertAtIndex", () => {
  describe("#with index less than 0", () => {
    test("it does not insert anything", () => {
      const ll = new LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);
      console.log(ll);
      expect(ll.length).toBe(2);
    });
  });

  describe("#with index greater than list length", () => {
    test("it does not insert anything", () => {
      const ll = new LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe("#with index 0", () => {
    test("it returns the head", () => {
      const ll = new LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);

      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe("#with index in the middle", () => {
    test("it returns the element at that index", () => {
      const ll = new LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 70);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(70);
      expect(ll.head.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});
