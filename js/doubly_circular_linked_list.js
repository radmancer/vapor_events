function circularLinkedList() {
    //Node
    let Node = function(element) {
      this.element = element;
      this.next = null;
      this.prev = null;
    }

    let length = 0;
    let head = null;
    let tail = null;

    //Other methods go here 

    //Get element at specific index
    this.getElementAt = function(index) {
      if(index >= 0 && index <= length){
        let node = head;
        for(let i = 0; i < index && node != null; i++){
          node = node.next;
        }
        return node;
      }
      return undefined;
    }

    //Append a new element
    this.append = function(element) {
      let node = new Node(element),
          current = head,
          previous;
  
      if(!head){
        head = node;
        tail = node;
      }else{
        node.prev = tail;
        tail.next = node;
        tail = node;
      }

      //Mark head's prev element as last element
      head.prev = tail;

      //Mark tail's next element as first element
      tail.next = head;
      length++;
    }

    //Add element at any position
    this.insert = function(position, element) {

      //Check of out-of-bound values
      if(position >= 0 && position <= length){
        let node = new Node(element),
            current = head,
            previous,
            index = 0;
      
        if(position === 0){
          if(!head){
            head = node;
            tail = node;
          }else{
            node.next = current;
            current.prev = node;
            head = node;
          }
        }else if(position === length){
          current = tail;
          current.next = node;
          node.prev = current;
          tail = node;
        }else{
          while(index++ < position){
            previous = current;
            current = current.next;
          }

          node.next = current;
          previous.next = node;

          //New
          current.prev = node;
          node.prev = previous; 
        }

        //Mark head's prev element as last element
        head.prev = tail;
    
        //Mark tail's next element as first element
        tail.next = head;

        length++;
        return true;
      }else{
        return false;
      }
    }

    //Remove at any position
    this.removeAt = function (index) {
      if(index >= 0 && index < length){
        let current = head;
      
        //Remove from head
        if(index === 0){
          if(length === 1){
            head = undefined;
          }else{
            const removed = head;
            current = this.getElementAt(length - 1);
            head = head.next;
            current.next = head;
            current = removed;
          }
        }else{
          //Remove at given index (middle or end)
          const previous = this.getElementAt(index - 1);
          current = previous.next;
          previous.next = current.next;
        }

        if(head){
          //Mark head's prev element as last element
          head.prev = tail;
      
          //Mark tail's next element as first element
          tail.next = head;
        }

        length--;
        return current.element;
      }
      return undefined;
    }

    //Get the indexOf item 
    this.indexOf = function(elm){
      let current = head,
      index = -1;
  
      //If element found then return its position
      while(current){
        if(elm === current.element){
           return ++index;
        }
    
         index++;
         current = current.next;
       }
   
      //Else return -1
      return -1;
    };

    //Find the item in the list
    this.isPresent = (elm) => {
      return this.indexOf(elm) !== -1;
    };

    //Get the head
    this.getHead = function(){
      return head;
    }

    //Get the tail
    this.getTail = function(){
      return tail;
    }

    //Delete an item from the list
    this.delete = (elm) => {
       return this.removeAt(this.indexOf(elm));
    }; 

    //Delete the first item from the list
    this.deleteHead = function(){
      this.removeAt(0);
    }

    //Print item of the string
    this.toString = function(){
      let current = head,
      string = '';
      const temp = head.element;

      while(current){
        if(temp === current.next.element){
          string += current.element + (current.next ? '\n' : '');
          break;
        }

        string += current.element + (current.next ? '\n' : '');
        current = current.next;
      }
  
      return string;
    };

    //Convert list to array
    this.toArray = function(){
      let arr = [],
      current = head;
      const temp = head.element
  
      while(current){
        //Break if first element detected
        if(temp === current.next.element){
          arr.push(current.element);
          break;
        }

        arr.push(current.element);
        current = current.next;
      }
  
      return arr;
    };

    //Check if list is empty
    this.isEmpty = function(){
      return length === 0;
    };

    //Get the size of the list
    this.size = function(){
      return length;
    }
  }