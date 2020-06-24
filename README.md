# ETAPAS DA REALIZAÇÃO DO PROJETO
1 - Dados importados para o Postgre (fonte: https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/2QYZBT)

2 - Criação da view :
create view 
tableauview as 
select aka_title.title as titulo, aka_title.movie_id as id_filme,
company_name.id as id_empresa, company_name.name as nome_empresa,
company_type.kind as tipo_empresa,
kind_type.kind as genero, aka_title.production_year as ano, 
company_name.country_code as pais_producao
from aka_title 
inner join 
movie_companies on aka_title.movie_id = movie_companies.movie_id 
inner join
kind_type on aka_title.kind_id = kind_type.id
inner join
company_name on movie_companies.company_id = company_name.id
inner join
company_type on movie_companies.company_type_id = company_type.id;

3 - Criação do Dashboard no Tableau Public com a view anterior

4 - Criação do Projeto em Angular

5 - Envio do projeto para o GitHub


# Angulartableau

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angular-tableau
