import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export const CategoryChart = ({ questions }) => {
  const data = Object.values(
    questions.reduce((acc, q) => {
      acc[q.category] = acc[q.category] || { category: q.category, count: 0 };
      acc[q.category].count++;
      return acc;
    }, {})
  );

  return (
    <div className="chart-card">
      <h3>Questions by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" hide />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
