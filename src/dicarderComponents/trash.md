















import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const items = [
  {
    id: "101",
    content: "hello todo1",
  },
  {
    id: "102",
    content: "hello todo2",
  },
  {
    id: "103",
    content: "hello todo3",
  },
];

const coloumns = {
  [1]: {
    name: "Todo",
    items: items,
  },
  [2]: {
    name: "In-progress",
    items: [],
  },
  [3]: {
    name: "Blocked",
    items: [],
  },
  [4]: {
    name: "Done",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  console.log("result",result);
  //this below line simply means if no destination do nothing
  if (!result.destination) return;

  const { source, destination } = result; //getting source and destination of draggable card

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    console.log("sourceColumn:",sourceColumn);
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items] //copying all the items of the source to sourceItems
    const destItems = [...destColumn.items] //copying all the items of the dest to destItems
    //removing the from sourceColumn and adding to destinationItem
    const [removed] = sourceItems.splice(source.index,1); 
    destItems.splice(destination.index,0,removed);
    setColumns({
      ...columns,
      [source.droppableId]:{
        ...sourceColumn,
        items:sourceItems,
      },
      [destination.droppableId]:{
        ...destColumn,
        items:destItems, 
      }
    }); 

  } else {
    //this else will shuffle the column in the same coloumn if the above condition is not true
    const column = columns[source.droppableId];
    console.log("column:",column);
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1); //removing the dragged card from the source
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...coloumns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Kanbanboard() {
  const [columns, setColumns] = useState(coloumns);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id.toString()} key={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h2>{column.name}</h2>
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                          ? "#f3f6f9"
                          : "#bee3f8",
                        padding: 5,
                        width: 250,
                        minHeight: 500,
                        borderRadius: 5,
                        margin: "8px",
                      }}
                    >
                      {/* mapping coloumn items */}
                      {/* the draggable id shoud alaways be string*/}
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id.toString()}
                            index={index}
                          >
                            {/* the draggable return the function having provided and snapshot*/}
                            {/* the takes the card or the div which has to to dragged from one column to another like Cards etc.. */}
                            {/* the userselect in the style lets user to select text  */}
                            {/* provided.draggale is the default style provided by the dnd library */}
                            {(provided, snapshot) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: "none",
                                    padding: 16,
                                    margin: "0 0 8px 0",
                                    minHeight: "50px",
                                    backgroundColor: snapshot.isDragging
                                      ? "#263b4a"
                                      : "#456c86",
                                    color: "white",
                                    ...provided.draggableProps.style
                                  }}
                                >
                                  {item.content}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Kanbanboard;








