import React from 'react'
// import './todo.css'; 
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 100,
            list : []
        }
          this.add = this.add.bind(this);

    }

    async add() {
        let item = document.getElementById('item').value;
        if(item !== "") {
          document.getElementById('item').value = "";
          await this.setState({list:this.state.list.concat(item)});
          console.log(this.state.list);
        }    
    }

    remove(index) {
      var array = [...this.state.list]; // make a separate copy of the array
      if (index !== -1) {
      array.splice(index, 1);
      this.setState({list: array});
     }
    }

    edit(index) {
      var x = document.getElementById(index);
      if (x.style.display === "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
    }

    async editSubmit(index) {
      var array = [...this.state.list];
      var inpindex = "inp" + index;
      if (index !== -1) {
        var item = await document.getElementById(inpindex).value;
        if(item !== "") {
          array[index] = item;
          this.setState({list: array});
          console.log(this.state.list);
          this.edit(index);
          document.getElementById(inpindex).value = "";    
        }
      }
    }


    render() {
      return (
        <div className="shopping-list">
          <h1>To-Do List for {this.state.value}</h1>
        <input type="text" placeholder="what to do?" id="item"></input>
        <input type="button" value="Add" onClick= {this.add}></input>
        <div id="lst">
        {this.state.list.map((item, index) => 
        (
          <div key={index}>{item} 
          <button onClick={() => this.remove(index)}>remove</button>
          <button onClick={() => this.edit(index)}>edit</button>
          <div id={index} style= {{display:"none"}}>
          <input type="text" id={"inp"+index}></input>
          <button onClick={() => this.editSubmit(index)}>Submit</button>
          </div>
          </div>))}
        </div>
        </div>
      );
    }
  }

export default ToDoList;