---
stack: 
- TypeScript
- Node.js
- JavaScript
- HTML/CSS
dates: Sept - Nov 2018
github: ""
link: https://insightubc-310.herokuapp.com/
enddate: 2018-11-31
title: InsightUBC
summary: InsightUBC is a full-stack web application, providing a query system for UBC course and room information, hosted on Heroku. Data, such as room capacity, building names, course averages, course instructors, and pass/fail rates, can be queried and filtered through a WebUI. 
banner: /assets/images/projects/insightUBC.png
readmore: false
---
# InsightUBC: Course and Room Data Querying

#### ✨✨ CLICK [HERE](https://insightubc-310.herokuapp.com/) TO SEE OUR APP IN ACTION ✨✨

InsightUBC is a full-stack web application, providing a query system for UBC course and room information, hosted on Heroku. Data, such as room capacity, building names, course averages, course instructors, and pass/fail rates, can be queried and filtered through a WebUI. Room and course datasets are parsed from [UBC PAIR](https://webprd01.pair.ubc.ca/reports/gradesdist_request.action) (accessible only by UBC students and faculty), which provides actual data from course sections.

**Made with:** Backend – Node, TypeScript; Frontend – JavaScript, HTML, CSS; Testing - Chai, Mocha, Karma; Hosted on Heroku

This project was a term project for **[CPSC 310: Introduction to Software Engineering](https://github.com/ubccpsc/310)**.

## ⚙️ Application components

### Testing
[Mocha Test Environment](https://mochajs.org/) with [Chai Expectations](https://www.chaijs.com/api/bdd/) was used to **black box test** dataset parsing and manipulation methods, such as `addDataset` and `deleteDataset` in `/src/controller/DatasetController.ts`.

Tests can be found in `test/InsightFacade.spec.ts` and run with `yarn test` after setting up the local environment (see instructions below).

Frontend testing was done with the [Karma](https://karma-runner.github.io/2.0/index.html) test runner.

### Parsing datasets

There are two types of datasets: courses and rooms. Datasets are initially a single **ZIP file**, which are read then parsed as **JSON files** (courses) or **HTML files** (rooms) from a cached, older version of [UBC's space finder](https://learningspaces.ubc.ca/find-space).

Datasets are parsed (using JSZip then JSON.parse for JSONs or parse5 for HTML) and checked to be valid, according to a criteria, then saved in JSON format to the `./data` folder, so they can be loaded from disk when needed.

When room datasets are parsed, the address is encoded to a latitude/longitude pair by using a provided API.

### Query engine

The EBNF of a valid query can be found below:
```
QUERY ::='{'BODY ', ' OPTIONS (', ' TRANSFORMATIONS)? '}'

BODY ::= 'WHERE:{' (FILTER)? '}'
OPTIONS ::= 'OPTIONS:{' COLUMNS ', ' (SORT)?'}'
TRANSFORMATIONS ::= 'TRANSFORMATIONS: {' GROUP ', ' APPLY '}'

FILTER ::= (LOGICCOMPARISON | MCOMPARISON | SCOMPARISON | NEGATION)

LOGICCOMPARISON ::= LOGIC ':[{' FILTER ('}, {' FILTER )* '}]'  
MCOMPARISON ::= MCOMPARATOR ':{' key ':' number '}'  
SCOMPARISON ::= 'IS:{' key ':' [*]? inputstring [*]? '}'  // inputstring may have option * characters as wildcards
NEGATION ::= 'NOT :{' FILTER '}'

LOGIC ::= 'AND' | 'OR'
MCOMPARATOR ::= 'LT' | 'GT' | 'EQ'

COLUMNS ::= 'COLUMNS:[' ((key|applykey) ',')* (key|applykey) ']'
SORT ::= 'ORDER: ' ('{ dir:'  DIRECTION ', keys: [ ' ORDERKEY (',' ORDERKEY)* ']}') | ORDERKEY
DIRECTION ::= 'UP' | 'DOWN'  
ORDERKEY ::= key | applykey

GROUP ::= 'GROUP: [' (key ',')* key ']'                                                          
APPLY ::= 'APPLY: [' (APPLYRULE (', ' APPLYRULE )* )? ']'  
APPLYRULE ::= '{' applykey ': {' APPLYTOKEN ':' key '}}'
APPLYTOKEN ::= 'MAX' | 'MIN' | 'AVG' | 'COUNT' | 'SUM'                           

key ::= string '_' string
inputstring ::= [^*]* // zero or more of any character except asterisk.
applykey ::= [^_]+ // one or more of any character except underscore.
```
<sup>[EBNF source from project requirements](https://github.com/ubccpsc/310/blob/2018sept/project/Deliverable2.md)</sup>

Semantic and syntactic checks are performed on each query to make sure that the incoming query matches the specified EBNF.

### Web server & frontend UI

We use `restify` as a REST server library. **REST endpoints** are adapted to our existing dataset and query methods:

* `GET /`: returns our UI

* `PUT /dataset/:id/:kind`: submits a ZIP file as a dataset

* `DELETE /dataset/:id`: removes a previously saved ZIP file

* `POST /query`: sends a query in JSON format as the request body

* `GET /datasets`: returns a list of datasets that were added

Other `GET /*` endpoints get our static resources in the `public` folder of the frontend.

Vanilla **JavaScript** is used to build query from the HTML form on the UI through the `document` object, in the `CampusExplorer.buildQuery` method. An Ajax/REST call is sent to the `/query` endpoint in the `CampusExplorer.sendQuery` method using browser-native method `XMLHttpRequest`.
