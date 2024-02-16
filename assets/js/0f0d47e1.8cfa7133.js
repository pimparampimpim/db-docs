"use strict";(self.webpackChunkdb_dev=self.webpackChunkdb_dev||[]).push([[2256],{4980:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var e=i(7624),a=i(2172);const r={id:"many_to_many",sidebar_position:3,description:""},s="\u0421\u0432\u044f\u0437\u044c \u043c\u043d\u043e\u0433\u0438\u0435 \u043a\u043e \u043c\u043d\u043e\u0433\u0438\u043c",o={id:"postgresql/relations/many_to_many",title:"\u0421\u0432\u044f\u0437\u044c \u043c\u043d\u043e\u0433\u0438\u0435 \u043a\u043e \u043c\u043d\u043e\u0433\u0438\u043c",description:"",source:"@site/docs/03.postgresql/01.relations/03.many_to_many.md",sourceDirName:"03.postgresql/01.relations",slug:"/postgresql/relations/many_to_many",permalink:"/db-docs/docs/postgresql/relations/many_to_many",draft:!1,unlisted:!1,editUrl:"https://github.com/sirius-db-dev/db-docs/tree/main/docs/03.postgresql/01.relations/03.many_to_many.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"many_to_many",sidebar_position:3,description:""},sidebar:"tutorialSidebar",previous:{title:"\u0421\u0432\u044f\u0437\u044c \u043e\u0434\u0438\u043d \u043a \u043e\u0434\u043d\u043e\u043c\u0443",permalink:"/db-docs/docs/postgresql/relations/one_to_one"},next:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 UUID",permalink:"/db-docs/docs/postgresql/uuid"}},l={},d=[];function m(n){const t={br:"br",code:"code",h1:"h1",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h1,{id:"\u0441\u0432\u044f\u0437\u044c-\u043c\u043d\u043e\u0433\u0438\u0435-\u043a\u043e-\u043c\u043d\u043e\u0433\u0438\u043c",children:"\u0421\u0432\u044f\u0437\u044c \u043c\u043d\u043e\u0433\u0438\u0435 \u043a\u043e \u043c\u043d\u043e\u0433\u0438\u043c"}),"\n",(0,e.jsx)(t.p,{children:"\u0414\u0430\u043d\u044b 2 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438:"}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"\u0430\u043a\u0442\u0435\u0440 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0438\u043c\u044f, \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u0438 \u0434\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),"\n",(0,e.jsx)(t.li,{children:"\u0444\u0438\u043b\u044c\u043c \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, imdb \u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0438 \u0433\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430"}),"\n"]}),"\n",(0,e.jsxs)(t.p,{children:["\u0410\u043a\u0442\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0441\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0444\u0438\u043b\u044c\u043c\u0430\u0445.",(0,e.jsx)(t.br,{}),"\n","\u0412 \u0444\u0438\u043b\u044c\u043c\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u043a\u0442\u0435\u0440\u043e\u0432."]}),"\n",(0,e.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u043c \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430:"}),"\n",(0,e.jsx)(t.mermaid,{value:'erDiagram\n    actor {\n        int id PK\n        text first_name\n        text last_name\n        date birth_date\n    }\n    film {\n        int id PK\n        text title\n        float imdb_rating\n        int year\n    }\n    actor }o..o{ film : ""'}),"\n",(0,e.jsx)(t.p,{children:"\u042d\u0442\u043e\u0439 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0435 \u0432 SQL \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438 \u0441\u0432\u044f\u0437\u0438:"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-sql",children:"drop table if exists actors, films, film_to_actor cascade;\n\ncreate table actors\n(\n    id         int primary key\n        generated by default as identity, -- \u0430\u0432\u0442\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043b\u044e\u0447\u0430\n    first_name text,\n    last_name  text,\n    birth_date date\n);\n\ncreate table films\n(\n    id          int primary key generated by default as identity,\n    title       text,\n    imdb_rating float,\n    year        int\n);\n\n-- \u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441\u0432\u044f\u0437\u0438 many-to-many\ncreate table film_to_actor\n(\n    actor_id int references actors,\n    film_id  int references films,\n    primary key (actor_id, film_id)\n);\n\ninsert into actors(first_name, last_name, birth_date)\nvalues ('\u0422\u043e\u043c', '\u0425\u043e\u043b\u043b\u0430\u043d\u0434', '1996-06-01'),\n       ('\u0411\u0435\u043d\u0435\u0434\u0438\u043a\u0442', '\u041a\u0430\u043c\u0431\u0435\u0440\u0431\u044d\u0442\u0447', '1976-07-19'),\n       ('\u041c\u0430\u0440\u043a', '\u0420\u0443\u0444\u0444\u0430\u043b\u043e', '1956-11-22'),\n       ('\u041a\u0440\u0438\u0441', '\u0425\u0435\u043c\u0441\u0432\u043e\u0440\u0442', '1983-08-11'),\n       ('\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f', '\u041f\u0430\u043d\u0438\u043d\u0430', '1983-01-15');\n\ninsert into films(title, imdb_rating, year)\nvalues ('\u0427\u0435\u043b\u043e\u0432\u0435\u043a-\u043f\u0430\u0443\u043a: \u041d\u0435\u0442 \u043f\u0443\u0442\u0438 \u0434\u043e\u043c\u043e\u0439', 8.2, 2021),\n       ('\u041c\u0441\u0442\u0438\u0442\u0435\u043b\u0438: \u0424\u0438\u043d\u0430\u043b', 8.4, 2019),\n       ('\u0422\u043e\u0440: \u0420\u0430\u0433\u043d\u0430\u0440\u0451\u043a', 7.9, 2017),\n       ('\u041a\u043e\u0439\u044f\u0430\u043d\u0438\u0441\u043a\u0430\u0446\u0438', 8.2, 1982);\n\ninsert into film_to_actor(actor_id, film_id)\nvalues (1, 1),\n       (1, 2),\n       (2, 1),\n       (2, 2),\n       (3, 2),\n       (3, 3),\n       (4, 2),\n       (4, 3);\n\n-- \u0432\u044b\u0432\u043e\u0434 \u0430\u043a\u0442\u0451\u0440\u043e\u0432 \u0438 \u0438\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438\nselect *\nfrom actors a\n         left join film_to_actor fa on a.id = fa.actor_id\n         left join films f on fa.film_id = f.id;\n\n-- \u0432\u044b\u0432\u043e\u0434 \u0430\u043a\u0442\u0451\u0440\u043e\u0432 \u0438 \u0438\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432\nselect\n  a.id,\n  a.first_name,\n  a.last_name,\n  a.birth_date,\n  coalesce(jsonb_agg(jsonb_build_object(\n    'id', f.id, 'title', f.title, 'imdb_rating', f.imdb_rating))\n      filter (where f.id is not null), '[]') as films\nfrom actors a\nleft join film_to_actor af on a.id = af.actor_id\nleft join films f on f.id = af.film_id\ngroup by a.id;\n\n-- \u0432\u044b\u0432\u043e\u0434 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u0438 \u0438\u0445 \u0430\u043a\u0442\u0451\u0440\u043e\u0432 \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432\nselect\n  f.id,\n  f.title,\n  f.imdb_rating,\n  f.year,\n  coalesce(json_agg(json_build_object(\n    'id', a.id, 'first_name', a.first_name,\n    'last_name', a.last_name, 'birth_date', a.birth_date))\n      filter (where a.id is not null), '[]') as actors\nfrom films f\nleft join film_to_actor af on f.id = af.film_id\nleft join actors a on a.id = af.actor_id\ngroup by f.id;\n"})})]})}function c(n={}){const{wrapper:t}={...(0,a.M)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(m,{...n})}):m(n)}}}]);