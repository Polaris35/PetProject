import { useState } from "react";

export const TaskItem = ({ label, checked, onChange, onDelete }) => {
    return (
        <div className="TaskItem">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                    onChange(e.target.checked);
                }}
            />
            <label
                style={{
                    textDecoration: checked ? "line-through" : "none",
                }}
            >
                {label}
            </label>
            <button onClick={onDelete}>X</button>
        </div>
    );
};
