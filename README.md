# GPQuery-rdash

Data visualisation and statistical analysis dashboard for Grand Prix Racing records since 1950




## Overview

This project was generated with the [Yeoman][yo] [Gulp-Angular][yo-gulp-ng] generator, and uses a custom implementation of the [rdash-angular][rdash-ng] dashboard theme.


### Ergast Developer API

The [Ergast Developer API][ergast] is web service that provides historical Grand Prix motor racing records from 1950 to present.

__Query Restrictions__
- **Lap time** data is available from the **1996** season onwards
- **Qualifying results** are only fully support from the **2003** season onwards
- **Fastest lap times** are included from the **2004** season onwards.
- **Pit stop** data is available from the **2012** season onwards
- A permanent **driver number** is assigned from the **2014** season onwards

__Response Paging & Rate Limiting__
- The `limit` query parameter allows up to 1000 results to be returned; the default is 30
- The `offset` query parameter can also be used to specify an offset; the default is 0
- The API cannot be polled more than __four times a second__, or __200 times an hour__

For more information, consult the [API Documentation][ergast] and [Terms and Conditions][ergast-toc].




## Getting Started

Install the [Zenhub][zenhub] extension for Chrome, which extends the base functionality provided by GitHub's issue tracking.  Also familiarise yourself with the [Gitflow][gitflow] workflow.


### Prerequisites

- [Git][git]
- [Node.js][node] >= v0.12.0 and [npm][npm]


### Installing

1. Clone the repository with git and enter the directory:
```
git clone https://github.com/GPQuery/gpquery-rdash.git
cd gpquery-rdash/
```

2. Install dependencies with (this will automatically call `bower install`):
```
npm install
```

3. Start the development server, which will automatically open the client in your browser:
```
gulp serve
```


### Developing

To build the project into `dist/`, run:
```
gulp build
```

To build the project, and then serve it from the `dist/` directory, run:
```
gulp serve:dist
```

To run Karma for unit tests, or Protractor for end-to-end tests:
```
gulp test
gulp protractor
```




## Contributing

Lorem ipsum dolor sit amet.



[zenhub]:https://www.zenhub.com/
[gitflow]:https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

[ergast]:http://ergast.com/mrd/
[ergast-toc]:http://ergast.com/mrd/terms/
[license-nc-sa]:http://creativecommons.org/licenses/by-nc-sa/3.0/

[git]:https://git-scm.com/
[node]:https://nodejs.org
[npm]:https://npmjs.org
[bower]:https://bower.io
[yo-gulp-ng]:https://github.com/Swiip/generator-gulp-angular
[yo]:https://yeoman.io
[rdash-ng]:https://github.com/rdash/rdash-angular
[gulp]:https://gulpjs.com
