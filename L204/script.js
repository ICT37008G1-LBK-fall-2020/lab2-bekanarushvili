/*
დაწერეთ ციკლი რომელიც სთხოვს მომხმარებლს შეიყვანოს პაროლი მანამდე სანამ შეყვანილი ტექსტი არ უდრის წინაასწარ განსზაღვრულ მნიშვნელობას (ხისტად გაწერილს კოდში).
*/
var pword;
pword="EcsOtB";
do
{
    var write_pword = prompt ("Password:", "");
}
while (write_pword != pword);