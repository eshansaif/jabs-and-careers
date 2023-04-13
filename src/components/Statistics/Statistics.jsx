import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { "assignment": 1, "marks": 60 },
    { "assignment": 2, "marks": 58 },
    { "assignment": 3, "marks": 60 },
    { "assignment": 4, "marks": 50 },
    { "assignment": 5, "marks": 60 },
    { "assignment": 6, "marks": 60 },
    { "assignment": 7, "marks": 60 },
    { "assignment": 8, "marks": 60 }
];

const Statistics = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Statistics;