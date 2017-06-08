var author = {
	1: "Unknown",
	2: "Rachel Cohn",
	3: "Rudyard Kipling",
	4: "Truman Capote",
	5: "The 1975", 
	6: "J.D. Salinger",
	7: "Unknown",
	8: "Jillian Medoff",
	9: "Inside Llewyn Davis",
	10: "Jesicca Katoff",
	11: "John 15:13",
	12: "Philippians 4:6",
	13: "Matthew 6:33",
	14: "Dr. Seuss"
}

var quotes = {1: "You have touched me and I have grown",
	2: "It’s bullshit to think of friendship and romance as being different. They’re not. They’re just variations of the same love. Variations of the same desire to be close.",
	3: "My heart is so tired.",
	4: "Anyone who ever gave you confidence, you owe them a lot.",
	5: "She’s inducing sleep to avoid pain.",
	6: "I knew it wasn’t too important, but it made me sad anyway.",
	7: "Happiness is when you feel good about yourself without feeling the need for someone else’s approval.",
	8: "My only relief is to sleep. When I’m sleeping, I’m not sad, I’m not angry, I’m not lonely, I’m nothing.",
	9: "I’m tired… I’m so tired. I thought I just needed a night’s sleep, but it’s more than that.",
	10: "If only my heart were as cold as I pretend it is, maybe I could get over this.",
	11: "Greater love has no one than this: to lay down one’s life for one’s friends.",
	12: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
	13: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
	14: "Don’t cry because it’s over, smile because it happened."

}


$(document).ready(function() {
    $("button").click(function() {
        $('body').each(function() {
        	var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            $(this).css('background',randomColorChange);
            $("button").css('background-color', randomColorChange);
            $("#text").css('color', randomColorChange);
            $("#author").css('color', randomColorChange);
        });
        $("#text").each(function() {
	       var num = Math.floor((Math.random() * 14) + 1); 
	       document.getElementById("text").innerHTML = quotes[num];
	       document.getElementById("author").innerHTML = author[num];
        })
    });

});


