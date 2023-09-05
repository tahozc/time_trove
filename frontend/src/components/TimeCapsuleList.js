import React, { useState, useEffect } from "react";
import { getAllTimeCapsules } from "../api";

function TimeCapsuleList() {
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllTimeCapsules();
                setCapsules(response.data);
            } catch (error) {
                console.error("Error fetching capsules:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ul>
            {capsules.map((capsule, index) => (
                <li key={index}>{capsule}</li>
            ))}
        </ul>
    );
}

export default TimeCapsuleList;
