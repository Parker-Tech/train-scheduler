// Initialize Firebase
var config = {
	apiKey: "AIzaSyBQbiRrn9PUbFXus8AjL8KhSnfyglBygWs",
	authDomain: "fir-project-3-28.firebaseapp.com",
	databaseURL: "https://fir-project-3-28.firebaseio.com",
	projectId: "fir-project-3-28",
	storageBucket: "fir-project-3-28.appspot.com",
	messagingSenderId: "382302853631"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-train").on("click", function () {
	event.preventDefault();

	var dynamicTr = $("<tr>").addClass("trainRow");
	var trainName = $("#train-name").val();
	dynamicTr.append($("<td>").text(trainName));
	var trainDestination = $("#train-destination").val();
	dynamicTr.append($("<td>").text(trainDestination));
	var trainFrequency = $("#train-frequency").val();
	dynamicTr.append($("<td>").text(trainFrequency));
	var firstTrain = $("#first-train-time").val();
	dynamicTr.append($("<td>").text(moment(firstTrain, 'HH:mm').format('hh:mm a')))
	// var minutesAway = moment().diff(moment(firstTrain), "minutes");
	var now = moment();
	// var minutesAway = moment.utc(moment(no-w,"DD/MM/YYYY HH:mm:ss").diff(moment(firstTrain,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
	console.log(moment([1200]));
	// dynamicTr.append($("<td>").text(minutesAway));
	$(".train-stage").append(dynamicTr);

	console.log($(".train-stage").html())

	database.ref().set({
		employeeList: $(".train-stage").html()
	})

	$("#train-name").val("")
	$("#train-destination").val("")
	$("#first-train-time").val("")
	$("#train-frequency").val("")
})

database.ref().on("value", function (snapshot) {
	$(".train-stage").html(snapshot.val().employeeList);
})

$(document).on("click", ".trainRow", function () {
	$(this).remove();

	database.ref().set({
		employeeList: $(".train-stage").html()
	})
})
