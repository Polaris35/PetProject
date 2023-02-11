import { useEffect, useState } from "react";
import { TaskItem } from "./TaskItem";

export const Todo = () => {
    const [value, setValue] = useState("");

    const [taskList, setTaskList] = useState(() => {
        const saved = localStorage.getItem("toDoList");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(taskList));
    }, [taskList]);

    const addTask = () => {
        setTaskList((list) => {
            return [...list, { name: value, checked: false }];
        });
        setValue("");
    };

    const deleteItem = (idx) => {
        setTaskList((e) => e.filter((_, index) => index !== idx));
    };

    const deleteSelected = () => {
        setTaskList((e) =>
            e.filter((item) => {
                console.log(item);
                return !item.checked;
            })
        );
    };

    const changeMark = (idx, value) => {
        setTaskList((e) => {
            const copy = JSON.parse(JSON.stringify(e));
            copy[idx].checked = value;
            return copy;
        });
    };

    // console.log(taskList);
    console.log(JSON.stringify(taskList));

    return (
        <div className="toDo">
            <div className="inputWrapper">
                <input
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    value={value}
                />
                <button className="addButton" onClick={addTask}>
                    +
                </button>
            </div>

            <div>
                {taskList.map((item, index) => {
                    return (
                        <TaskItem
                            label={item.name}
                            checked={item.checked}
                            onChange={(v) => changeMark(index, v)}
                            key={item.name + index}
                            onDelete={() => deleteItem(index)}
                        />
                    );
                })}
            </div>
            <button onClick={deleteSelected}>delete selected!</button>
        </div>
    );
};
