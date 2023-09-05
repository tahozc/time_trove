import React, { useState } from "react";
import { addTimeCapsule } from "../api";

function TimeCapsuleForm() {
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTimeCapsule(message);
            setMessage("");
        } catch (error) {
            console.error("Error adding capsule:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
            />
            <button type="submit">Add to Capsule</button>
        </form>
    );
}

export default TimeCapsuleForm;
