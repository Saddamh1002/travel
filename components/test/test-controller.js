export default function testController($http, $state, $scope) {
    'ngInject';
    $scope.emailId="";
    $scope.firstForm = function (fname, lname, eid, mobile) {
        $scope.firstName = fname;
        $scope.lastName = lname;
        $scope.emailId = eid;
        $scope.phone = mobile;

    };

    $scope.finalData = function (location, ddate, rdate) {

        $scope.location = location;
        $scope.departureDate = ddate;
        $scope.returnDate = rdate;

    };
    $scope.print = function () {
        window.print();
    };
    $scope.sendMail = function () {
        var to, subject, text, html;
        to =  $scope.emailId
        console.log(to);
        subject = "Travele booking confirm!!!!";
        html = '<pre>' + $scope.firstName + '  ' + $scope.lastName + ' (' + $scope.phone + ') will' +
            'depart from' + $scope.location + ' on' + $scope.departureDate + 'and  return on ' + $scope.returnDate + ' </pre>';
        console.log("Sending E-mail...Please wait");

        $.get('http://localhost:3000/send', {to: to, subject: subject, html: html}, function (data) {
            if (data == "sent") {
                console.log("Email is been sent at " + to + " . Please check inbox !");
            }


        });
    }

}
