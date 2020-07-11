var ctx1 = document.getElementsByClassName('chart1')[0].getContext('2d');
var ctx2 = document.getElementById('chart2').getContext('2d');
var ctx3 = document.getElementById('chart3')
var ctx4 = document.getElementById('chart4')


var myBarChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Active Users dataset',
            backgroundColor: ['rgb(255, 0, 10,0.2)','rgb(50, 99, 132,0.2)','rgb(50, 99,90,0.2)','rgb(150, 9, 132,0.2)','rgb(255, 100, 10,0.2)','rgb(0, 99, 132,0.2)','rgb(50, 0, 132,0.2)'],
            hoverBackgroundColor: ['rgb(255, 0, 10,0.8)','rgb(50, 99, 132,0.8)','rgb(50, 99,90,0.8)','rgb(150, 9, 132,0.8)','rgb(255, 100, 10,0.8)','rgb(0, 99, 132,0.8)','rgb(50, 0, 132,0.8)'],
            data: [10, 5, 55, 35, 20, 30, 60]
        }]
    },
    options: {}
});
var myLineChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Requests dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgb(50, 150, 0)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    options: {}
});



// var myPieChart = new Chart(ctx4, {
//     type: 'pie',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['rgb(255, 0, 10,0.2)','rgb(50, 99, 132,0.2)','rgb(50, 99,90,0.2)','rgb(150, 9, 132,0.2)','rgb(255, 99, 255,0.2)','rgb(0, 99, 132,0.2)','rgb(50, 0, 132,0.2)'],
//             hoverBackgroundColor: ['rgb(255, 0, 10,0.8)','rgb(50, 99, 132,0.8)','rgb(50, 99,90,0.8)','rgb(150, 9, 132,0.8)','rgb(255, 99, 255,0.8)','rgb(0, 99, 132,0.8)','rgb(50, 0, 132,0.8)'],
//             data: [60, 10, 5, 2, 20, 30, 45]
//         }]
//     },
//     options: {}
// });

var myPieChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Egypt', 'India', 'America'],
        datasets: [{
            label: 'Geo dataset',
            backgroundColor: ['rgb(255, 100, 10,0.8)','rgb(50, 99, 132,0.8)','rgb(50, 99,90,0.8)'],
            hoverBackgroundColor: ['rgb(255, 100, 10,0.9)','rgb(50, 99, 132,0.9)','rgb(50, 99,90,0.9)'],
            data: [60, 10, 30]
        }]
    },
    options: {}
});

var myAreaChart = new Chart(ctx4, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Events dataset',
            backgroundColor: 'rgb(255, 99, 132,0.5)',
            hoverBackgroundColor:'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    // Configuration options go here
    options: {}
});