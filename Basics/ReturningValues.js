//This is a test to see if Object.keys is still bein supported in ES6

const images = {
    Juan:"https://imgs.search.brave.com/6hMP2OJB4OLXQVFK07caWrKu1_UVXxr4BaLFzrCyduk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ob21i/cmUtbXVzY3VsYXIt/am92ZW4tcXVlLXRy/YWJhamEtZW4tdW4t/aGVycmVyby1jb24t/ZWwtbWV0YWwtOTUy/ODExNjIuanBn",
    Elizabeth:"https://imgs.search.brave.com/hX2xVkcowyBglbY_EfCGmPxyNq0UqCraDWrvLkuXsew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXN0/b3JpYS5uYXRpb25h/bGdlb2dyYXBoaWMu/Y29tLmVzL21lZGlv/LzIwMjAvMTEvMjYv/aXNhYmVsLWxhLWNh/dG9saWNhX2RmZmM1/MWRiXzU1MHg2ODAu/anBn",
    John:"https://imgs.search.brave.com/ouY46z0di4FQGuPq9nsOpZzUins6iJUCwV2s8lIOsu4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjk0/ODIyNDYyL3Bob3Rv/L2NvbnN0cnVjdGlv/bi1zaXRlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ac3Nm/bVRnLXMtRWd3TjNQ/cm5uUTBZUjJ5d2c4/eW9LREg5VEJ4NWcz/MnljPQ"
}

function GetImage(array = images){
    const names = Object.keys(array);//It also serves values with "Object.values(obj)"
    return console.log(names);
}

GetImage();


/*
/////// Works perfectly fine //////

const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj));

*/ 
