import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { product_title: "Dell XPS 13", price: 1299 },
  { product_title: "HP Spectre x360", price: 1399 },
  { product_title: "MacBook Air M1", price: 999 },
  { product_title: "Lenovo ThinkPad X1 Carbon", price: 1599 },
  { product_title: "ASUS ROG Zephyrus", price: 1449 },
  { product_title: "Acer Swift 3", price: 749 },
  { product_title: "Samsung Galaxy S22", price: 899 },
  { product_title: "Google Pixel 6", price: 799 },
  { product_title: "iPhone 13 Pro", price: 1099 },
  { product_title: "OnePlus 9 Pro", price: 969 },
  { product_title: "Sony WH-1000XM4", price: 349 },
  { product_title: "Apple AirPods Pro", price: 249 },
  { product_title: "Anker PowerCore", price: 49 },
  { product_title: "Logitech MX Master", price: 99 },
  { product_title: "Apple Watch", price: 399 },
  { product_title: "Samsung Galaxy Watch", price: 299 },
  { product_title: "Garmin Forerunner ", price: 499 },
  { product_title: "MacBook Pro 14 M1", price: 1999 },
  { product_title: "MacBook Air M2", price: 1299 },
  { product_title: "MacBook Pro 16", price: 3499 },
  { product_title: "iPhone 14", price: 799 },
  { product_title: "iPhone 14 Pro", price: 999 },
  { product_title: "iPhone 14 Pro Max", price: 1099 }
];

const BarChart = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <RechartsBarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 100,
            bottom: 60,  // Increased bottom margin for space for the x-axis labels
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
          className='text-xs text-yellow-300'
            dataKey="product_title" 
            angle={-40} // Rotate x-axis labels by -45 degrees
            textAnchor="end" // Align text to the end after rotation
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#8884d8" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
