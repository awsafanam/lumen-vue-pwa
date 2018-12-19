# Prostuti App

List of Domains to add to hosts file
```$xslt
127.0.0.1       prostuti.local
127.0.0.1       api.prostuti.local
127.0.0.1       coaching.prostuti.local
127.0.0.1       classroom.prostuti.local
```

Add this to apache vhost file

```$xslt
<VirtualHost *:80>
    ServerAdmin prostuti.local
    ServerName prostuti.local
    DocumentRoot "D:/xampp/htdocs/prostuti/public"
</VirtualHost>
<VirtualHost *:80>
    ServerAdmin api.prostuti.local
    ServerName api.prostuti.local
    DocumentRoot "D:/xampp/htdocs/prostuti/public"
</VirtualHost>
<VirtualHost *:80>
    ServerAdmin coaching.prostuti.local
    ServerName coaching.prostuti.local
    DocumentRoot "D:/xampp/htdocs/prostuti/public"
</VirtualHost>
<VirtualHost *:80>
    ServerAdmin classroom.prostuti.local
    ServerName classroom.prostuti.local
    DocumentRoot "D:/xampp/htdocs/prostuti/public"
</VirtualHost>
``` 

For production: update .env file
```$xslt
APP_ENV=production
APP_DOMAIN=prostuti.com
```
