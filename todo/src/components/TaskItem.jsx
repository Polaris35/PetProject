import { useState } from "react";

export const TaskItem = ({ onChangedMark, elem, onDelete }) => {
    const [checkState, setCheckState] = useState(() => {
        return elem.checkState;
    });

    return (
        <div className="TaskItem">
            <input
                type="checkbox"
                checked={checkState}
                onChange={(e) => {
                    setCheckState(e.target.checked);
                    onChangedMark(checkState);
                }}
            />
            <label
                style={{
                    textDecoration: checkState ? "line-through" : "none",
                }}
            >
                {elem.name}
            </label>
            <button onClick={onDelete}>X</button>
        </div>
    );
};
