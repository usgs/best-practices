Example Project
===============

As part of the usgs/best-practices repository, this branch makes an effort to
provide a starting point for new or empty projects. Recognizing each project
and language is different and may come with its own set of best practices,
these are merely reasonable guidelines from which to start. Official
policy is maintained in the USGS website. In the case of any direct conflict
between this example project and official USGS policy, one is directed to defer
to official USGS policy.


Contents
--------

Below is a listing of each recommended file/folder with explanations of the
purpose of each:


### ./docs

Documentation for the project goes here. With the proper structure, these
files can be automatically [published as a GitHub Page][1] for the project.

> Note: There is a hidden "./docs/.gitignore" file as part of this folder by
>       default. This file makes it so the `docs` folder itself appears in
>       the repository even though it is otherwise empty. If you clone this
>       branch as a starting point for an actual repository, you will want to
>       delete this "./docs/.gitignore" file.


### ./src

All source code for the project can go in here. Different languages have
different packaging conventions which should be implemented here.

> Note: There is a hidden "./src/.gitignore" file as part of this folder by
>       default. This file makes it so the `src` folder itself appears in
>       the repository even though it is otherwise empty. If you clone this
>       branch as a starting point for an actual repository, you will want to
>       delete this "./src/.gitignore" file.


### ./.gitignore

This file informs Git which files should not be monitored for version control.
These are typically system or generated files (such as compiled binaries). You
should update this file with the build artifacts you wish to exclude from
version control.


### ./CODE_OF_CONDUCT.md

This file outlines the expectations for persons in the project community.


### ./CONTRIBUTING.md

This file provides guidance for how a person can contribute suggestions,
documentation and/or working code to the project.


### ./DISCLAIMER.md

This file (or similar documentation) is **required** for all USGS projects
per the [USGS Fundamental Science Practices (FSP)][2]. The example file
contains two of the most typical disclaimers that apply to software projects.
Depending on the current state of the project, you should update this file to
include only the proper disclaimer.


### ./LICENSE.md

This file contains the license under which the project source code is released.
The abscence of a license does not automatically make something open-source and
therefor this file (or similar documentation) is **required**. Typically
government work falls under "Public Domain", however [CC0-1.0][3] may be used
for international recognition.

Additionally, licenses for any library/code dependencies used or distributed
with this software package should be identified and listed here in compliance
with the license governing said library/code.


### ./README.md

This file serves as a sort of project "home page" for those browsing the
project repository. This file should contain the project name, description,
build status, getting started documentation and links to other relevant
resources.


Other Notes
-----------

It is recommended build artifacts go into a `build` directory which is entirely
excluded from version control. Similarly, distribution artifacts (if any) should
be placed in a `dist` folder which is entirely excluded from version control.
If project convention uses different folders for these purposes, be sure to
update the `.gitignore` file to that effect.

If you have suggestions for best practices for a specific language, you can
use this branch as a starting point and additional files conventional to that
specific project/language. Please name these new branches
`project-scaffold-SCOPE` where `SCOPE` is either a language or team (or both!).


Maintainers
-----------
 - @emartinez-usgs



[1]: https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/
[2]: https://www2.usgs.gov/fsp/fsp_disclaimers.asp
[3]: https://creativecommons.org/publicdomain/zero/1.0/legalcode
