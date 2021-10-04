# Description
This package is used for the [inversifyjs](https://github.com/inversify/InversifyJS) -containers of each process of 
the machine learning pipeline of the [bugfinder-framework](https://github.com/penguinsAreFunny/bugFinder-framework#readme) 
or ([npm:bugfinder-framework](https://www.npmjs.com/package/bugfinder-framework)). 

# Usage: package development
If you like to use one of these containers make sure to set this package as a peer-dependency of your package!
import {localityAContainer, localityBContainer, quantifierContainer, annotatorContainer, preprocessingContainer} 
from "bugfinder-framework-defaultcontainer";

    ... localityAContainer.bind ...

# Usage: Pipe-Implementation
    import {localityAContainer, localityBContainer, quantifierContainer, annotatorContainer, preprocessingContainer} 
    from "bugfinder-framework-defaultcontainer";

    ... localityAContainer.get ...