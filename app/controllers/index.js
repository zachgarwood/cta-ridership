import Ember from 'ember';

export default Ember.Controller.extend({
  chartOptions: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  },
  chartData: Ember.computed('model', function() {
    return {
      labels: this.get('model').mapBy('year'),
      datasets: [
        {
          label: 'Total Riders',
          data: this.get('model').mapBy('total'),
        },
      ],
    };
  }),
});
