$(() => {
    $('#index-img').on('mouseover', function() {
        $(this).children('img').attr('src','./assets/img/index2.jpg');
    });
    $('#index-img').on('mouseout', function() {
        $(this).children('img').attr('src','./assets/img/index.jpg');
    });
    let i=0;
    $('#toEnglish').on('click',function () {
     
        $('section').children('.first').text('I am currently taking a web course at NexSeed Cebu Island Engineer. I am studying to become a freelance engineer.');
        $('section').children('.second').html('Plz feel free to follow me on <a href="https://twitter.com/se_1215" class="sns">Twitter<i class="fab fa-twitter-square"></i></a>,<a href="https://www.instagram.com/se_1215/" class="sns">Instagram<i class="fab fa-instagram"></i></a> and <a href="https://github.com/shunyaendoh" class="sns">Github<i class="fab fa-github-square"></i></a>.');
        $('#about-text1').text('I was not good at standing in front of people and was a quiet child.');
        $('#about-text2').text('I was also not good at taking pictures, and smiling pictures are very rare.');
        $('#about-text3').text('My favorite sports are break dancing and snowboarding. I am not doing much now.');
        $('#about-text4').text('I used to play soccer from kindergarten to junior high school, but I did not really like it');
        $(this).text('JAPANESE');

        if(i>=1) {
        $(this).attr('href','');
        }
        i++;
    })

})