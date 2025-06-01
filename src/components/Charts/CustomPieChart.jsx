import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const renderCenterLabel = ({ cx, cy, label, totalAmount }) => {
  return (
    <>
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        fill="#666"
        fontSize="14px"
      >
        {label}
      </text>
      <text
        x={cx}
        y={cy + 15}
        textAnchor="middle"
        fill="#333"
        fontSize="24px"
        fontWeight="semi-bold"
      >
        {totalAmount}
      </text>
    </>
  );
};

const CustomPieChart = ({ data, label, totalAmount, colors, showTextAnchor }) => {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={90}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          {showTextAnchor && (
            <Label
              content={(props) => renderCenterLabel({ cx: props.viewBox.cx, cy: props.viewBox.cy, label, totalAmount })}
              position="center"
            />
          )}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
