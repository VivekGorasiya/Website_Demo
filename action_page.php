 <?php
 $con = mysqli_connect('localhost','root');
 mysqli_select_db($con,'excform');
 $name= $_POST['name'];
 $sex= $_POST['sex'];
 $age=$_POST['age'];
 $query= "insert into userinfodata (name,sex,age) 
 values('$name','$sex','$age')";
 mysqli_query($con,$query);

 ?>