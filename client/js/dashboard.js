var app = new Vue({
      el: '#wrapper',
      data: {
        letters: [],
        add:{
          _id: '',
          letter: '',
          frequency: ''
        },
        edit:{
          letter: '',
          frequency: ''
        }

      },
      methods: {
        loadData: function() {
          $.ajax({
            url: "http://localhost:3000/api/letter",
            type: "GET",
            success:function (data) {
              app.letters = data;
            },
          })
        },
        createData: function () {
          $.ajax({
            url: "http://localhost:3000/api/letter",
            type: "POST",
            data: {
              letter: app.add.letter,
              frequency: app.add.frequency
            },
            success:function (data) {
              app.letters.push(data)
              app.resetButton()
            }
          })
        },
        getData: function(id) {
        $.ajax({
          url: `http://localhost:3000/api/letter/${id}`,
          type: 'GET',
          success: function(data) {
            app.add._id = data._id
            app.add.letter = data.letter
            app.add.frequency = data.frequency
          }
        })
      },
      editData: function(id){
        $.ajax({
          url: `http://localhost:3000/api/letter/${id}`,
          type: 'PUT',
          data: {
            letter: app.add.letter,
            frequency: app.add.frequency
          },
          success: function(data) {
            app.loadHouse()
          }
        })
      },
      deleteData: function(id) {
        $.ajax({
          url: `http://localhost:3000/api/letter/${id}`,
          type: 'DELETE',
          success: function(data) {
            app.loadHouse()
          }
        })
      },
      resetButton: function() {
        app.add.letter = ''
        app.add.frequency = ''
      },
      logout: function(){
        
      }
    }
})

app.loadData();
