 
   <?PHP


        $email_from="feedback@awesome.com"; 
    
        $email_subject = "Mail from Feedback Form";

        $email_to="anishhota1@gmail.com";

        $name = $_POST['name'];
        $visitor_email = $_POST['email'];
        $message = $_POST['message'];

        $email_body = "User name: $name. \n"."User Email: $email. \n"."User message: $message. \n";

        $headers = "From: $email_from \r\n";

        mail($to,$email_subject,$email_body,$headers)

        header("Location: contact.html")



        // // $pcount=0;
        // // $gcount=0;
        // while (list($key,$val)=each($_POST))
        // {
        // $pstr = $pstr."$key : $val \n ";
        // ++$pcount;

        // }
        // while (list($key,$val)=each($_GET))
        // {
        // $gstr = $gstr."$key : $val \n ";
        // ++$gcount;

        // }
        // if ($pcount > $gcount)
        // {
        // $message_body=$pstr;
        // mail($mailto,$subject,$message_body,"From:".$from);
        // echo "Mail has been sent";
        // }
        // else
        // {
        // $message_body=$gstr;
        // mail($mailto,$subject,$message_body,"From:".$from);
        // echo "Mail has been sent";
        // }
?>
