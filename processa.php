<!DOCTYPE html>
<html lang="pt-br">
   <head>
      <meta charset="UTF-8">
      <title></title>
   </head>
   <body>
      <?php
         $nome = $_POST['name'];
         $email = $_POST['email'];
         $mensagem = $_POST['message'];

         require 'vendor/autoload.php';

         $from = new SendGrid\Email(null, "teusloko7@gmail.com");
         $subject = "Mensagem de contato";
         $to = new SendGrid\Email(null, "teusloko7@gmail.com");
         $content = new SendGrid\Content("text/html", "Olá, <br><br>Nova mensagem de contato<br>
         <br>Nome: $nome<br>E-mail: $email <br>Mensagem: $mensagem");

         $mail = new SendGrid\Mail\Mail($from, $subject, $to, $content);

         //Necessário inserir a chave
         $apiKey = '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';
         $sg = new \SendGrid($apiKey);
         $response = $sg->client->mail()->send()->post($mail);
         echo "Mensagem enviada com sucesso!"
      ?>
   </body>
</html>