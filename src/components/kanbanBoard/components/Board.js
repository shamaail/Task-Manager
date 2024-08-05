import React, { useEffect, useState } from 'react';
import API from "../../axios";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Sidebar from '../../layout/Sidebar';

const taskStatus = {
  todo: {
    name: "Todo",
    items: [],
  },
  inProgress: {
    name: "In Progress",
    items: [],
  },
  testing: {
    name: "Testing",
    items: [],
  },
  hold: {
    name: "Hold",
    items: [],
  },
  completed: {
    name: "Completed",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Board() {
  const [columns, setColumns] = useState(taskStatus);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get("/v1/project/2/task");
        console.log(response);
        const fetchedTasks = response.data.data;
        setTasks(fetchedTasks);
        setColumns(prevColumns => ({
          ...prevColumns,
          todo: {
            ...prevColumns.todo,
            items: fetchedTasks,
          },
        }));
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-1 overflow-x-auto p-4">
          <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
            <div className="flex space-x-4">
              {Object.entries(columns).map(([columnId, column], index) => (
                <div key={columnId} className="min-w-[250px] bg-gray-200 p-4 border rounded-xl">
                  <h2 className="text-xl font-medium mb-4">{column.name}</h2>
                  <Droppable droppableId={column.name}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {column.items.slice(0, 5).map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                            {(provided) => (
                              <div
                                className="bg-white border rounded-lg shadow-md p-3 mb-4"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <h2>{item.name}</h2>
                                <p>{item.due_date}</p>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </>
  );
}

export default Board;
