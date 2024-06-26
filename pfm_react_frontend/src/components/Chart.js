import React from 'react';
import { Pie } from 'react-chartjs-2';
// Necessary components from chart.js
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ expenses }) => {
    const categories = [...new Set(expenses.map(expense => expense.category))];
    const data = categories.map(category => 
        expenses.filter(expense => expense.category === category)
            .reduce((sum, current) => sum + current.amount, 0)
    );

    const chartData = {
        labels: categories,
        datasets: [{
            data: data,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#cc65fe',
                '#ff6348',
                // Add more colors as needed
            ],
            hoverBackgroundColor: [
                'green',
            ]
        }]
    };

    return (
        <div>
            <h2>Expense Distribution by Category</h2>
            <div className = "chart-container">
                <Pie data={chartData} />
            </div>
        </div>
    );
};

export default ExpensePieChart;
