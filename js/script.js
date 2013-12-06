	$(function(){
		
		var dob;
		var monthday = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		var period = [ 0, 6, 10, 14, 9, 12, 15, 16, 2, 5, 10];
		var vaccweek = [ "At Birth", "6 Weeks Later", "10 Weeks Later", "14 Weeks Later", "9 Months Later", "12 Months Later", "15 Months Later", "16 - 18 Months Later", "2 Years Later", "5 Years Later", "10 - 12 Years Later"];
		var vaccine = [
			"BCG, OPV0 (Polio), HepB 1",
			"DTwP1 / DTaP1, OPV1 / OPV1 + IPV1, <br><span>OPV (Polio) alone if IPV canno be given,</span><br> Hib1, HepB2, Rotavirus 1, <br><span>Rotavirus vaccine [2/3 dose (depending on the brand) at 4 - 8 weeks interval],</span><br> PCV 1",
			"DTwP2 / DTaP2, OPV2 / OPV2 + IPV2 <br><span>OPV (Polio) alone if IPV cannot be given</span><br> Hib2, Rotavirus 2, PCV 2",
			"DTwP3 / DTaP3, OPV3 / OPV3 + IPV3 <br><span>OPV (Polio) alone if IPV cannot be given</span><br> Hib3, Rotavirus 3, HepB3 <br><span>The third dose of Hepatitis B can be given at 6 months of age</span></br>PCV 3",
			"Measles",
			"Hepatitis a 1",
			"MMR1, Varicella, PCV Booster",
			"DTwP B1 / DTaP B1, OPV4 / OPV4 + IPVB1, <br><span>OPV (Polio) alone if IPV cannot be given,</span></br> Hib B1, Hepatitis A 2 (18 months)",
			"Typhoid 1<br><span>Typhoid revaccination every 3 years</span>",
			"DTwP B2 / DTaP B2, OPV5, MMR2 <br><span>The second dose of MMR vaccine can be given at any time 4 - 8 weeks after the dose,</span><br> Typhoid 2, Varicella 2, <br><span>varicella (2nd dose may be given any time 3 months after the 1st dose).</span>",
			"Tdap / Td, <br><span>Tdap preferred to Td followed by repeat Td every 10 years, </span></br> HPV, <br><span>Only females, three doses at 0, 1 - 2 and 6 months.</span></br>"
		];

		$('#getschedule').click(function(){
			dob = $('#tagsinput').val();
			if(dob == 'undefined' || dob=="" || dob=='NAN') { 
				$('div.alerts').html("<span>Please select date in correct format.</span>").animate();
                $('div.schedule>ul').html("");
				return; 
			}
			else{
				$('div.alerts').html("");
				$('div.schedule>ul').html("");
			}
			
			for (var i=0; i<=3;i++) showSchedule('w', period[i], vaccweek[i], vaccine[i]);
			for (var i=4; i<=7;i++) showSchedule('m', period[i], vaccweek[i], vaccine[i]);
			for (var i=8; i<=10;i++) showSchedule('y', period[i], vaccweek[i], vaccine[i]);
			
			
		});
		
		function showSchedule(week, weekno, title, details)
		{
		/*	var d = new moment(dob, "YYYY-MM-DD HH:mm:ss");
// To get the date as 'Friday 25th January 2013'

var datestring = d.format("dd MM YYYY");
*/
			var weekdt = moment(dob,["DD-MM-YYYY"]).add(week, weekno); 
			
			console.log("dob--"+dob);
			console.log("weekdt--"+weekdt._d);
			
			$('div.schedule>ul').html( $('div.schedule>ul').html() + "<li><div><span class='label label-info' >"+ weekdt._d.getDate() + "-" + monthday[weekdt._d.getMonth()]  + "-" + weekdt._d.getFullYear() +"</span></div><div><strong>"+title+"</strong></div><div>"+details+"</div></li>");
			console.log(weekdt._d.getDate() + "-" + monthday[weekdt._d.getMonth()]  + "-" + weekdt._d.getFullYear());
			console.log(title+"::"+details);
		}
		$('#tagsinput').datepicker({format: 'dd-mm-yyyy'});
	});