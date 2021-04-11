<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-store,no-cache">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="style.css">
<script>
function zurueck() {
    return true;
}

function weiter() {
    return true;
}
</script>
</head>
<body>
<header>
<h1>Online-Kurswahl</h1>
</header>
<content>
<p>Dieses Programm führt Sie durch die Kurswahl für die Jahrgangsstufe des Gymnasiums in Baden-Württemberg ab Abitur 2021.</p>
<p>Verwenden Sie zum Weiter- bzw. Zurückschalten die Tasten in der
unten stehenden Navigationsleiste und <b>nicht die Tasten des Browsers</b>.</p>
<p>Das Programm wird Ihnen zur Verfügung gestellt von</p>
<p style='text-align: center;'><img src='/alle/logo.png'><br>Copernicus-Gymnasium<br>Lessingstraße 27,<br>76661 Philippsburg<br></p>
<p style='text-align: center;'>Mit freundlicher Unterstützung vom Königin Katharina Stift Stuttgart</p>
<p style='text-align: center;'>&copy; gb@kkst.s.bw.schule.de </p>
<p style='text-align: center;'>
<?php
$c=intval(file_get_contents("counter.dat"));
$c++;
file_put_contents("counter.dat",$c);
echo $c." Aufrufe seit 9.05.20";
?>
</p>
</content>
<footer>

</footer>
</body>
</html>
