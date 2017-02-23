var app = new Vue({
      el: '#wrapper',
      data: {
        tanggals: [],
        add:{
          _id: '',
          tanggal: '',
          frequency: ''
        },
        edit:{
          tanggal: '',
          frequency: ''
        }

      },
      methods: {
        loadData: function() {
          $.ajax({
            url: "http://localhost:3000/api/tanggal",
            type: "GET",
            success:function (data) {
              app.tanggals = data;
            },
          })
        },
        createData: function () {
          $.ajax({
            url: "http://localhost:3000/api/tanggal",
            type: "POST",
            data: {
              tanggal: app.add.tanggal,
              frequency: app.add.frequency
            },
            success:function (data) {
              app.tanggals.push(data)
              app.resetButton()
            }
          })
        },
        getData: function(id) {
        $.ajax({
          url: `http://localhost:3000/api/tanggal/${id}`,
          type: 'GET',
          success: function(data) {
            app.add._id = data._id
            app.add.tanggal = data.tanggal
            app.add.frequency = data.frequency
          }
        })
      },
      editData: function(id){
        $.ajax({
          url: `http://localhost:3000/api/tanggal/${id}`,
          type: 'PUT',
          data: {
            tanggal: app.add.tanggal,
            frequency: app.add.frequency
          },
          success: function(data) {
            app.loadHouse()
          }
        })
      },
      deleteData: function(id) {
        $.ajax({
          url: `http://localhost:3000/api/tanggal/${id}`,
          type: 'DELETE',
          success: function(data) {
            app.loadHouse()
          }
        })
      },
      resetButton: function() {
        app.add.tanggal = ''
        app.add.frequency = ''
      }
    }
})

app.loadData();
