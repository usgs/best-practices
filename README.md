# U.S. Geological Survey Best Practices

This repository represents an effort to strengthen the software community within
the U.S. Geological Survey and follow the open source efforts promoted by the
executive level of the federal government. The intent is this become a community
built project. All users are encouraged to contribute and comment on issues and
pull requests.

## Guiding Principles
- Produce/Accomplish
- Communicate
- Develop buy-in
- Integrate
- Iterate
- Innovate
- Be open
- Practice (as in practice what we preach, become practitioners!)

## Development
### [Code Reviews](software/reviews.md)
Considerations when conducting code reviews:
* Application Security – This reminds developers to handle buffer overruns, mask or remove any internal resource references, and verifying server-side validity checks to coincide with client-side ones.  Often overlooked security items such as session information, transaction controls, developer back-doors, and hard-coded passwords are questioned.
* Error Handling – This area is looked at to help ensure safe and user-friendly end-user experiences by questioning function caller notifications, assertions, and exception handling. It’s also important not to give too much information in errors, so that is examined as well.
Performance – Since this is always a concern, our checklist identifies some key areas that need to be reviewed, such as recursive functions, duplicated objects, system call blocks, and busy waits.
* Resource Leaks – Resource leaks can cause and contribute to performance issues, so the checklist includes questions regarding the freeing of allocated memory and objects, and tracking reference counts.
Thread Safeness – This section helps identify the safety of global variables and any deadlock risks.
* Functions – These certainly aren’t left out, and are reviewed to check parameter verification, out-of-bound indexes, and the initialization of variables.
* Comments - Well commented code will be easier to operate and maintain in the long run
* Coding Conventions - Adherence to coding standards/style/conventions (add link or references) helps to ensure consistency and readability and thus improve maintainability

## Software Release
A new [software release policy](https://www2.usgs.gov/usgs-manual/im/IM-OSQI-2016-01.html) is available from the USGS. This section has some resources for USGS employees and collaborators looking to understand how we do things in terms of review and release.

* [DOIs for software](doi.md)

## Using [Issues](https://github.com/usgs/best-practices/issues/)
We use the issues in this repo to informally discuss the practice of software development, review, and release in the USGS. Official guidance is found on the [USGS Fundamental Science Practices web site](https://www2.usgs.gov/fsp/).

## DevOps



## IT
