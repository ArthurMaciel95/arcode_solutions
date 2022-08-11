<h1 align=center>Arcode Soluções Web</h1>
<div align=center><img  src="https://user-images.githubusercontent.com/62079236/183991744-09e77298-88fa-43b1-bfc8-2c31065b349a.jpg" width="200px"></div>

<h3 align=center>Empresa voltada para criação de página web, nossos serviços também estão incluidos aplicativos, landing page e outros sistemas.</h3>


### Estrutura pra criação de post. :speech_balloon:
```
{
  "title":"string",           //required
  "introdution":"string",     // required
  "tags":Array<"TUTORIAL" | "TECNOLOGIA" | "PROGRAMAÇÃO" | "MARKETING" | "NEGÓCIOS">, // cannot repeat the same tag.
  "paragraph":Array<object>, //required min 4 object
  "author":{                 // relation with table user //required
    "name":"string",    
    "last_name":"string",
    "email":"string"
  },
  "created_at": Date,     // generate auto
  "updated_at":Date       // generate auto
}
```


### Estrutura para criação de usuário.
```
{
  "name":string,         //required
  "email":string,        //required
  "phone_number":number, //required
  "password":string,     //required
  "addres":{
    "street":string,
    "district:string,
    "city":string,
    "aditional_information":string, //optinal
    "country":string
  }
  "created_at":string,   // generate auto
  "updated_at":string,   // generate auto
  "post":Array<object>   
}
```
